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

export function fetchMovieCredits(type, id, credits) {
  if (!id) {
    throw "Please insert id parametr";
  }
  if (!type) {
    throw "Please insert type parametr";
  }
  return axios.get(
    `${type}/${id}/${credits}?api_key=${apiKey}&language=${navigator.languages[0]}`
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

export function fetchSearchSort(type, sortBy, page = 1) {
  if (!type) {
    throw "Please insert type parametr";
  }
  if (!sortBy) {
    throw "Please insert sort parametr";
  }

  return axios.get(
    `discover/${type}?api_key=${apiKey}&language=${navigator.languages[0]}sort_by=${sortBy}&page=${page}`
  );
}

export function fetchSearch(type, query) {
  if (!type) {
    throw "Please insert type parametr";
  }
  let url = `discover/${type}?api_key=${apiKey}`;
  for (const key in query) {
    if (query[key]) {
      url += `&${key}=${query[key]}`;
    }
  }
  return axios.get(url);
}

export function fetchSearchGenres(type, with_genres, page = 1) {
  if (!type) {
    throw "Please insert type parametr";
  }
  if (!with_genres) {
    throw "Please insert sort parametr";
  }

  return axios.get(
    `discover/${type}?api_key=${apiKey}&language=${navigator.languages[0]}&page=${page}&with_genres=${with_genres}`
  );
}
export function fetchGenres(type) {
  return axios.get(
    `genre/${type}/list?api_key=${apiKey}&language=${navigator.languages[0]}`
  );
}
export function fetchLanguages() {
  return axios.get(`configuration/languages?api_key=${apiKey}`);
}
export function fetchSearchKeywords(type, title, page = 1) {
  if (!type) {
    throw "Please insert type parametr";
  }
  if (!title) {
    throw "Please insert sort parametr";
  }

  return axios.get(
    `discover/${type}?api_key=${apiKey}&language=${navigator.languages[0]}&page=${page}&without_keywords=${title}`
  );
}
