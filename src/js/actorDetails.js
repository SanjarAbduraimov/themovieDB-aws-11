// import "./style";
// import { fetchActors } from "../api";
// import movieType from "..constants";
// fetchActors(movieType.topRated)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

//   document.addEventListener("DOMContentLoaded", (e) => {
//     const page = location.pathname;
//     console.log(page);
//     if (page === "/index.html" || page === "/") {
//       fetchActors(fetchActors.topRated)
//       .then((data) => {
//         console.log(data);
//         displayActors(data.data.results)
//          initalizeActorsEvent();
//       })
//       .catch((err) => console.log(err));
//     }
//     if (page === "/actorDetails.html" || page === "/actorDetails.html") {
    
//     }
//   });
  

  // function displayDetails(data) {
  //   const details = (data = data.details);
  //   console.log(data);
  //   let result = "";
  //   const detailsMenuNode = document.querySelector(".actors__details");
  // }
  // fetchActorsDetails(history.state.id)
  // .then((data) => {
  //  console.log(data.data);
  //  displayActorsDetails(data.data);
  // })
  

  function displayActor(data) {
    let result = "";
    const displayfilm = document.querySelector(".actor .container");
    data.forEach((actor) => {
      result += ` 
      <div class="row">
      <div class="col">

          <img src="${actor}" alt="">
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