import configs from "../configs";
import ModalVideo from "modal-video";
export function disMoviesDetails(data) {
  let result = "";
  const authorMenuNode = document.querySelector(".movies__detailes");
  const {
    poster_path,
    title,
    release_date,
    tagline,
    overview,
    vote_average,
    results,
  } = data;
  console.log(data, "data from movie details");
  const popularuty = vote_average;

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
              <div class="moviecol">
              <span class="#">${popularuty}</span></div>
              <div class="moviecol">
              <h4>User</h4>
              <h4> Score</h4>
            
              </div>
              <div class="moviecol movie_icons"><i class="fa-solid fa-bars"></i>
              </div>
              <div class="moviecol movie_icons">
              
 
              <i class="fa-solid fa-heart"></i></div>
              <div class="moviecol movie_icons">
              <i class="fa-solid fa-bookmark"></i></div>
              <div class="moviecol movie_icons">
              <i class="fa-solid fa-star"></i></div>
              <div class="moviecol trealler">
               
              <button class="js-modal-btn" data-video-id="${results[0].key}"><i class="fa-solid fa-play"></i> Pley Triller</div></button>

          </div>
          
          <div class="details__text">
              <p class="tagline">
                  ${tagline}
              </p>
              <h4 class="overvave">Overvave</h4>
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
  let modal = new ModalVideo(".js-modal-btn", {
    channel: "youtube",
  });
}
export function displayNetwork(data) {
  console.log(data);
  const {facebook_id, instagram_id, twitter_id} = data;
  console.log(facebook_id);

  let result = "";
  const authorMenuNode = document.querySelector(".casts__col .row");
  result += `
   <div class="col"> 
   <a href="https://www.facebook.com/${facebook_id}" target="_blank"><i class="fa-brands fa-square-facebook"></i></a>
   </div>
   <div class="col"> 
   <a href="https://twitter.com/${twitter_id}" target="_blank"><i class="fa-brands fa-twitter"></i></a>
 
   </div>
   <div class="col"> 
   <a href="https://instagram.com/${instagram_id}" target="_blank"><i class="fa-brands fa-instagram"></i></a>
 
   </div>
   
   <div class="col"> 
   <a href="./index.html"><i class="fa-solid fa-share-from-square"></i></a>
 
   </div>
    `;
  authorMenuNode.innerHTML = result;
}
export function displayKeyword(data) {
  let result = "";
  const authorMenuNode = document.querySelector(".movie__keyword ");
  data.forEach((person) => {
    const { id, name  } = person;
    result += `
    <p class="col__key" data-id="${id}">  ${name} </p>
    `;
  });
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
    
    
    <div class="col"> <article class="card card__moviess" data-id="${id}">
  <div class="card__img--wrapper">
    <img
      class="card__img card__img_top"
      data-id="${id}"
      src="${img}"
      alt="${name}"
    />
  </div>
  <div class="card__body card__percentage">
    <div class="percentage">${character}</div>
    <h4 class="card__title">${name}</h4>
  </div>
</article></div>
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

