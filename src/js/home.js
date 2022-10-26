import configs from "../configs";



export function displayMovies(data = []) {
  let result = "";
  const authorMenuNode = document.querySelector(".get__movie");
  data.forEach((movies) => {
    const { id, backdrop_path, title, release_date} = movies;
    const img = backdrop_path
      ? configs.baseImgURL + backdrop_path
      : configs.defaultImg + "500";
    configs.baseImgURL;
    const cardImg = configs.cardImg;
    result += `
    
    <div class="col details__cols">
     <div class="card">
      <div class="card__head">
        <div class="card__img_top" data-id="${id}">
          <img width="100%" src="${img}" alt="Movies__Pecture">
        </div>
        <div class="card__menu">
          <img width="100%" src="${cardImg}" class="card__menu_img" alt="Movies__Pecture">
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
  const moviesssMenuNode = document.querySelector(".get__movie");
  const searchForm = document.querySelector(".inner_search_form");
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = searchForm.title.value;
    history.pushState({ title }, null, "/search.html");
    location.reload();
  });
  moviesssMenuNode.addEventListener("click", (event) => {
    const id = event.target.closest(".card__img_top")?.dataset?.id;
    console.log(id, "bosilgan");
    if (!id) return;
    history.pushState({ id }, null, "/movie.html");
    location.reload();
  });
}


export function cardClick() {
  let cardMenu = document.querySelectorAll(".card__menu_img");
  cardMenu.forEach(card => {
    card.addEventListener('click', () => {
      let cardOpasity = document.querySelector(".card__content")
      console.log('card clicked');
      cardOpasity.classList.add("card__opasity");
    });
    if (card === "click") {
      const cardwrapper = document.querySelectorAll(".card");
      cardwrapper.forEach(cards=> {
        cards.classList.add("card__show");
      })
      
    }
  });
  
}