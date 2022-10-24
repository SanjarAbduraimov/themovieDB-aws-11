import { fetchMovie } from "../api";
import { fetchImg } from "../api";
import config from "../configs";
const {  baseImgUrl } = config;
import { fetchMovieImg } from "../api";




export function disMoviesDetails(data) {
    let result = "";
    const path = data.backdrop_path;
    const imguaas = "baseImgUrl" + "path";
    // const imgssss = fetchMovieImg(path);
    const authorMenuNode = document.querySelector(".movies__detailes");
    
      result += `
      <div class="row">
      <div class="col">
          <div class="details__img">
          <img scr="${imguaas}">
          </div>
      </div>
      <div class="col">
          <div class="details__title">
              <h1>${data.title} ${data.release_date}</h1> 
              <div class="films__details">
                  <p class="date__details"></p>
                  <p class="films__title_details"></p>
                  <p class="time__formovie"></p>
              </div>
          </div>
          <div class="row">
              <div class="col">${data.popularity}</div>
              <div class="col">User Score</div>
              <div class="col">==</div>
              <div class="col">love</div>
              <div class="col">page</div>
              <div class="col">sevimli</div>
              <div class="col">pley triller</div>
          </div>
  
          <div class="details__text">
              <p class="tagline">
                  ${data.tagline}
              </p>
              <p class="overvave">Overvave</p>
              <p class="details__description">
                 ${data.overview}
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
