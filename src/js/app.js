import "./style";
import Type, { status } from "../constants";
import { fetch } from "../api";
import { fetchDetails } from "../api";
import { disMoviesDetails } from "./movie";
import { fetchMovieSearch } from "../api";
import { displayPeople } from "./people";
import { displayMovies, initializeMoveEvent } from "./home";
import { displayActor, initializeActorEvent } from "./actor";
document.addEventListener("DOMContentLoaded", (e) => {
  const page = location.pathname;
  if (page === "/index.html" || page === "/") {
    fetch(Type.movie, status.popular)
      .then((data) => {
        displayMovies(data.data.results);
        initializeMoveEvent();
      })
      .catch((err) => console.log(err));
  }
  if (page === "/movie.html" || page === "/movie") {
    fetchDetails(Type.movie, history.state.id).then((data) => {
      disMoviesDetails(data.data);
    });
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

    })
  }
});
