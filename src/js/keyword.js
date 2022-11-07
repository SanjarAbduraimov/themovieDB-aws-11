import configs from "../configs";
import moment from "moment/moment";

export function eventKeywords() {
  const keywordMenuNode = document.querySelector(".movie__keyword");
  keywordMenuNode.addEventListener("click", (event) => {
    const id = event.target.closest(".col__key")?.dataset?.id;
    console.log(id, "bosilgan");
    if (!id) return;
    history.pushState({ id }, null, "/keyword.html");
    location.reload();
  });
}

export function displayKeywordResults(data = []) {
  let result = "";
  const authorMenuNode = document.querySelector(".results_wrap");
  result += `<p class="keyword__count"> ${data} Shows</p> `;
  authorMenuNode.innerHTML = result;
}
export function displayKeywords(data = []) {
  let result = "";

  const authorMenuNode = document.querySelector(".keyword__wreapper");
  data.forEach((keyword) => {
    const { backdrop_path, id, title, release_date ,overview} = keyword;
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
        <p>${ overview }</p>
        <p class="card__text">${moment(release_date).format("MMM DD, YYYY")}</p>
      </div>
    </article></div>`;
  });
  authorMenuNode.innerHTML = result;
}
// export function initializeKeyEvent() {
//   const cardNodeList = document.querySelectorAll(".card");
//   cardNodeList.forEach((card) => {
//     card.addEventListener("click", (event) => {
//       const element = event.target;
//       const id = card?.dataset?.id;
//       let showMovieDetails =
//         element.closest(".card__img")?.classList.contains("card__img") ||
//         element.closest(".card__title")?.classList.contains("card__title");
//       if (showMovieDetails) {
//         if (!id) return;
//         history.pushState({ id }, null, "/movie.html");
//         location.reload();
//       }
//     });
//   });
// }
export function initializeKeyEvent() {
    const keywordMenuNode = document.querySelector(".keyword__wreapper");
    keywordMenuNode.addEventListener("click", (event) => {
      const id = event.target.closest(".card__img")?.dataset?.id;
      const title = event.target.closest(".card__title")?.dataset?.id;
      console.log(id, "bosilgan");
      if (!id) return;
      history.pushState({ id }, null, "/movie.html");
      location.reload();
    });
  }