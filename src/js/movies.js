import { cardTemplate } from "./home";
import configs from "../configs";


export function displaySearchMovies(data = []) {
  let result = "";
  const authorMenuNode = document.querySelector(".search__results");
  data.forEach((movies) => {
    const { backdrop_path, ...docs } = movies;
    const img = backdrop_path
      ? configs.baseImgURL + backdrop_path
      : configs.defaultImg + "500";
    result += cardTemplate({ ...docs, img });
  });
  authorMenuNode.innerHTML = result;
}
