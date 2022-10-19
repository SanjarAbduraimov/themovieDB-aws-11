import "./style";
import movieType from "../constants";
import { fetchMovie } from "../api";
fetchMovie(movieType.topRated)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
