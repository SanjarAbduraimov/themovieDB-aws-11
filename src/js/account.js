import moment from "moment/moment";
import configs from "../configs";
import { fetchMovieFavorityDel } from "../api";
import Type, {
  status,
  credits,
  sortBy,
  sortByTv,
  typeAccount,
} from "../constants";
import { add } from "lodash";
export function displayAccountName(data = []) {
  let result = "";
  const authorMenuNode = document.querySelector(".account__name");
  result += `<p class="username">Hi ${data}!</p>`;
  authorMenuNode.innerHTML = result;
}

export function displayFavoriteMovies(data = []) {
  const authorMenuNode = document.querySelector(".profile__wrapper");
  authorMenuNode.innerHTML = "" ;
  const profilewatchlist = document.querySelector(".no_results");
  profilewatchlist.innerHTML = "";
  data > []
    ? data
    : (profilewatchlist.innerHTML = `<p> You haven't added any favorite movies .</p>`);
  let result = "";

  data.forEach((keyword) => {
    const { backdrop_path, id, title, release_date, overview, name } = keyword;
    const imgs = backdrop_path
      ? configs.baseImgURL + backdrop_path
      : configs.defaultImg + "500";
    const originName = name ? name : title;

    result += ` <div class="col"> <article class="card card__keySearc" data-id="${id}">
       
        <div class="card__img--wrappers">
          <img
            class="card__img"
            src="${imgs}"
            alt="${originName}"
            data-id="${id}"
          />
        </div>
        <div class="card__body card__percentage">
          <h4 class="card__title"data-id="${id}">${originName}</h4>
          <p>${overview}</p>
          <p class="card__text">${moment(release_date).format(
            "MMM DD, YYYY"
          )}</p>
          <div class="profile__favo">
          <li class="dropdown__item">
           <a>
           <i class="fa-solid fa-star"></i> <p class="profile__ratingd">Raiting </p>       </a>
          </li>
          
          <li class="dropdown__item">
           <a class="rovove__favority-contents" data-id="${id}">
           <i class="fas fa-heart"  ></i> <p class="profile__ratingd">Favourite</p>          </a>
          </li>
          <li class="dropdown__item">
           <a>
           <i class="fa-solid fa-list"></i><p class="profile__ratingd">Add to list </p>
           </a>
          </li>
          <li class="dropdown__item">
          <a class="rovove__favority-conten" data-id="${id}">
          <i id="exxx" class="fa-solid fa-xmark" ></i> <p class="profile__ratingd " > Remove  </p>         </a>
          </li>
          
      </div>
        </div>
      </article>
      </div>`;
    // }
  });
  authorMenuNode.innerHTML = result;
}
export function displayFavoriteMov(data = []) {
  const authorMenuNode = document.querySelector(".profile__wrapper");
  authorMenuNode.innerHTML = "" 
  const profilewatchlist = document.querySelector(".no_results");
  const addedSameNav = document.querySelector(".title__profiles-page");
  const addedSame = document.querySelector(".profile__watchlist");
  addedSame.innerHTML = "";
  profilewatchlist.innerHTML = "";
  data > []
    ? data
    : (profilewatchlist.innerHTML = `<div> <p> You haven't added any favorite movies .</p> </div>`);
    addedSameNav.innerHTML = ` 
    <div class="title_header">
    <div class="title_group flex__profile">
        <div class="gropp__listed">
          <h2>My Favorites</h2>
        </div>
      <div class="flex__profile">
        <h3 class="movie__counters"> Movies <label>23</label> </h3>
        <h3 class="tv__counters"> TV <label>5</label> </h3>
      </div>
    </div>

    <div class="filter_group">
      <div class="sort_filter flex__profile">
        <h4>Filter by:</h4>
        <div class="group_wrapper">
          <select class="group_dropdown addede_gropuo filters">
           <option class="text">Date Added </option>
            <option class="text">Popularity </option>
           <option class="text">Release Date </span>

           
          </select>
        </div>

        <div class="order_filter flex__profile">
          <h4>Order:</h4>
          <div class="group_wrapper">
            <div class="group_dropdown sort">
              <a href="#" ><i class="fa-solid fa-arrow-down"></i></a>
            </div>
          </div>
        </div>
      </div>

    </div>
    </div>`
  let result = "";
  data.forEach((keyword) => {
    const { backdrop_path, id, title, release_date, overview, name } = keyword;
    const imgs = backdrop_path
      ? configs.baseImgURL + backdrop_path
      : configs.defaultImg + "500";
    const originName = name ? name : title;

    result += ` <div class="col"> <article class="card card__keySearc" data-id="${id}">
       
        <div class="card__img--wrappers">
          <img
            class="card__img"
            src="${imgs}"
            alt="${originName}"
            data-id="${id}"
          />
        </div>
        <div class="card__body card__percentage">
          <h4 class="card__title"data-id="${id}">${originName}</h4>
          <p>${overview}</p>
          <p class="card__text">${moment(release_date).format(
            "MMM DD, YYYY"
          )}</p>
          <div class="profile__favo">
          <li class="dropdown__item">
           <a>
           <i class="fa-solid fa-star"></i> <p class="profile__ratingd">Raiting </p>       </a>
          </li>
          
          <li class="dropdown__item">
           <a class="rovove__favority-contents" data-id="${id}">
           <i class="fas fa-heart"  ></i> <p class="profile__ratingd">Favourite</p>          </a>
          </li>
          <li class="dropdown__item">
           <a>
           <i class="fa-solid fa-list"></i><p class="profile__ratingd">Add to list </p>
           </a>
          </li>
          <li class="dropdown__item">
          <a class="rovove__favority-conten" data-id="${id}">
          <i id="exxx" class="fa-solid fa-xmark" ></i> <p class="profile__ratingd " > Remove  </p>         </a>
          </li>
          
      </div>
        </div>
      </article>
      </div>`;
  });
  authorMenuNode.innerHTML = result;
}

export function initializeAccountEvent() {
  const keywordMenuNode = document.querySelector(".profile__wrapper");
  keywordMenuNode.addEventListener("click", (event) => {
    const id =
      event.target.closest(".card__img")?.dataset?.id ||
      event.target.closest(".card__title")?.dataset?.id;
    console.log(id, "bosilgan");
    if (!id) return;
    history.pushState({ id }, null, "/movie.html");
    location.reload();
  });
}
export function initializeAccouEvent() {
  const keywordMenuNode = document.querySelector(".profile__wrapper");
  keywordMenuNode.addEventListener("click", (event) => {
    const id =
      event.target.closest(".rovove__favority-contents")?.dataset?.id ||
      event.target.closest(".rovove__favority-conten")?.dataset?.id;

    console.log(id, "bosilgan");
    if (!id) return;
    fetchMovieFavorityDel(Type.account, id, "movie");
    event.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
  });
}

