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
          <div class="crew__films"></div>
         
  
      </div>
       </div>
          `;
    actorDetails.innerHTML = result;
}

export function displayCastActor(cast) {
    let result = "";
    const authorMenuNode = document.querySelector(".cast__films");
    cast.forEach((person) => {
      const { id, poster_path, title, character } = person;
      const img = poster_path
        ? configs.baseImgURL + poster_path
        : configs.defaultImg + "500";
      configs.baseImgURL;
      const cardImg = configs.cardImg;
      result += `
      
      
      <div class="col actors__cols">
       <div class="card">
        <div class="card__head">
          <div class="card__img_top" data-id="${id}">
            <img width="100%" src="${img}" alt="Movies__Pecture">
          </div>
        </div>
          
        <div class="card__body">
          <div class="card__title">
            <p> ${title}</p>
          </div>
          <div class="card__date">
            <p>${character}</p>
          </div>
          </div>
        </div>
        
      </div>
      `;
    });
    authorMenuNode.innerHTML = result;
  }

  export function displayCrewActor(crew) {
    let result = "";
    const authorMenuNode = document.querySelector(".crew__films");
    crew.forEach((person) => {
      const { id, poster_path, title } = person;
      const img = poster_path
        ? configs.baseImgURL + poster_path
        : configs.defaultImg + "500";
      result += `
      
      <div class="col details__cols">
       <div class="card">
        <div class="card__head">
          <div class="card__img_top" data-id="${id}">
            <img width="100%" src="${img}" alt="Movies__Pecture">
          </div>
        </div>
          
        <div class="card__body">
          <div class="card__title">
            <p> ${title}</p>
          </div>
          <div class="card__date">
          
          </div>
          </div>
        </div>
        
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
  