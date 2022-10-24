import "./style";
// import moment from "moment";
// import "./config";
// import "@morbidick/bootstrap";
import movieType from "../constants";
import { fetchpeople } from "../api";

document.addEventListener("DOMContentLoaded", (e) => {
  const page = location.pathname;
  console.log(page);
  if (page === "people.html" || page === "/") {
    // .then(data => console.log(data));
  }
  if (page === "/peopeldetailes.html" || page === "/peopledetailes") {
    fetchpeopleDetails(history.state.id).then((data) => {
      console.log(data.data);
      peopleDetails(data.data);
    });
  }
});                                              

function people(data) {
  let result = "";
  const displayfilm = document.querySelector(".people .container");
  data.forEach((people) => {
    result += ` 
        <div class="people_card" data-id="${people.id}">
        <img src="${people.poster_path}" alt="film Image" />
        <h4>${people.name}</h4>
        <h5 class="people_title"></h5>
      </div>
        `;
  });
  displayfilm.innerHTML = result;
}



fetch(
  "https://api.themoviedb.org/3/person/popular?api_key=ea4c56d50a17f4673be5e41527930787&language=en-US&page=1"
)
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
    people(data.results);
    // peopleTitle(data.results.known_for);
    // console.log(peopleTitle(data));
});

const getPoupuler = document.querySelector("1");
const getPeople = document.querySelector("2");

const showTv = document.querySelector("3");
const showMovie = document.querySelector("4");

showTv.addEventListener("clic", () => {
  getRequest("")
  .then((data) => {
    console.log(data.results);
    displayTV(data.results)
  })
  .then((data) => {
    history.go(1);
    getMovie.classList.add("hide");
    getTV.classList.remove("hide");
  })
})


showMovie.addEventListener("clic", (e) => {
  e.preventDefault();
  getRequest("")
  .then((data) => {
    console.log(data.results);
    displayTV(data.results)
  })
  .then((data) => {
    history.go(1);
    getMovie.classList.add("hide");
    getTV.classList.remove("hide");
  })
})




// async function fetchpeople(url) {
//   try {
//     const response = await fetch(url, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     let data = await response.json();
//     if (!response.ok) {
//       if (response.status === 404) {
//         throw {msg: "itltimos to'g'ri manzilga so'rov jo'nating!"};
//       }else if (response.status === 403){
//         // displaying "hm, what about no?"
//       }else if (response.status === 401){
//         throw {msg: "ro'yaxtdan o'tgansiz"};
//       }else{
//          // displaying "dunno what happened \_(ツ)_/¯"
//       }
//       if (data?.msg.startsWitch("E11000")) {
//         throw{
//           msg: "siz allaqachon  ro'yhatdan o'tgansiz",
//           path: "/sign-in.html"
//         };
//       }
//       throw data;
//     }
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }


// function peopleTitle(data) {
//   let result = "";
//   const displayfilm = document.querySelector(".people_title ");
//   data.forEach((title) => {
//     result += ` 
//         <h5>${title.title}</h5>
//         `;
//   });
//   displayfilm.innerHTML = result;
// }
