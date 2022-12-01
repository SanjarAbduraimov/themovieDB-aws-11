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
  fatchMovieRating,
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
  paginations,
} from "./movie";
import { displayPeople } from "./people";
import {
  displayMovies,
  initializeMoveEvent,
  displayTv,
  initializeMEvent,
  initializeStatusEvent,
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
  functionssas,
} from "./actor";
import {
  displayAccountName,
  displayFavoriteMovies,
  initializeAccountEvent,
  initializeAccouEvent,
  displayFavoriteMov,
  displayFavoriteTiv,
  initializeAccountEventtvs,
} from "./account";
import {
  displaySearchResults,
  displaySearchResultsCount,
  displaySearchResultsPages,
  displaySearchResultsSee,
} from "./search";
import { displaySearchMovies } from "./movies";
const _ = require(`lodash`);

document.addEventListener("DOMContentLoaded", async (e) => {
  addEventListener("popstate", (event) => {
    location.reload();
  });
  let loader = document.querySelector(".loader__wrapper");
  let loaderMovie = document.querySelector(".loader__movie");
  let loaderOthers = document.querySelector(".loader__others");
  // loader__movie loader__others
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
  fetchAccount(Type.account).then((data) => {
    displayAccountName(data.data.username);
  });

  const page = location.pathname;
  if (page === "/index.html" || page === "/") {
    fetch(Type.movie, status.popular)
      .then(({ data }) => {
        displayMovies(data.results);
        loader.remove();
        initializeMoveEvent();
        initializeStatusEvent();

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

    // faBookmark.addEventListener("click", (e) => {
    //   console.log(e.target.dataset.watchlist);
    //   fetchMovieWatchList(
    //     Type.account,
    //     promise[0].data.id,
    //     e.target.dataset.watchlist === "true" ? false : true,
    //     "movie"
    //   ).then(({ data }) => {
    //     if (data.success) {
    //       e.target.dataset.watchlist =
    //         e.target.dataset.watchlist === "true" ? false : true;
    //     }
    //   });
    // });
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
        loaderMovie.remove();
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
        "movie"
      ).then(({ data }) => {
        if (data.success) {
          e.target.dataset.watchlist =
            e.target.dataset.watchlist === "true" ? false : true;
        }
      });
    });

    let ratingMovie = document.querySelector(".fa-star");
    const allStar = document.querySelectorAll(".star");
    allStar.forEach((star, i) => {
      star.onclick = function () {
        let correntLeval = i + 1;
        allStar.forEach((star, j) => {
          if (correntLeval >= j + 1) {
            star.innerHTML = "&#9733";
          } else {
            star.innerHTML = "&#9734";
          }
        });
        fatchMovieRating(Type.movie, promise[0].data.id, correntLeval).then(
          (data) => {
            if (data.success) {
              e.target.dataset.rated = e.target.dataset.rated === value;
              console.log(data);
            }
          }
        );
      };
    });
    fetchMovieFavorityGet(Type.movie, promise[0].data.id).then(({ data }) => {
      const { favorite, watchlist, rated } = data;
      faHeart.dataset.favorite = favorite;
      faBookmark.dataset.watchlist = watchlist;
      ratingMovie.dataset.rated = rated.value;
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
      loaderOthers.remove();
      initializeActorEvent();
    });
  }
  if (page === "/search.html" || page === "/search") {
    // const query = new URLSearchParams(location.search);
    fetchMovieSearch(history.state.title, 1).then(({ data }) => {
      displaySearchResults(data.results);
      displaySearchResultsCount(data.total_results);
      displaySearchResultsPages(data.total_pages);
      displaySearchResultsSee(data.results);
      loaderOthers.remove();
      initializeMEvent();
    });
    
    
    // let pagination = document.querySelector(".next__pagination");
    // pagination.addEventListener("click", (e) => {
    //   console.log("assalom");
    //   let result = "";
    //   let i=1;
    //   do {
    //     i = i + 1;
    //     result = result + i;
    //   } while (i < 5);
    //   console.log(result);
    //   for (let i = 1; i < 196; i++) {        
    //     fetchMovieSearch(history.state.title, result).then(({ data }) => {
    //       displaySearchResults(data.results);
    //       displaySearchResultsCount(data.total_results);
    //       displaySearchResultsPages(data.total_pages);
    //       displaySearchResultsSee(data.results);
    //       initializeMEvent();
    //     });
    //     return result;
    //   }
      
      
      
    // });
  }
  if (page === "/actor.html" || page === "/actor") {
    fetchDetails(Type.person, history.state.id).then((data) => {
      displayActor(data.data);
      loaderOthers.remove();
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
      displaySearchMovies(data.data.results);

      initializeMEvent();
    });
    fetch(Type.movie, status.popular).then(({ data }) => {
      console.log(data.results);
      displaySearchMovies(data.results);
      loaderOthers.remove();
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
      loaderOthers.remove();
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
        loaderOthers.remove();
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
      ).then(({ data }) => {
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
      loaderOthers.remove();
    });
    const favoriteMovies = document.querySelector(".favorites_movies");
    favoriteMovies.addEventListener("click", () => {
      fetchAccountStatus(
        Type.account,
        status.favorite,
        typeAccount.movies
      ).then((data) => {
        data.data.results.forEach((data) => {
          fetchMovieFavorityGet(Type.movie, data.id).then(({ data }) => {
            console.log(data);
            let faHeart = document.querySelectorAll(".fa-heart");
            faHeart.forEach((data) => {
              data.style.color = "rgb(239, 71, 182)";
            });
          });
        });
        console.log(data);
        displayFavoriteMov(data.data.results);
        initializeAccouEvent();
        initializeAccountEvent();
      });
    });
    const favoritetvShows = document.querySelector(".favorite_stv");
    favoritetvShows.addEventListener("click", () => {
      fetchAccountStatus(Type.account, status.favorite, typeAccount.tv).then(
        (data) => {
          console.log(data);
          displayFavoriteTiv(data.data.results);
          initializeAccountEventtvs();
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
        initializeAccountEvent();
      });
    });
    const tvwatchlist = document.querySelector(".tv__watchlist");
    tvwatchlist.addEventListener("click", () => {
      fetchAccountStatus(Type.account, status.watchlist, typeAccount.tv).then(
        (data) => {
          displayFavoriteTiv(data.data.results);
          initializeAccountEventtvs();
        }
      );
    });
    const movierated = document.querySelector(".movie__rated");
    movierated.addEventListener("click", () => {
      fetchAccountStatus(Type.account, status.rated, typeAccount.movies).then(
        (data) => {
          displayFavoriteMovies(data.data.results);
          initializeAccountEvent();
        }
      );
    });
    const tvrated = document.querySelector(".tv__rated");
    tvrated.addEventListener("click", () => {
      fetchAccountStatus(Type.account, status.rated, typeAccount.tv).then(
        (data) => {
          displayFavoriteTiv(data.data.results);
          initializeAccountEventtvs();
        }
      );
    });

    
  }
});
