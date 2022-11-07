import "./style";
import '../assets/modal-video.min.css';
import Type, { status, credits, sortBy } from "../constants";
import {
  fetch,
  fetchGenres,
  fetchMovieSearch,
  fetchDetails,
  fetchMovieCredits,
  fetchLanguages,
  fetchSearch,
  fetchMovieVedio,
} from "../api";
import {
  disMoviesDetails,
  displayCast,
  displayCrew,
  initializeCastEvent,
} from "./movie";
import { displayPeople } from "./people";
import { displayMovies, initializeMoveEvent } from "./home";
import {
  displayActor,
  initializeActorEvent,
  displayCastActor,
  displayCrewActor,
  initializeActorMenuEvent, 
} from "./actor";
import { displaySearchMovies } from "./movies";
const _ = require(`lodash`);

document.addEventListener("DOMContentLoaded", async (e) => {
  addEventListener("popstate", (event) => {
    location.reload();
  });

  const page = location.pathname;
  if (page === "/index.html" || page === "/") {
    fetch(Type.movie, status.popular)
      .then(({ data }) => {
        displayMovies(data.results);
        initializeMoveEvent();
      })
      .catch((err) => console.log(err));
  }
  if (page === "/movie.html" || page === "/movie") {
    const promise = await Promise.all([
      fetchDetails(Type.movie, history.state.id),
      fetchMovieVedio(Type.movie, history.state.id),
    ]);
    disMoviesDetails({ ...promise[0].data, ...promise[1].data });
    // fetchDetails(Type.movie, history.state.id).then((data) => {});
    // fetchMovieVedio(Type.movie, history.state.id).then((data) => {});
    fetchMovieCredits(Type.movie, history.state.id, credits.movieCredits).then(
      (data) => {
        displayCast(data.data.cast);
      }
    );
    initializeCastEvent();
  }
  if (page === "/people.html" || page === "/people") {
    fetch(Type.person, status.popular).then(({ data }) => {
      displayPeople(data?.results);
      initializeActorEvent();
    });
  }
  if (page === "/search.html" || page === "/search") {
    // const query = new URLSearchParams(location.search);
    fetchMovieSearch(history.state.title).then(({ data }) => {
      displayMovies(data.results);
    });
  }
  if (page === "/actor.html" || page === "/actor") {
    fetchDetails(Type.person, history.state.id).then((data) => {
      displayActor(data.data);
    });
    fetchMovieCredits(Type.person, history.state.id, credits.movieCredits).then(
      (data) => {
        displayCastActor(data.data.cast);
        displayCrewActor(data.data.crew);
        initializeActorMenuEvent()
      }

    );
  }

  if (page === "/movies.html" || page === "/movies") {
    let genreWrapper = document.querySelector("#with_genres");
    let sortSelect = document.querySelector("#activitySelector");
    // let languageSelect = document.querySelector("#languageSelector");
    let sortTemplate = "";
    Object.entries(sortBy).forEach((option) => {
      sortTemplate += `<option value="${option[1]}">${option[0]}</option>`;
    });
    sortSelect.innerHTML = sortTemplate;
    const promise = await Promise.all(
      [fetchGenres, fetchLanguages].map((func) => func(Type.movie))
    );
    let genresTemplate = "";
    promise[0].data.genres.forEach((genre) => {
      genresTemplate += `<li><input type="checkbox" id=${genre.id} value=${genre.id} name="with_genres" /> <label for="${genre.id}">${genre.name}</label></li>`;
    });
    genreWrapper.innerHTML = genresTemplate;

    // let languageTemplate = "";
    // promise[1].data.forEach((language) => {
    //   languageTemplate += `<option value="${language.english_name}">${language.english_name}</option>`;
    // });
    // languageSelect.innerHTML = languageTemplate;

    const formSearchAll = document.forms[0];
    formSearchAll.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(formSearchAll);
      const queryStringObj = {};
      for (var pair of formData.entries()) {
        if (queryStringObj[pair[0]]) {
          queryStringObj[pair[0]] += `,${pair[1]}`;
        } else {
          queryStringObj[pair[0]] = pair[1];
        }
      }

      let data = await fetchSearch(Type.movie, queryStringObj);
      console.log(data, "tamom");
      // })
      formSearchAll.reset();
      displaySearchMovies(data.data.results);
    });
  }
});
