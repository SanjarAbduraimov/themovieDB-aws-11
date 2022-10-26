import configs from "../configs";

export function displayMovies(data = []) {
  let result = "";
  const authorMenuNode = document.querySelector(".get__movie");
  data.forEach((movies) => {
    const { id, backdrop_path, title, release_date } = movies;
    const img = backdrop_path
      ? configs.baseImgURL + backdrop_path
      : configs.defaultImg + "500";
    result += `
    <div class="col details__cols">
     <div class="card">
      <div class="card__head">
        <div class="card__img_top" data-id="${id}">
          <img width="100%" src="${img}" alt="Movies__Pecture">
        </div>
        <div class="card__menu">
        <svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path id="circle-more" d="M16,4A12,12,0,1,0,28,16,12.01312,12.01312,0,0,0,16,4ZM10,18a2,2,0,1,1,2-2A2.00006,2.00006,0,0,1,10,18Zm6,0a2,2,0,1,1,2-2A2.00006,2.00006,0,0,1,16,18Zm6,0a2,2,0,1,1,2-2A2.00006,2.00006,0,0,1,22,18Z" fill="#FFFFFF"></path>
        </svg>
        </div>
      </div>
        
      <div class="card__body">
        <div class="card__title">
          <p> ${title}</p>
        </div>
        <div class="card__date">
          <p>${release_date}</p>
        </div>
        </div>
        <div class="card__content">John Doe</div>
      </div>
      
    </div>
    `;
  });
  authorMenuNode.innerHTML = result;
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
      console.log(element);
      let showMovieDetails =
        element
          .closest(".card__img_top")
          ?.classList.contains("card__img_top") ||
        element.closest(".card__title")?.classList.contains("card__title");
      let isMenuBtn = element
        .closest(".card__menu")
        ?.classList.contains("card__menu");
      if (showMovieDetails) {
        const id = element.closest(".card__img_top")?.dataset?.id;
        if (!id) return;
        history.pushState({ id }, null, "/movie.html");
        location.reload();
      }
      if (isMenuBtn) {
        let cardOpacity = card.querySelector(".card__content");
        cardOpacity.classList.toggle("card__opasity");
      }
    });
  });
}
