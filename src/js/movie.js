import configs from "../configs";
import ModalVideo from "modal-video";
import moment from "moment/moment";

export function disMoviesDetails(data = []) {
  let result = "";
  const authorMenuNode = document.querySelector(".movies__detailes");
  const {
    poster_path,
    title,
    name,
    release_date,
    tagline,
    overview,
    vote_average,
    results,
    id,
  } = data;
  console.log(data, "data from movie details");
  const popularuty = vote_average;
  let btnHtml = results.length
    ? `<button class="js-modal-btn" data-video-id="${results[0]?.key}"><i class="fa-solid fa-play"></i> Pley Triller</div></button>`
    : "";
  const img = poster_path
    ? configs.baseImgURL + poster_path
    : configs.defaultImg + "500";
  const nameTitle = name ? name : title;
  result += `
      <div class="moviestyle">
      <div class="details__moviess">
          <div class="details__img">
          <img width="100%" src="${img}" alt="img">
          </div>
      </div>
      <div class="details__moviess_col">
          <div class="details__title">
          <h1>${nameTitle}</h1> 
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
              <i class="fa-solid fa-heart"></i>
              </div>
              <div class="moviecol movie_icons">
              <i class="fa-solid fa-bookmark"></i>
              </div>
              <div class="moviecol movie_icons">
              <div class="nav__Star">
              <div class="dropdow">
              <button class="dropbtn"> <li><a><i class="fa-solid fa-star"></i></a></li>
              </button>
              <div class="dropdow-content">
                <a>
                <div class="wrapper_iconstas">
                <button class="star">&#9734</button>
                <button class="star">&#9734</button>
                <button class="star">&#9734</button>
                <button class="star">&#9734</button>
                <button class="star">&#9734</button>
                </div>
                </a>
              </div>
             </div> 
             </div>

              </div>
              
              <div class="moviecol trealler">
              ${btnHtml}</div>
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
      </div>
      
          `;
  authorMenuNode.innerHTML = result;
  let modal = new ModalVideo(".js-modal-btn", {
    channel: "youtube",
  });
}
export function displayNetwork(data = []) {
  console.log(data);
  const { facebook_id, instagram_id, twitter_id } = data;
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
export function displayMovieStatus(data = []) {
  console.log(data);
  const { budget, revenue, status, original_language } = data;
  const budgets = budget ? budget : "";
  const revenues = revenue ? revenue : "";

  let result = "";
  const authorMenuNode = document.querySelector(".movie__status");
  result += `
     <h4>Status</h4>
     <div class="status">${status}</div>
     <h4>Original language</h4>
     <div class="status">${original_language}</div>
     <h4>Budget</h4>
     <div class="status">$${budgets}</div>
     <h4>Revenue</h4>
     <div class="status">$${revenues}</div>
   
    `;
  authorMenuNode.innerHTML = result;
}

export function displayRecomaditions(data = []) {
  console.log(data);
  let result = "";
  const authorMenuNode = document.querySelector(".recommendations");
  data.forEach((movies) => {
    const { id, title, backdrop_path, name } = movies;
    const img = backdrop_path
      ? configs.baseImgURL + backdrop_path
      : configs.defaultImg + "500";
    const nameTitle = name ? name : title;
    result += `
    <div class="col"> <article class="card card__recommadation" data-id="${id}">
    <div class="card__img--wrapper">
      <img
        width="100%"
        class="card__img"
        src="${img}"
        alt="${nameTitle}"
      />
    </div>
    <div class="card__body card__percentage cart-flex">
      <h4 class="card__title">${nameTitle}</h4>
      <div class="percentage">${81}</div>
    </div>
  </article></div>
      `;
  });

  authorMenuNode.innerHTML = result;
}

export function displayKeyword(data = []) {
  let result = "";
  const authorMenuNode = document.querySelector(".movie__keyword ");
  data.forEach((person) => {
    const { id, name } = person;
    result += `
    <p class="col__key" data-id="${id}">  ${name} </p>
    `;
  });
  authorMenuNode.innerHTML = result;
}

export function displayCast(cast = []) {
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

export function displayTvSearch(data = []) {
  let result = "";

  const authorMenuNode = document.querySelector(".search__results");
  data.forEach((movies) => {
    const { backdrop_path, id, name, release_date } = movies;
    const imgs = backdrop_path
      ? configs.baseImgURL + backdrop_path
      : configs.defaultImg + "500";
    result += ` <div class="col"> <article class="card card__hero" data-id="${id}">
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
            <i class="fas fa-heart"></i> Add to list
          </a>
        </li>
        <li class="dropdown__item">
          <a href="dropdown__link">
            <i class="fas fa-heart"></i> Favourite
          </a>
        </li>
        <li class="dropdown__item">
          <a href="dropdown__link">
            <i class="fas fa-heart"></i> Watchlist
          </a>
        </li>
        <li class="dropdown__item">
          <a href="dropdown__link">
            <i class="fas fa-heart"></i> Your raiting
          </a>
        </li>
      </ul>
    </div>
    <div class="card__img--wrapper">
      <img
        class="card__img"
        src="${imgs}"
        alt="${name}"
      />
    </div>
    <div class="card__body card__percentage">
      <div class="percentage">${81}</div>
      <h4 class="card__title">${name}</h4>
      <p class="card__text">${moment(release_date).format("MMM DD, YYYY")}</p>
    </div>
  </article></div>`;
  });
  authorMenuNode.innerHTML = result;
}

export function initializeTvEvent() {
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
        history.pushState({ id }, null, "/tv.html");
        location.reload();
      }
      if (isMenuBtn) {
        let cardContent = card.querySelector(".dropdown__content");
        cardContent.classList.toggle("show");
        card.classList.toggle("show");
      }
    });
  });
}

