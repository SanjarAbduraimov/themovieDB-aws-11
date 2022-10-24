import "./style";
import { fetchActor } from "../api";
import { fetchActors } from "../api";
import movieType from "../constants";


document.addEventListener("DOMContentLoaded", (e) => {
  const page = location.pathname;
  console.log(page);
  if (page === "/index.html" || page === "/") {
    fetchActor(movieType.popular)
    .then((data) => {
      console.log(data);
      displayMovies(data.data.results)
      
      initializeMoveEvent();
    })
    .catch((err) => console.log(err));
  
  }
  if (page === "/actorDetails.html" || page === "actorDetails") {
    fetchActors(history.state.id).then((data)=>{
      console.log(data);
      displayActor(data.data)
    })


  }
  
 

})



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
                              <p> ${movies.name}</p>
                          </div>
                          <div class="card__date">${movies.known_for_department}</div>
                          <button>dewd</button>
                      </div>
                  </div>
          </div>
          `;
    });
    authorMenuNode.innerHTML = result;
}

function displayActor(data) {
  let result = "";
  const displayfilm = document.querySelector(".actor .container");
  data.forEach((actor) => {
    result += ` 
    <div class="row">
    <div class="col">

        <img src="${actor.name}" alt="">
    </div>
    <div class="col">
        <h1>Ana de Armes</h1>
        <h4>Biography</h4>
           <p>
             
           </p>
    </div>
</div>
        `;
  });
  displayfilm.innerHTML = result;
}

function initializeMoveEvent() {
  const moviesssMenuNode = document.querySelector(".get__movie");
  
  moviesssMenuNode.addEventListener("click", (event) => {
    const id = event.target.closest(".card")?.dataset?.id;
    console.log(id, "bosilgan");
    if (!id) return;
    history.pushState({ id }, null, "/actorDetails.html");
    location.reload();
  });
}