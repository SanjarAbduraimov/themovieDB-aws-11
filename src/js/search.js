import configs from "../configs";
import moment from "moment/moment";

export function displaySearchResultsCount(data) {
  let result = "";
  const authorMenuNode = document.querySelector(".count__results");
  result += `<div class="keyword__count"> <p>Total Results</p> <p class="keyword__count__number">${data}</p> </div> `;
  authorMenuNode.innerHTML = result;
}

export function displaySearchResultsPages(data) {
    let result = "";
    const authorMenuNode = document.querySelector(".page__results");
    result += `<div class="keyword__count">  <p>Total Pages </p> <p class="keyword__count__number">${data}</p></div> `;
    authorMenuNode.innerHTML = result;
}

export function displaySearchResultsSee(data) {
    let result = "";
    const authorMenuNode = document.querySelector(".page__results-see");
    result += `<div class="keyword__count"> <p>Now</p> <p class="keyword__count__number">${data.length}</p> </div> `;
    authorMenuNode.innerHTML = result;
}

export function displaySearchResults(data) {
  let result = "";
  const authorMenuNode = document.querySelector(".results__col-search");
  data.forEach((search) => {
    const { backdrop_path, id, title, release_date, overview } = search;
    const imgs = backdrop_path
      ? configs.baseImgURL + backdrop_path
      : configs.defaultImg + "500";
    result += ` <div class="col"> <article class="card card__keySearc" data-id="${id}">
      
        <div class="card__img--wrapper">
          <img
            class="card__img"
            src="${imgs}"
            alt="${title}"
            data-id="${id}"
          />
        </div>
        <div class="card__body card__percentage">
          <h4 class="card__title"data-id="${id}">${title}</h4>
          <p>${overview}</p>
          <p class="card__text">${moment(release_date).format(
            "MMM DD, YYYY"
          )}</p>
        </div>
      </article></div>`;
  });
  authorMenuNode.innerHTML = result;
}
