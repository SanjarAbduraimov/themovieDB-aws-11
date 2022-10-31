const type = {
  person: "person",
  movie: "movie",
  tv: "tv",
  list: "list",
};
const status = {
  popular: "popular",
  topRated: "top_rated",
  now: "now",
  upcoming: "upcoming",
};
const credits = {
  movieCredits: "credits",
  personCredits: "top_rated",
};
const sortBy = {
  "popularity Descending": "popularity.asc",
  "popularity Ascending": "popularity.desc",
  "rating Descending": "release_date.asc",
  "rating Ascending": "release_date.desc",
  "release Date Descending": "revenue.asc",
  "release Date Ascending": "revenue.desc",
  "title A-Z": "original_title.asc",
  "title Z-A": "original_title.desc",
};

export { sortBy, credits, status, type as default };
