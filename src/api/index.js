import axios from "../utils/axios";
import configs from "../configs";

const { apiKey } = configs;
export function fetch(type, status, page) {
  if (!type) {
    throw "Please insert type parametr";
  }
  return axios.get(
    `${type}/${status}?api_key=${apiKey}&language=${navigator.languages[0]}&page=${page}`
  );
}
export function fetchDetails(type, id) {
  if (!id) {
    throw "Please insert id parametr";
  }
  if (!type) {
    throw "Please insert type parametr";
  }
  return axios.get(
    `${type}/${id}?api_key=${apiKey}&language=${navigator.languages[0]}`
  );
}

export function fetchMovieSearch(
  title,
  query = {
    // adult: true,
    // primary_release_year: "date",
    // year: 2022,
    // region: "uzbekistan",
  },
  page = 1
) {
  if (!title) {
    throw "Please insert type parametr";
  }
  let url = `search/movie?api_key=${apiKey}&language=${navigator.languages[0]}&query=${title}&page=${page}`;
  for (const key in query) {
    if (query[key]) {
      url += `&${key}=${query[key]}`;
    }
  }
  return axios.get(url);
}
