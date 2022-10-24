import axios from "../utils/axios";
import configs from "../configs";

const { apiKey } = configs;
export function fetchMovie(type, page) {
  if (!type) {
    throw "Please insert type parametr";
  }
  return axios.get(
    `movie/${type}?api_key=${apiKey}&language=${navigator.languages[0]}&page=${page}`
  );
}
export function fetchMovieDetails(movie_id) {
  if (!movie_id) {
    throw "Please insert type parametr";
  }
  return axios.get(
    `movie/${movie_id}?api_key=${apiKey}&language=${navigator.languages[0]}`
  );
}

const { baseImgURL } = configs;
export function fetchMovieImg(img) {
  if (!img) {
    throw "Please insert type parametr";
  }
  return axios.get(
    `${baseImgURL}${img}?api_key=${apiKey}` 
  );
}

export function fetchMovieSearch(quearyText) {
  if (!quearyText) {
    throw "Please insert type parametr";
  }
  return axios.get(
    `search/movie?api_key=${apiKey}&language=${navigator.languages[0]}query=${quearyText}&page=${page}include_adult=false`
  );
}


