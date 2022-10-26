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
      <div class="row">
      <div class="col">
          <div class="details__img">
          <img width="100%" src="${img}" alt="img">
          </div>
      </div>
      <div class="col">
          <div class="details__title">
              <h1>${title} ${release_date}</h1> 
              <div class="films__details">
                  <p class="date__details"></p>
                  <p class="films__title_details"></p>
                  <p class="time__formovie"></p>
              </div>
          </div>
          <div class="row">
              <div class="col">${popularity}</div>
              <div class="col">User Score</div>
              <div class="col">==</div>
              <div class="col">love</div>
              <div class="col">page</div>
              <div class="col">sevimli</div>
              <div class="col">pley triller</div>
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
                  <p class="creter">Creator</p>
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
