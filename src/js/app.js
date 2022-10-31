import "./style";
import Type, { status, credits, list } from "../constants";
import { fetch } from "../api";
import { fetchDetails, fetchMovieCredits } from "../api";
import { disMoviesDetails, displayCast, displayCrew } from "./movie";
import { fetchMovieSearch } from "../api";
import { displayPeople } from "./people";
import { displayMovies, initializeMoveEvent } from "./home";
import { searchMoviess } from "../js/searchess";
import { displayActor, initializeActorEvent, displayCastActor, displayCrewActor } from "./actor";

document.addEventListener("DOMContentLoaded", (e) => {
  const page = location.pathname;
  if (page === "/index.html" || page === "/") {
    fetch(Type.movie, status.popular)
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
  }
  if (page === "/people.html" || page === "/people") {
    fetch(Type.person, status.popular).then(({ data }) => {
      displayPeople(data?.results);
      initializeActorEvent()
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
    fetchMovieCredits(Type.person, history.state.id, credits.movieCredits).then((data) => {
      console.log(data);
      displayCastActor(data.data.cast);
      displayCrewActor(data.data.crew);
    })
  }

  if (page === "/searchess.html" || page === "/searchess") {

    console.log("salom");
    const formSearchAll = document.forms[0];
    formSearchAll.addEventListener("click", searchMoviess)
  }
});
