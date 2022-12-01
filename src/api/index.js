import axios from "../utils/axios";
import configs from "../configs";

const { apiKey } = configs;
export function fetch(type, status, page = 1) {
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

export function searchKeywords(query, page = 1) {
  if (!query) {
    throw "Please insert id parametr";
  }
  return axios.get(
    `search/multi?api_key=${apiKey}&language=${navigator.languages[0]}&query=${query}&page=${page}&include_adult=false`
  );
}

export function fetchlistMovie(type, id) {
  if (!id) {
    throw "Please insert id parametr";
  }
  if (!type) {
    throw "Please insert type parametr";
  }
  return axios.get(
    `${type}/${id}/external_ids?api_key=${apiKey}&language=${navigator.languages[0]}`
  );
}
export function fetchKeywordMovie(type, id) {
  if (!id) {
    throw "Please insert id parametr";
  }
  if (!type) {
    throw "Please insert type parametr";
  }
  return axios.get(
    `${type}/${id}/keywords?api_key=${apiKey}&language=${navigator.languages[0]}`
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
export function fetchMovieVedio(type, movie_id) {
  if (!type) {
    throw "Please insert type parametr";
  }
  if (!movie_id) {
    throw "Please insert type parametr";
  }
  let url = `${type}/${movie_id}/videos?api_key=${apiKey}&language=${navigator.languages[0]}`;

  return axios.get(url);
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

export function fetchKeyword(type, keyword_id) {
  if (!keyword_id) {
    throw "Please insert id parametr";
  }
  if (!type) {
    throw "Please insert type parametr";
  }
  return axios.get(`${type}/${keyword_id}/movies?api_key=${apiKey}`);
}

export function fetchRecommendation(type, id, page = 1) {
  if (!id) {
    throw "Please insert id parametr";
  }
  if (!type) {
    throw "Please insert type parametr";
  }
  return axios.get(
    `${type}/${id}/recommendations?api_key=${apiKey}&language=${navigator.languages[0]}&page=${page}`
  );
}
const { sessionId } = configs;
export function fetchMovieFavority(type, id, status, types) {
  if (!type) {
    throw "Please insert type parametr";
  }

  let url = `${type}/{account_id}/favorite?api_key=${apiKey}&session_id=${sessionId}`;
  return axios.post(url, {
    media_type: types,
    media_id: `${id}`,
    favorite: status,
  });
}
export function fetchMovieWatchList(type, id, status, types) {
  if (!type) {
    throw "Please insert type parametr";
  }
  let url = `${type}/{account_id}/watchlist?api_key=${apiKey}&session_id=${sessionId}`;
  return axios.post(url, {
    media_type: types,
    media_id: `${id}`,
    watchlist: status,
  });
}

export function fetchMovieFavorityGet(type, id) {
  if (!type) {
    throw "Please insert type parametr";
  }
  if (!id) {
    throw "Please insert type parametr";
  }

  let url = `${type}/${id}/account_states?api_key=${apiKey}&session_id=${sessionId}`;
  return axios.get(url);
}

export function fetchAccount(type) {
  if (!type) {
    throw "Please insert type parametr";
  }
  let url = `${type}?api_key=${apiKey}&session_id=${sessionId}`;
  return axios.get(url);
}

export function fetchAccountStatus(type, status, typeAccount, page = 1) {
  if (!type) {
    throw "Please insert type parametr";
  }
  if (!typeAccount) {
    throw "Please insert type parametr";
  }
  if (!status) {
    throw "Please insert type parametr";
  }

  let url = `${type}/{account_id}/${status}/${typeAccount}?api_key=${apiKey}&session_id=${sessionId}&sort_by=created_at.asc&page=${page}`;
  return axios.get(url);
}

export function fetchMovieFavorityDel(type, id, types) {
  if (!type) {
    throw "Please insert type parametr";
  }

  let url = `${type}/{account_id}/favorite?api_key=${apiKey}&session_id=${sessionId}`;
  return axios.post(url, {
    media_type: types,
    media_id: `${id}`,
    favorite: false,
  });
}

export function fatchMovieRating(type, id, value) {
  if (!type) {
    throw "Please insert type parametr";
  }
  if (!id) {
    throw "Please insert type parametr";
  }
  if (!value) {
    throw "Please insert type parametr";
  }

  let url = `${type}/${id}/rating?api_key=${apiKey}&session_id=${sessionId}`;
  return axios.post(url, {
    value: `${value}`,
  });
}
