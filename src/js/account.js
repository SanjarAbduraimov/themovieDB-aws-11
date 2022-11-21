import moment from "moment/moment";
import configs from "../configs";
import { cardTemplate } from "./home";
export function displayAccountName(data = []) {
  let result = "";
  const authorMenuNode = document.querySelector(".account__name");
  result += `<p class="username">Hi ${data}!</p> `;
  authorMenuNode.innerHTML = result;
}

export function displayFavoriteMovies(data = []) {
  let result = "";
  const authorMenuNode = document.querySelector(".profile__wrapper");
  data.forEach((keyword) => {
    const { backdrop_path, id, title, release_date, overview, name } = keyword;
    const imgs = backdrop_path
      ? configs.baseImgURL + backdrop_path
      : configs.defaultImg + "500";
    const originName = name ? name : title;
    if (data === []) {
      result += ` <div class="col">wederferfr</div>`;
    }
    if (data !== []) {
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
           <a href="#dropdown__link" >
           <i class="fa-solid fa-star"></i> <p class="profile__ratingd">Raiting </p>       </a>
          </li>
          
          <li class="dropdown__item">
           <a href="#dropdown__link">
           <i class="fas fa-heart"></i> <p class="profile__ratingd">Favourite</p>          </a>
          </li>
          <li class="dropdown__item">
           <a href="#dropdown__link">
           <i class="fa-solid fa-list"></i><p class="profile__ratingd">Add to list </p>
           </a>
          </li>
          <li class="dropdown__item">
          <a href="#dropdown__link">
          <i id="exxx" class="fa-solid fa-xmark"></i> <p class="profile__ratingd " > Remove  </p>         </a>
          </li>
          
      </div>
        </div>
      </article></div>`;
    }
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
