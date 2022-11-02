import "./style";
import Type, { status, credits, sortBy } from "../constants";
import {
  fetch,
  fetchGenres,
  fetchMovieSearch,
  fetchDetails,
  fetchMovieCredits,
  fetchLanguages,
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
} from "./actor";

document.addEventListener("DOMContentLoaded", async (e) => {
  const page = location.pathname;
  if (page === "/index.html" || page === "/") {
    fetch(Type.tv, status.popular)
      .then(({ data }) => {
        displayMovies(data.results);
        initializeMoveEvent();
        // cardClick()
        console.log(data.results);
      })
      .catch((err) => console.log(err));
  }
  if (page === "/movie.html" || page === "/movie") {
    fetchDetails(Type.movie, history.state.id).then((data) => {
      disMoviesDetails(data.data);
    });
    fetchMovieCredits(Type.movie, history.state.id, credits.movieCredits).then(
      (data) => {
        console.log(data);
        displayCast(data.data.cast);
        displayCrew(data.data.crew);
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
      console.log(data.data);
    });
    fetchMovieCredits(Type.person, history.state.id, credits.movieCredits).then(
      (data) => {
        console.log(data);
        displayCastActor(data.data.cast);
        displayCrewActor(data.data.crew);
      }
    );
  }

  if (page === "/movies.html" || page === "/movies") {
    let genreWrapper = document.querySelector("#with_genres");
    let sortSelect = document.querySelector("#activitySelector");
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

    const formSearchAll = document.forms[0];
    formSearchAll.addEventListener("submit", (e) => {
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
      console.log(queryStringObj);
      formSearchAll.reset();
    });
  }
});
