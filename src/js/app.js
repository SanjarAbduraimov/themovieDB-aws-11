import "./style";
import movieType from "../constants";
import { fetchMovie } from "../api";
import { fetchMovieDetails } from "../api";
import { disMoviesDetails } from "../js/moviedetails";
import { fetchMovieSearch } from "../api";

document.addEventListener("DOMContentLoaded", (e) => {
  const page = location.pathname;
  console.log(page);
  if (page === "/index.html" ||  page === "/") {
    fetchMovie(movieType.popular)
    .then((data) => {
      console.log(data);
      displayMovies(data.data.results)
      initializeMoveEvent();
    })
    .catch((err) => console.log(err));
  
  }
  if (page === "/moveidetailes.html" || page === "/moveidetailes") {

    fetchMovieDetails(history.state.id)
    .then((data) => {
      console.log(data.data);
      disMoviesDetails(data.data);
      
      
      

    })
  }
  if (page === "/search.html" || page === "/search") {
    const query = new URLSearchParams(location.search);
    fetchMovieSearch()
   
  }

})



// searchBooksRequest(title).then((data) => {
//   console.log(data, "data from search");
//   displayBoo(data.payload);
// });
// const title = query.get("title");




function displayMovies(data) {
    let result = "";
    const authorMenuNode = document.querySelector(".get__movie");
    data.forEach((movies) => {
       result += `
           <div class="col details__cols">
                  <div class="card" data-id="${movies.id}">
                      <div class="card__img">
                          <img src="../assets/img/moviess.jpg" alt="img">
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
function initializeMoveEvent() {
  const moviesssMenuNode = document.querySelector(".get__movie");
  
  moviesssMenuNode.addEventListener("click", (event) => {
    const id = event.target.closest(".card")?.dataset?.id;
    console.log(id, "bosilgan");
    if (!id) return;
    history.pushState({ id }, null, "/moveidetailes.html");
    location.reload();
  });
}