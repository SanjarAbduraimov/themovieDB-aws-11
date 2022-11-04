import configs from "../configs";
export function displayActor(actor = []) {
    let result = ""; 
    const actorDetails = document.querySelector(".actor");
    const { profile_path, name, biography} = actor;
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
      <div class="actor__img__wrapper">
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
              <p class="overvave">Overvave</p>
              <p class="details__description">
                 ${biography}
              </p>
          </div>
         
          <div class="cast__films"></div>
  
      </div>
       </div>
          `;
    actorDetails.innerHTML = result;
}

export function displayCastActor(cast) {
    let result = "";
    const authorMenuNode = document.querySelector(".cast__films");
    cast.forEach((person) => {
      const { id, backdrop_path, title, release_date } = person;
      const img = backdrop_path
        ? configs.baseImgURL + backdrop_path
        : configs.defaultImg + "500";
      configs.baseImgURL;
      const cardImg = configs.cardImg;
      result +=`<div class="col"> <article class="card actor__cards" data-id="${id}">
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
            <a href="dropdown__link">
              <i class="fas fa-heart"></i> favourite
            </a>
          </li>
          <li class="dropdown__item">
            <a href="dropdown__link">
              <i class="fas fa-heart"></i> favourite
            </a>
          </li>
          <li class="dropdown__item">
            <a href="dropdown__link">
              <i class="fas fa-heart"></i> favourite
            </a>
          </li>
          <li class="dropdown__item">
            <a href="dropdown__link">
              <i class="fas fa-heart"></i> favourite
            </a>
          </li>
        </ul>
      </div>
      <div class="card__img--wrapper">
        <img
          class="card__img"
          src="${img}"
          alt="${title}"
        />
      </div>
      <div class="card__body card__percentage">
        <div class="percentage">${81}</div>
        <h4 class="card__title">${title}</h4>
        <p class="card__text">${release_date}</p>
      </div>
    </article></div>`;
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
  