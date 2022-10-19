import "./style";
// import moment from "moment";
// import "./config";
import "@morbidick/bootstrap";

document.addEventListener("DOMContentLoaded", (e) => {
  const page = location.pathname;
  console.log(page);
  if (page === "/index.html" || page === "/") {
    getRequest("https://api.themoviedb.org/3/movie/popular?api_key=ea4c56d50a17f4673be5e41527930787").then((data)=>{
      console.log(data);
      displayMovies(data.results);
      initializeMoveEvent();
    });
    const getMovie = document.querySelector(".get__movie");
    const getTv = document.querySelector(".get__tv");
    
    const showTv = document.querySelector(".show__tv");
    const showMovie = document.querySelector(".show__movei");

    showTv.addEventListener("click", ()=>{
      getRequest("https://api.themoviedb.org/3/tv/popular?api_key=ea4c56d50a17f4673be5e41527930787").then((data)=>{
        console.log(data.results);
        displayTv(data.results)
                
      }).then((data)=>{
        history.go(1);
        getMovie.classList.add("hide");
        getTv.classList.remove("hide");
        
        
      })
    })
    showMovie.addEventListener("click", (e)=>{
      e.preventDefault();
      getRequest("https://api.themoviedb.org/3/movie/popular?api_key=ea4c56d50a17f4673be5e41527930787").then((data)=>{
      console.log(data.results);
      displayMovies(data.results);
      }).then((data)=>{
        history.go(0);
        getMovie.classList.remove("hide");
        getTv.classList.add("hide");
        
        
      })
    })
    getRequest("https://api.themoviedb.org/3/trending/all/day?api_key=7014e2cdb739f65a296e51932f359f53").then((data)=>{
      console.log(data.results);
      displayToday(data.results)

    });
    getRequest("https://api.themoviedb.org/3/trending/all/week?api_key=7014e2cdb739f65a296e51932f359f53").then((data)=>{
      console.log(data.results);
      displayWeek(data.results);
    });

    
    


    
    
   
  }



  if (page === "/movie.html" || page === "/movie") {

    fetchById(
      "https://api.themoviedb.org/3/movie/popular?api_key=ea4c56d50a17f4673be5e41527930787",
      history.state.id
    ).then((data) => {
      console.log(data);

    })
  }

});


async function getRequest(url) {
  try {
    const response = await fetch(
      url ,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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

function displayMovies(data) {
  let result = "";
  const authorMenuNode = document.querySelector(".get__movie");
  data.forEach((movies) => {
    result += `
         <div class="col">
                <div class="card" data-id="${movies.id}">
                    <div class="card__img">
                        <img width="100%" src="/src/assets/img/logo.png" alt="img">
                    </div>
                    <div class="card__body">
                        <div class="card__title">
                            <p> ${movies.title}</p>
                        </div>
                        <div class="card__date">${movies.release_date}</div>
                        <button>dewd</button>
                    </div>
                </div>
        </div>
        `;
  });
  authorMenuNode.innerHTML = result;
}

function displayTv(data) {
  let result = "";
  const authorMenuNode = document.querySelector(".get__tv");
  data.forEach((tv) => {
    result += `
         <div class="col">
                <div class="card" data-id="${tv.id}">
                    <div class="card__img">
                        <img width="100%" src="/src/assets/img/logo.png" alt="img">
                    </div>
                    <div class="card__body">
                        <div class="card__title">
                            <p> ${tv.name}</p>
                        </div>
                        <div class="card__date">${tv.first_air_date}</div>
                    </div>
                </div>
        </div>
        `;
  });
  authorMenuNode.innerHTML = result;
}

function displayToday(data) {
  let result = "";
  const authorMenuNode = document.querySelector(".get__movie_day");
  data.forEach((day) => {
    result += `
         <div class="col">
                <div class="card" data-id="${day.id}">
                    <div class="card__img">
                        <img width="100%" src="${day.backdrop_path}" alt="img">
                    </div>
                    <div class="card__body">
                        <div class="card__title">
                            <p> ${day.original_title}</p>
                        </div>
                        <div class="card__date">${day.release_date}</div>
                    </div>
                </div>
        </div>
        `;
  });
  authorMenuNode.innerHTML = result;
}
function displayWeek(data) {
  let result = "";
  const authorMenuNode = document.querySelector(".get__tv_week");
  data.forEach((week) => {
    result += `
         <div class="col">
                <div class="card" data-id="${week.id}">
                    <div class="card__img">
                        <img width="100%" src="${week.backdrop_path}" alt="img">
                    </div>
                    <div class="card__body">
                        <div class="card__title">
                            <p> ${week.name}</p>
                        </div>
                        <div class="card__date">${week.release_date}</div>
                    </div>
                </div>
        </div>
        `;
  });
  authorMenuNode.innerHTML = result;
}

const fetchById = async (url, id) => {
  try {
    const response = await fetch(`${url}/${id}`);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Iltimos to'g'ri manzilga so'rov jo'nating!");
      } else if (response.status === 403) {
        // displaying "hm, what about no?"
      } else {
        // displaying "dunno what happened \_(ツ)_/¯"
      }
      throw new Error(response);
    }
    let data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

function initializeMoveEvent() {
  const moviesssMenuNode = document.querySelector(".get__movie");
  
  moviesssMenuNode.addEventListener("click", (event) => {
    const id = event.target.closest(".card")?.dataset?.id;
    console.log(id, "bosilgan");
    if (!id) return;
    history.pushState({ id }, null, "/movie.html");
    location.reload();
  });
}



