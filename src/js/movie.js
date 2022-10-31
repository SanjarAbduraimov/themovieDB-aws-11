import configs from "../configs";

export function disMoviesDetails(data) {
  let result = "";
  const authorMenuNode = document.querySelector(".movies__detailes");
  const { poster_path, title, release_date, popularity, tagline, overview } =
    data;
  const img = poster_path
    ? configs.baseImgURL + poster_path
    : configs.defaultImg + "500";
  result += `
      <div class="moviestyle">
      <div class="details__moviess">
          <div class="details__img">
          <img width="100%" src="${img}" alt="img">
          </div>
      </div>
      <div class="details__moviess_col">
          <div class="details__title">
              <h1>${title}</h1> 
              <div class="films__details">
                  <p class="date__details"></p>
                  <p class="films__title_details"></p>
                  <p class="time__formovie"></p>
              </div>
          </div>
          <div class="movie__row">
              <div class="moviecol">${popularity}</div>
              <div class="moviecol">User Score</div>
              <div class="moviecol">==</div>
              <div class="moviecol">love</div>
              <div class="moviecol">page</div>
              <div class="moviecol">sevimli</div>
              <div class="moviecol">pley triller</div>
          </div>
  
          <div class="details__text">
              <p class="tagline">
                  ${tagline}
              </p>
              <p class="overvave">Overvave</p>
              <p class="details__description">
                 ${overview}
              </p>
              <div class="creaters">
                  <p class="creter"> ${release_date}</p>
                  <p class="creter">Creator</p>
                  <p class="creter">Creator</p>
              </div>
          </div>
  
      </div>
       </div>
          `;
  authorMenuNode.innerHTML = result;
}

export function displayCast(cast) {
  let result = "";
  const authorMenuNode = document.querySelector(".cast__people");
  cast.forEach((person) => {
    const { id, profile_path, name, character } = person;
    const img = profile_path
      ? configs.baseImgURL + profile_path
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
      </div>
        
      <div class="card__body">
        <div class="card__title">
          <p> ${name}</p>
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

export function displayCrew(crew) {
  let result = "";
  const authorMenuNode = document.querySelector(".crew__people");
  crew.forEach((person) => {
    const { id, profile_path, name, character } = person;
    const img = profile_path
      ? configs.baseImgURL + profile_path
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
          <p> ${name}</p>
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
export function initializeCastEvent() {
  const moviesssMenuNode = document.querySelector(".cast__people");
  moviesssMenuNode.addEventListener("click", (event) => {
    const id = event.target.closest(".card__img_top")?.dataset?.id;
    console.log(id, "bosilgan");
    if (!id) return;
    history.pushState({ id }, null, "/actor.html");
    location.reload();
  });
}