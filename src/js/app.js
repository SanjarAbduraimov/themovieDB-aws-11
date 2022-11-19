import "./style";
import "../assets/modal-video.min.css";
import Type, {
  status,
  credits,
  sortBy,
  sortByTv,
  typeAccount,
} from "../constants";
import {
  fetch,
  fetchGenres,
  fetchMovieSearch,
  fetchDetails,
  fetchMovieCredits,
  fetchLanguages,
  fetchSearch,
  fetchMovieVedio,
  fetchlistMovie,
  fetchKeywordMovie,
  fetchKeyword,
  fetchRecommendation,
  fetchMovieFavority,
  fetchMovieFavorityGet,
  fetchMovieWatchList,
  fetchAccount,
  fetchAccountStatus,
  fetchMovieWatchDel,
} from "../api";
import {
  disMoviesDetails,
  displayCast,
  initializeCastEvent,
  displayNetwork,
  displayKeyword,
  displayMovieStatus,
  displayRecomaditions,
  displayTvSearch,
  initializeTvEvent,
} from "./movie";
import { displayPeople } from "./people";
import {
  displayMovies,
  initializeMoveEvent,
  displayTv,
  displayMovie,
  initializeMEvent,
  displayMoviesTreanding,
} from "./home";
import {
  eventKeywords,
  displayKeywords,
  displayKeywordResults,
  initializeKeyEvent,
} from "./keyword";
import {
  displayActor,
  initializeActorEvent,
  displayCastActor,
  displayCrewActor,
  initializeActorMenuEvent,
  initializeActingEvent,
} from "./actor";
import { 
  displayAccountName, 
  displayFavoriteMovies ,
  initializeAccountEvent,
} from "./account";
import { displaySearchMovies } from "./movies";
const _ = require(`lodash`);

document.addEventListener("DOMContentLoaded", async (e) => {
  addEventListener("popstate", (event) => {
    location.reload();
  });
  document.addEventListener("click", (e) => {
    const element = e.target;

    let cardList = document.querySelectorAll(".card.show");
    if (!cardList.length) return;

    cardList?.forEach((card) => {
      card.classList.remove("show");
      card.querySelector(".card__menu").classList.remove("show");
    });
    let isMenuBtn = element
      .closest(".card__menu__btn")
      ?.classList.contains("card__menu__btn");
    if (isMenuBtn) {
      let card__menu = element.closest(".card__menu__btn");
      card__menu.nextElementSibling.classList.toggle("show");
      card__menu.parentElement.parentElement.classList.toggle("show");
    }
  });
  addEventListener("popstate", (event) => {
    location.reload();
  });

  const page = location.pathname;
  if (page === "/index.html" || page === "/") {
    fetch(Type.movie, status.popular)
      .then(({ data }) => {
        displayMovies(data.results);
        initializeMoveEvent();
        let showTv = document.querySelector(".show__tv");
        showTv.addEventListener("click", () => {
          fetch(Type.tv, status.popular).then(({ data }) => {
            console.log(data);
            displayTv(data.results);
            initializeTvEvent();
          });
          let showMovie = document.querySelector(".show__movie");
          showMovie.style.backgroundColor = "#fff";
          showTv.style.backgroundColor = "rgb(3, 37, 65)";
          showMovie.style.color = " rgb(3, 37, 65)";
          showTv.style.color = "rgb(187, 253, 206)";
        });
      })
      .catch((err) => console.log(err));
    // fetch(Type.movie, status.topRated).then(({data})=>{
    //   console.log(data);
    //   displayMoviesTreanding(data.results);
    //   initializeMoveEvent();
    // })
  }
  if (page === "/movie.html" || page === "/movie") {
    const promise = await Promise.all([
      fetchDetails(Type.movie, history.state.id),
      fetchMovieVedio(Type.movie, history.state.id),
    ]);
    disMoviesDetails({ ...promise[0].data, ...promise[1].data });
    // fetchDetails(Type.movie, history.state.id).then((data) => {});
    // fetchMovieVedio(Type.movie, history.state.id).then((data) => {});
    displayMovieStatus(promise[0].data);
    fetchMovieCredits(Type.movie, history.state.id, credits.movieCredits).then(
      (data) => {
        displayCast(data.data.cast);
      }
    );
    let faHeart = document.querySelector(".fa-heart");
    let faBookmark = document.querySelector(".fa-bookmark");
    faHeart.addEventListener("click", (e) => {
      console.log(e.target.dataset.favorite);
      fetchMovieFavority(
        Type.account,
        promise[0].data.id,
        e.target.dataset.favorite === "true" ? false : true,
        "movie"
      ).then(({ data }) => {
        if (data.success) {
          e.target.dataset.favorite =
            e.target.dataset.favorite === "true" ? false : true;
        }
        console.log(data);
      });
    });
    faBookmark.addEventListener("click", (e) => {
      console.log(e.target.dataset.watchlist);
      fetchMovieWatchList(
        Type.account,
        promise[0].data.id,
        e.target.dataset.watchlist === "true" ? false : true,
        "movie",
      ).then(({data}) => {
        if (data.success) {
          e.target.dataset.watchlist =
            e.target.dataset.watchlist === "true" ? false : true;
        }
      });
    });
    fetchMovieFavorityGet(Type.movie, promise[0].data.id).then(({ data }) => {
      const { favorite, watchlist } = data;
      faHeart.dataset.favorite = favorite;
      faBookmark.dataset.watchlist = watchlist;
      // if (!data.data.favorite) {
      //   faHeart.style.color = "rgb(239, 71, 182)";
      //   // faBookmark.addEventListener("click", ()=>{
      //   //   console.log("assalom");
      //   //   fetchMovieWatchDel(Type.account, promise[0].data.id, status.watchlist).then((data)=>{
      //   //     faBookmark.style.color = "#ffffff";
      //   //   })
      //   // })
      // }
      // if (data.data.watchlist !== false) {
      //   faBookmark.style.color = "rgb(207, 49, 49)";
      // }
    });
    fetchlistMovie(Type.movie, history.state.id).then(({ data }) => {
      displayNetwork(data);
    });
    fetchKeywordMovie(Type.movie, history.state.id).then(({ data }) => {
      console.log(data);
      displayKeyword(data.keywords);
    });
    fetchRecommendation(Type.movie, history.state.id).then((data) => {
      console.log(data);
      displayRecomaditions(data.data.results);
      initializeMEvent();
    });
    eventKeywords();
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
      displayMovie(data.results);
      initializeMEvent();
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
        initializeActorMenuEvent();
        initializeActingEvent();
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
      initializeMEvent();
    });
    fetch(Type.movie, status.popular).then(({ data }) => {
      console.log(data.results);
      displaySearchMovies(data.results);
      initializeMEvent();
    });
  }
  if (page === "/tvsearch.html" || page === "/tvsearch") {
    let genreWrapper = document.querySelector("#with_genres");
    let sortSelect = document.querySelector("#activitySelector");
    // let languageSelect = document.querySelector("#languageSelector");
    let sortTemplate = "";
    Object.entries(sortByTv).forEach((option) => {
      sortTemplate += `<option value="${option[1]}">${option[0]}</option>`;
    });
    sortSelect.innerHTML = sortTemplate;
    const promise = await Promise.all(
      [fetchGenres, fetchLanguages].map((func) => func(Type.tv))
    );
    let genresTemplate = "";
    promise[0].data.genres.forEach((genre) => {
      genresTemplate += `<li><input type="checkbox" id=${genre.id} value=${genre.id} name="with_genres" /> <label for="${genre.id}">${genre.name}</label></li>`;
    });
    genreWrapper.innerHTML = genresTemplate;

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

      let data = await fetchSearch(Type.tv, queryStringObj);
      // })
      formSearchAll.reset();
      displayTvSearch(data.data.results);
      initializeTvEvent();
    });
    fetch(Type.tv, status.popular).then(({ data }) => {
      console.log(data.results);
      displayTvSearch(data.results);
      initializeTvEvent();
    });
  }
  if (page === "/tv.html" || page === "/tv") {
    const promise = await Promise.all([
      fetchDetails(Type.tv, history.state.id),
      fetchMovieVedio(Type.tv, history.state.id),
    ]);
    disMoviesDetails({ ...promise[0].data, ...promise[1].data });
    // fetchDetails(Type.movie, history.state.id).then((data) => {});
    // fetchMovieVedio(Type.movie, history.state.id).then((data) => {});
    displayMovieStatus(promise[0].data);
    fetchMovieCredits(Type.tv, history.state.id, credits.movieCredits).then(
      (data) => {
        displayCast(data.data.cast);
      }
    );
    let faHeart = document.querySelector(".fa-heart");
    let faBookmark = document.querySelector(".fa-bookmark");
    faHeart.addEventListener("click", (e) => {
      console.log(e.target.dataset.favorite);
      fetchMovieFavority(
        Type.account,
        promise[0].data.id,
        e.target.dataset.favorite === "true" ? false : true,
        "tv"
      ).then(({ data }) => {
        if (data.success) {
          e.target.dataset.favorite =
            e.target.dataset.favorite === "true" ? false : true;
        }
        console.log(data);
      });
    });
    faBookmark.addEventListener("click", (e) => {
      console.log(e.target.dataset.watchlist);
      fetchMovieWatchList(
        Type.account,
        promise[0].data.id,
        e.target.dataset.watchlist === "true" ? false : true,
        "tv"
      ).then(({data}) => {
        if (data.success) {
          e.target.dataset.watchlist =
            e.target.dataset.watchlist === "true" ? false : true;
        }
      });
    });
    fetchMovieFavorityGet(Type.tv, promise[0].data.id).then(({ data }) => {
      const { favorite, watchlist } = data;
      faHeart.dataset.favorite = favorite;
      faBookmark.dataset.watchlist = watchlist;
    });
    fetchlistMovie(Type.tv, history.state.id).then(({ data }) => {
      displayNetwork(data);
    });
    fetchKeywordMovie(Type.tv, history.state.id).then(({ data }) => {
      console.log(data);
      displayKeyword(data.keywords);
    });
    fetchRecommendation(Type.tv, history.state.id).then((data) => {
      console.log(data);
      displayRecomaditions(data.data.results);
      initializeTvEvent();
    });
    eventKeywords();
    initializeCastEvent();
  }

  if (page === "/keyword.html" || page === "/keyword") {
    fetchKeyword(Type.keyword, history.state.id).then(({ data }) => {
      displayKeywords(data.results);
      displayKeywordResults(data.total_results);
    });
    initializeKeyEvent();
  }
  if (page === "/profile.html" || page === "/profile") {
    fetchAccount(Type.account).then((data) => {
      displayAccountName(data.data.username);
    });
    const favoriteMovies = document.querySelector(".favorites_movies");
    favoriteMovies.addEventListener("click", () => {
      fetchAccountStatus(
        Type.account,
        status.favorite,
        typeAccount.movies
      ).then((data) => {
        console.log(data);
        displayFavoriteMovies(data.data.results);
      });
    });
    const favoritetvShows = document.querySelector(".favorite_stv");
    favoritetvShows.addEventListener("click", () => {
      fetchAccountStatus(Type.account, status.favorite, typeAccount.tv).then(
        (data) => {
          console.log(data);
          displayFavoriteMovies(data.data.results);
         
        }
        
      );
    });
    const moviewatchlist = document.querySelector(".movie__watchlist");
    moviewatchlist.addEventListener("click", () => {
      fetchAccountStatus(
        Type.account,
        status.watchlist,
        typeAccount.movies
      ).then((data) => {
        displayFavoriteMovies(data.data.results);
       
      }
      );
    });
    const tvwatchlist = document.querySelector(".tv__watchlist");
    tvwatchlist.addEventListener("click", () => {
      fetchAccountStatus(Type.account, status.watchlist, typeAccount.tv).then(
        (data) => {
          displayFavoriteMovies(data.data.results);
         
        }
        
      );
    });
    const movierated = document.querySelector(".movie__rated");
    movierated.addEventListener("click", () => {
      fetchAccountStatus(Type.account, status.rated, typeAccount.movies).then(
        (data) => {
          displayFavoriteMovies(data.data.results);
         
        }
        
      );
    });
    const tvrated = document.querySelector(".tv__rated");
    tvrated.addEventListener("click", () => {
      fetchAccountStatus(Type.account, status.rated, typeAccount.tv).then(
        (data) => {
          displayFavoriteMovies(data.data.results);
         
        }
        
      );
    });
   
    initializeAccountEvent();
  }
});
