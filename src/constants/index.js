const type = {
  person: "person",
  movie: "movie",
  tv: "tv",
  list: "list"
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
}
const sortBy = {
  popularityDescending: "popularity.asc",
  popularityAscending:"popularity.desc",
  ratingDescending: "release_date.asc",
  ratingAscending: "release_date.desc",
  releaseDateDescending:"revenue.asc",
  releaseDateAscending: "revenue.desc",
  titleAZ: "original_title.asc",
  TitleZA:"original_title.desc",
};
const genresType = {
  action: "action",
  adventure: "adventure",
  animation: "animation",
  comedy: "comedy",
  crime: "crime",
  documentary: "documentary",
  drama: "drama",
  family: "family",
  fantasy: "fantasy",
  histry: "history",
  horror: "horror",
  music: "music",
  thriller: "thriller",
};

export {genresType, sortBy , credits, status, type as default };
