import moment from "moment/moment";
import configs from "../configs";
import {cardTemplate} from "./home";
export function displayAccountName(data = []) {
    let result = "";
    const authorMenuNode = document.querySelector(".account__name");
    result += `<p class="username"> ${data}</p> `;
    authorMenuNode.innerHTML = result;
}

export function displayFavoriteMovies(data = []) {
    let result = "";
    const authorMenuNode = document.querySelector(".profile__wrapper");
    data.forEach((movies) => {
      const { backdrop_path, ...docs } = movies;
      const img = backdrop_path
        ? configs.baseImgURL + backdrop_path
        : configs.defaultImg + "500";
      result += cardTemplate({ ...docs, img });
    });
    authorMenuNode.innerHTML = result;
}