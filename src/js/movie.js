import configs from "../configs";

export function disMoviesDetails(data) {
  let result = "";
  const authorMenuNode = document.querySelector(".movies__detailes");
  const { poster_path, title, release_date, tagline, overview, vote_average } =
    data;
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
              <i class="fa-solid fa-play"></i> Pley Triller</div>
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
let items = document.querySelectorAll(".progress-item");
const counters = Array(items.length);
const intervals = Array(items.length);
counters.fill(0);
items.forEach((number, index) => {
  intervals[index] = setInterval(() => {
    if (counters[index] == parseInt(number.dataset.num)) {
      clearInterval(intervals[index]);
    } else {
      counters[index] += 1;
      number.style.background =
        "conic-gradient(red calc(" + counters[index] + "%), gray 0deg)";
      number.setAttribute("data-value", counters[index] + "%");
      number.innerHTML = counters[index] + "%";
    }
  }, 15);
});
