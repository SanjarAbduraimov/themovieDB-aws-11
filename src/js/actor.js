import configs from "../configs";
import { cardTemplate } from "../js/home";
export function displayActor(actor = []) {
  let result = "";
  const actorDetails = document.querySelector(".actor");
  const { profile_path, name, biography } = actor;
  const img = profile_path
    ? configs.baseImgURL + profile_path
    : configs.defaultImg + "500";
  configs.baseImgURL;
  result += `
      <div class=" actor__cards">
      <div class=" actor__img__wrapper">
          <div class="actor__imgs">
          <img width:"100%" src="${img}">
          </div>
      </div>
      <div class="actor__wrapper">
          <div class="actor__title">
              <h1>${name} </h1> 
              <div class="actor__details">
                  <p class="day__details"></p>
                  <p class="actor__title_details"></p>
                  <p class="hour__formovie"></p>
              </div>
          </div>
  
          <div class="actor__text">
              <p class="tagline">
                  
              </p>
              <h4 class="biography__actor">Biography</h4>
              <p class="details__description">
                 ${biography}
              </p>
          </div>
          <p class="actor__known">Known For</p>
         
          <div class="row cast__films">
          </div>
          <div class="acting__wrepper">
          <p class="acting__title">Acting</p>
          <div class="nav__part">

          <div class="dropdow">
            <button class="dropbtn">  <li><a href="#">All <i class="fa-sharp fa-solid fa-caret-down"></i></a></li>
            </button>
            <div class="dropdow-content">
              <a href="#">Movies</a>
              <a href="#">TV Shows</a>
            </div>
          </div> 
          <div class="dropdow">
            <button class="dropbtn"> <li><a href="#">Department <i class="fa-sharp fa-solid fa-caret-down"></i></a></li>
            </button>
            <div class="dropdow-content">
              <a href="#">Acting</a>
              <a href="#">Production</a>
              <a href="#">Crew</a>
            </div>
          </div> 
        </div>
          </div> 
          
          <div class="container crew__container">
          <div class="crew__films">
            
          </div>
    
        </div>
  
      </div>
       </div>
          `;
  actorDetails.innerHTML = result;
}

export function displayCastActor(cast) {
  let result = "";
  const authorMenuNode = document.querySelector(".cast__films");
  cast.forEach((movies) => {
    const { backdrop_path, ...docs } = movies;
    const img = backdrop_path
      ? configs.baseImgURL + backdrop_path
      : configs.defaultImg + "500";
    result += cardTemplate({ ...docs, img });
  });

  authorMenuNode.innerHTML = result;
}

export function displayCrewActor(crew) {
  let result = "";
  const authorMenuNode = document.querySelector(".crew__films");
  crew.forEach((person) => {
    const { title } = person;
    result += `
   <div class="acting">
     <p></p>
     <span></span>
     
     <div class="acting__title"> ${title}</div>

   </div>
      `;
  });
  authorMenuNode.innerHTML = result;
}

export function initializeActorEvent() {
  const moviesssMenuNode = document.querySelector(".people");
  moviesssMenuNode.addEventListener("click", (event) => {
    const id = event.target.closest("#people__card__top")?.dataset?.id;
    console.log(id, "bosilgan");
    if (!id) return;
    history.pushState({ id }, null, "/actor.html");
    location.reload();
  });
}
export function initializeActorMenuEvent() {
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
        // let focusedElement = document.querySelectorAll(
        //   ".card dropdown__content.show"
        // );
        // focusedElement.forEach((item) => {
        //   item.classList.remove("show");
        //   item.closest(".dropdown__content").classList.remove();
        // });
        let cardContent = card.querySelector(".dropdown__content");
        cardContent.classList.toggle("show");
        card.classList.toggle("show");
      }
    });
  });
}
