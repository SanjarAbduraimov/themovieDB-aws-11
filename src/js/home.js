import moment from "moment/moment";
import configs from "../configs";
import { fetch, fetchMovieFavorityGet, fetchMovieFavority } from "../api";
import Type, { status, credits, sortBy } from "../constants";
import ModalVideo from "modal-video";
import { fetchReating } from "../api";
export function cardTemplate(item) {
  const { id, img, title, release_date, vote_average, name } = item;
  const nameorigin = name ? name : title;
  return `<div class="col"> <article class="card card__hero " data-id="${id}">
  <div class="card__header dropdown" >
    <svg
      id="glyphicons-basic"
      data-id="${id}"
      class="card__menu__btn dropdown__btn"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      <path
        id="circle-more"
        d="M16,4A12,12,0,1,0,28,16,12.01312,12.01312,0,0,0,16,4ZM10,18a2,2,0,1,1,2-2A2.00006,2.00006,0,0,1,10,18Zm6,0a2,2,0,1,1,2-2A2.00006,2.00006,0,0,1,16,18Zm6,0a2,2,0,1,1,2-2A2.00006,2.00006,0,0,1,22,18Z"
        fill="#ffffff80"
      ></path>
    </svg>
    <ul class="card__menu dropdown__content status__events" >
      <li class="dropdown__item">
        <a>
        <i class="fa-solid fa-house-chimney"></i> Add to list
        </a>
      </li>
      <li class="dropdown__item">
        <a class="faHeart" data-id="${id}">
          <i class="fas fa-heart"> </i> Favourite
        </a>
      </li>
      <li class="dropdown__item">
        <a class="faBookmark">
          <i class="fa-solid fa-bookmark"></i> Watchlist
        </a>
      </li>
      <li class="dropdown__item">
        <a >
          <i class="fa-solid fa-star"></i> Raiting
        </a>
      </li>
    </ul>
  </div>
  <div class="card__img--wrapper">
    <img
      class="card__img"
      src="${img}"
      alt="${nameorigin}"
    />
  </div>
  <div class="card__body card__percentage">
    <div class="percentage">${Math.round(vote_average * 10)}</div>
    <h4 class="card__title">${nameorigin.slice(0, 30)}</h4>

    <p class="card__text">${moment(release_date).format("MMM DD, YYYY")}</p>
  </div>
</article></div>`;
}
export function displayMovies(data = []) {
  let result = "";
  const authorMenuNode = document.querySelector(".movies__wrapper");
  data.forEach((movies) => {
    const { backdrop_path, ...docs } = movies;
    const img = backdrop_path
      ? configs.baseImgURL + backdrop_path
      : configs.defaultImg + "500";
    result += cardTemplate({ ...docs, img });
  });
  authorMenuNode.innerHTML = result;
}

// export function displaySearchKeywords(data = []) {
//   let result = "";
//   const searchKeywordsMenu = document.querySelector(".searchKeywords_data");
//   data.forEach((data) => {
//     result += `
//     <li class="searchKeywords_data__li"><a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>${data.title}</li>
//     `;
//     searchKeywordsMenu.innerHTML = result;
//   });
// }

export function displayMoviesUpcoming(data = []) {
  let result = "";
  const authorMenuNode = document.querySelector(".movies__wrapper__upcoming");
  data.forEach((movies) => {
    const { backdrop_path, ...docs } = movies;
    const img = backdrop_path
      ? configs.baseImgURL + backdrop_path
      : configs.defaultImg + "500";
    result += cardTemplate({ ...docs, img });
  });
  authorMenuNode.innerHTML = result;
}

export function displayTv(data = []) {
  let result = "";

  const authorMenuNode = document.querySelector(".movies__wrapper");
  data.forEach((movies) => {
    const { backdrop_path, id, name, release_date, vote_average } = movies;
    const imgs = backdrop_path
      ? configs.baseImgURL + backdrop_path
      : configs.defaultImg + "500";
    result += `<div class="col"> <article class="card card__hero" data-id="${id}">
    <div class="card__header dropdown">
      <svg
        id="glyphicons-basic"
        class="card__menu__btn dropdown__btn"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        <path
          id="circle-more"
          d="M16,4A12,12,0,1,0,28,16,12.01312,12.01312,0,0,0,16,4ZM10,18a2,2,0,1,1,2-2A2.00006,2.00006,0,0,1,10,18Zm6,0a2,2,0,1,1,2-2A2.00006,2.00006,0,0,1,16,18Zm6,0a2,2,0,1,1,2-2A2.00006,2.00006,0,0,1,22,18Z"
          fill="#ffffff80"
        ></path>
      </svg>
      <ul class="card__menu dropdown__content">
        <li class="dropdown__item">
          <a class="#">
            <i class="fas fa-house-chimney"></i> Add to list
          </a>
        </li>
        <li class="dropdown__item">
          <a class="likesda">
            <i class="fas fa-heart" data-id="${id}"></i> Favourite
          </a>
        </li>
        <li class="dropdown__item">
          <a class="#">
            <i class="fas fa-bookmark"></i> Watchlist
          </a>
        </li>
        <li class="dropdown__item">
          <a class="#">
            <i class="fas fa-star"></i> Raiting
          </a>
        </li>
      </ul>
    </div>
    <div class="card__img--wrapper">
      <img
        class="card__img"
        src="${imgs}"
        alt="${name}"
      />
    </div>
    <div class="card__body card__percentage">
      <div class="percentage">${vote_average * 10}</div>
      <h4 class="card__title">${name}</h4>
      <p class="card__text">${moment(release_date).format("MMM DD, YYYY")}</p>
    </div>
  </article></div>`;
  });
  authorMenuNode.innerHTML = result;
  let showMovie = document.querySelector(".show__movie");
  showMovie.addEventListener("click", () => {
    fetch(Type.movie, status.popular).then((data) => {
      console.log(data);
      history.go(0);
    });
  });
}

export function displayVedioTreller(data = []) {
  let result = "";

  const authorMenuNode = document.querySelector(".movies__wrapper--vedios");
  data.forEach((movies) => {
    const { backdrop_path, id, name, release_date, vote_average } = movies;
    const imgs = backdrop_path
      ? configs.baseImgURL + backdrop_path
      : configs.defaultImg + "500";
    result += `
    <div class="col"> <article class="card" data-id="${id}">
    <div class="card__img--wrapper">
      <img
        class="card__img"
        src="${imgs}"
        alt="${name}"
      />
    </div>
    <div class="card__body card__percentage">
      <div class="percentage">${vote_average * 10}</div>
      <h4 class="card__title">${name}</h4>
      <p class="card__text">${moment(release_date).format("MMM DD, YYYY")}</p>
    </div>
  </article></div>`;
  });
  authorMenuNode.innerHTML = result;
}

export function initializeMEvent() {
  const cardNodeList = document.querySelectorAll(".card");
  cardNodeList.forEach((card) => {
    card.addEventListener("click", (event) => {
      const element = event.target;
      const id = card?.dataset?.id;
      let showMovieDetails =
        element.closest(".card__img")?.classList.contains("card__img") ||
        element.closest(".card__title")?.classList.contains("card__title");
      let isMenuBtn = element
        .closest(".card__menu__btn")
        ?.classList.contains("card__menu__btn");
      if (showMovieDetails) {
        if (!id) return;
        history.pushState({ id }, null, "/movie.html");
        location.reload();
      }
      if (isMenuBtn) {
        let cardContent = card.querySelector(".dropdown__content");
        cardContent.classList.toggle("show");
        card.classList.toggle("show");
      }
    });
  });
}

export function initializeMoveEvent() {
  const cardNodeList = document.querySelectorAll(".card");
  const searchForm = document.querySelector(".inner_search_form");
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = searchForm.title.value;
    history.pushState({ title }, null, "/search.html");
    location.reload();
  });

  cardNodeList.forEach((card) => {
    card.addEventListener("click", (event) => {
      const element = event.target;
      const id = card?.dataset?.id;
      let showMovieDetails =
        element.closest(".card__img")?.classList.contains("card__img") ||
        element.closest(".card__title")?.classList.contains("card__title");
      let isMenuBtn = element
        .closest(".card__menu__btn")
        ?.classList.contains("card__menu__btn");
      if (showMovieDetails) {
        if (!id) return;
        history.pushState({ id }, null, "/movie.html");
        location.reload();
      }
      if (isMenuBtn) {
        let cardContent = card.querySelector(".dropdown__content");
        cardContent.classList.toggle("show");
        card.classList.toggle("show");
      }
    });
  });
}

export function initializeStatusEvent() {
  const moviesStatus = document.querySelector(".movies__wrapper");
  const moviesLikeStatus = document.querySelector(".movies__wrapper");

  moviesStatus.addEventListener("click", (event) => {
    const id = event.target.closest("svg")?.dataset?.id;
    console.log(id, "bosilgan");
    if (!id) return;
    let faHeart = document.querySelectorAll(".faHeart");
    let faBookmark = document.querySelectorAll(".faBookmark");
    // let ratingMovie = document.querySelectorall(".ratingMovie");

    fetchMovieFavorityGet(Type.movie, id).then(({ data }) => {
      const { favorite, watchlist, rated } = data;
      faHeart.forEach((data) => {
        data.dataset.favorite = favorite;
      });
      faBookmark.forEach((data) => {
        data.dataset.watchlist = watchlist;
      });
      // ratingMovie.dataset.rated = rated.value;

      // ratingMovie.dataset.rated = rated.value;
    });
  });
  // moviesLikeStatus.addEventListener("click", (e) => {
  //   const id = e.target.closest("faHeart")?.dataset?.id;
  //   console.log(id, "bosilgan");
  //   if (!id) return;
  //   // let faHeart = document.querySelector(".faHeart");
  //   // let faBookmark = document.querySelectorAll(".faBookmark");
  //   fetchMovieFavority(
  //     Type.account,
  //     id,
  //     e.target.dataset.favorite === "true" ? false : true,
  //     "movie"
  //   ).then(({ data }) => {
  //     if (data.success) {
  //       e.target.dataset.favorite =
  //         e.target.dataset.favorite === "true" ? false : true;
  //     }
  //     console.log(data);
  //   });
  // });
}

// let faHeart = document.querySelector(".fa-heart");

// //  console.log(datas.data.favorite);
//   const { favorite, watchlist, rated } = datas.data;
//   // console.log(favorite);
//   faHeart.dataset.favorite = favorite;
//   console.log(faHeart.classList);
//   faHeart.classList.push('bgred')
//   console.log(faHeart.dataset.favorite);
//   // faBookmark.dataset.watchlist = watchlist;
//   // ratingMovie.dataset.rated = rated.value;

export function initializeSearchssEvent() {
  const searchForm = document.querySelector(".searchKeywordsForm");
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = searchForm.title.value;
    history.pushState({ title }, null, "/search.html");
    location.reload();
  });
}
