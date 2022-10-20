import "./style";
// import moment from "moment";
// import "./config";
import "@morbidick/bootstrap";
document.addEventListener("DOMContentLoaded", (e) => {
    const page = location.pathname;
    console.log(page);
    if (page === "/index.html" || page === "/" ) {
        getRequest("https://api.themoviedb.org/3/movie/popular?api_key=ea4c56d50a17f4673be5e41527930787").then((data)=>{
            console.log(data);
            displayMovies(data.results)
        });
        getRequest("https://api.themoviedb.org/3/tv/popular?api_key=ea4c56d50a17f4673be5e41527930787").then((data)=> {
            console.log(data);
            displayTv(data.results)
        });
    
    }
});






async function getRequest(url) {
    try {
        const response = await fetch(url ,
            {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                }
            }
        );
        let data = await response.json();
        if (!response.ok) {
            if (response.status ===404) {
                throw {
                    msg:"Iltimos togri manzilga sorov junating"
                };

            }
            else if (response.status === 403) {
                throw {
                    msg:"Iltimos togri 403 sorov junating"
                };

            }
            else if (response.status === 401) {
                throw {
                    msg:"Iltimos royxatdan ot"
                }; 
            }
            else {}
            throw data;
        }
        return data;
    } catch (error) {
        throw error;
    }
}

function displayMovies(data) {
    let result = "";
    const authorMenuNode = document.querySelector(".get__movie");
    data.forEach((movies) => {
      result += `
           <div class="col">
                  <div class="card" id="${movies.id}">
                      <div class="card__img">
                          <img width="100%" src="/src/assets/img/logo.png" alt="img">
                      </div>
                      <div class="card__body">
                          <div class="card__title">
                              <p> ${movies.title}</p>
                          </div>
                          <div class="card__date">${movies.release_date}</div>
                      </div>
                  </div>
          </div>
          `;
    });
    authorMenuNode.innerHTML = result;
  }

function displayTv (data) {
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