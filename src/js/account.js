import moment from "moment/moment";
import configs from "../configs";
import {fetchMovieFavorityDel} from "../api";
import Type, {
  status,
  credits,
  sortBy,
  sortByTv,
  typeAccount,
} from "../constants";
export function displayAccountName(data = []) {
  let result = "";
  const authorMenuNode = document.querySelector(".account__name");
  result += `<p class="username">Hi ${data}!</p>` ;
  authorMenuNode.innerHTML = result;
}

export function displayFavoriteMovies(data = []) {
  const authorMenuNode = document.querySelector(".profile__wrapper");
  const profilewatchlist = document.querySelector(".no_results");
  // data > [] ? data : profilewatchlist.innerHTML = `<p> You haven't added any favorite movies .</p>`;
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
           <div class="flex__profile">
           <i class="fa-solid fa-star"></i> <p class="profile__ratingd">Raiting </p>       </div>
          </li>
          
          <li class="dropdown__item">
           <div class="flex__profile">
           <i class="fas fa-heart"  data-id="${id}"></i> <p class="profile__ratingd">Favourite</p>          </div>
          </li>
          <li class="dropdown__item">
           <div class="flex__profile">
           <i class="fa-solid fa-list"></i><p class="profile__ratingd">Add to list </p>
           </div>
          </li>
          <li class="dropdown__item">
          <div class="flex__profile">
          <i id="exxx" class="fa-solid fa-xmark" data-id="${id}"></i> <p class="profile__ratingd " > Remove  </p>         </div>
          </li>
          
      </div>
        </div>
      </article></div>`;
    // }
  });
  authorMenuNode.innerHTML = result;
}
export function displayFavoriteMov(data = []) {
  const authorMenuNode = document.querySelector(".profile__wrapper");
  const profilewatchlist = document.querySelector(".no_results");
  data > [] ? data : profilewatchlist.innerHTML = `<p> You haven't added any favorite movies .</p>`;
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
          <li class="dropdown__i">
           <div class="flex__profile">
           <i class="fa-solid fa-star"></i> <p class="profile__ratingd">Raiting </p>       </div>
          </li>
          
          <li class="dropdown__i">
           <div class="flex__profile">
           <i class="fas fa-heart"  data-id="${id}"></i> <p class="profile__ratingd">Favourite</p>          </div>
          </li>
          <li class="dropdown__i">
           <div class="flex__profile">
           <i class="fa-solid fa-list"></i><p class="profile__ratingd">Add to list </p>
           </div>
          </li>
          <li class="dropdown__i">
          <div class="flex__profile">
          <i id="exxx" class="fa-solid fa-xmark" data-id="${id}"></i> <p class="profile__ratingd " > Remove  </p>         </div>
          </li>
          
      </div>
        </div>
      </article></div>`;
    // }
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
      event.target.closest(".fa-heart")?.dataset?.id ||
      event.target.closest(".fa-xmark")?.dataset?.id;

    console.log(id, "bosilgan");
    if (!id) return;
    fetchMovieFavorityDel(Type.account, id , "movie");
    // location.reload();
  });
}