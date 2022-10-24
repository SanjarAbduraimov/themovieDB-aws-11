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

export function fetchActors(person_id) {
  if(!person_id) {
    throw"Please insert type parametr";
  }
  return axios.get(
   `person/${person_id}?api_key=${apiKey}&language=${navigator.languages[0]}`
  );
}

export function fetchActor(type, page) {
  if (!type) {
    throw "Please insert type parametr";
  }
  return axios.get(
    `person/${type}?api_key=${apiKey}&language=${navigator.languages[0]}&page=${page}`
    
  );
}
