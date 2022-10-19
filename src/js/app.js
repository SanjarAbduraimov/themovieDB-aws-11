import "./style";
// import moment from "moment";
// import "./config";
import "@morbidick/bootstrap";

document.addEventListener("DOMContentLoaded", () => {
  const page = location.pathname;
  console.log(page);
  if (page === "/index.html" || page === "/") {
    getRequest(
      "https://api.themoviedb.org/3/movie/popular?api_key=ea4c56d50a17f4673be5e41527930787"
    ).then((data) => {
      console.log(data);
      filmNode(data.results);
    });
  }
});

function filmNode(data) {
  let result = "";
  const displayfilm = document.querySelector(".films .container");
  data.forEach((films) => {
    result += ` 
        <div class="film">
        <img src="${films.backdrop_path}" alt="film Image" />
        <h4>${films.title}</h4>
        <h5>${films.release_date}</h5>
      </div>
        `;
  });
  displayfilm.innerHTML = result;
}

async function getRequest(url) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    if (!response.ok) {
      if (response.status === 404) {
        throw { msg: "Iltimos to'g'ri manzilga so'rov jo'nating!" };
      } else if (response.status === 403) {
        // displaying "hm, what about no?"
      } else if (response.status === 401) {
        throw { msg: "Iltimos ro'yxatdan o'ting" };
      } else {
        // displaying "dunno what happened \_(ツ)_/¯"
      }
      if (data?.msg.startsWith("E11000")) {
        throw {
          msg: "Siz allaqochon ro'yhatdan o'tgansiz",
          path: "/sign-in.html",
        };
      }
      throw data;
    }
    return data;
  } catch (err) {
    throw error;
  }
}

function getmove(data) {
  let result = "";
  const authorMenuNode = document.querySelector(".get__tv ");
  data.forEach((tv) => {
    result += `
           <div class="col">
                  <div class="card" id="${tv.id}">
                      <div class="card__img">
                          <img width="100%" src="/src/assets/img/logo.png" alt="img">
                      </div>
                      <div class="card__body">
                          <div class="card__title">
                              <p> ${tv.original_name}</p>
                          </div>
                          <div class="card__date">${tv.first_air_date}</div>
                      </div>
                  </div>
          </div>
          `;
  });
  authorMenuNode.innerHTML = result;
}

function displayTv(data) {
  let result = "";
  const authorMenuNode = document.querySelector(".get__tv ");
  data.forEach((tv) => {
    result += `
           <div class="col">
                  <div class="card" id="${tv.id}">
                      <div class="card__img">
                          <img width="100%" src="/src/assets/img/logo.png" alt="img">
                      </div>
                      <div class="card__body">
                          <div class="card__title">
                              <p> ${tv.original_name}</p>
                          </div>
                          <div class="card__date">${tv.first_air_date}</div>
                      </div>
                  </div>
          </div>
          `;
  });
  authorMenuNode.innerHTML = result;
}
