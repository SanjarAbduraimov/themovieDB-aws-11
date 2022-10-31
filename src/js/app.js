import "./style";
import Type, { status, credits } from "../constants";
import  { genresType } from "../constants";
import { fetch } from "../api";
import { fetchDetails, fetchMovieCredits , fetchMovieImg, fetchSearchKeywords} from "../api";
import { disMoviesDetails, displayCast, displayCrew } from "./movie";
import { fetchMovieSearch, fetchSearchSort, fetchSearchGenres } from "../api";
import { displayPeople } from "./people";
import { displayMovies, initializeMoveEvent } from "./home";
import { eventSearchMoviess, addActivityItem, addActivity } from "../js/searchess";
import { displayActor, initializeActorEvent, displayCastActor, displayCrewActor } from "./actor";


document.addEventListener("DOMContentLoaded", (e) => {
  const page = location.pathname;
  if (page === "/index.html" || page === "/") {
    fetch(Type.movie, status.popular)
      .then(({ data }) => {
        displayMovies(data.results);
        initializeMoveEvent();
        // cardClick();
      })
      .catch((err) => console.log(err));
  }
  if (page === "/movie.html" || page === "/movie") {
    fetchDetails(Type.movie, history.state.id).then((data) => {
      disMoviesDetails(data.data);
    });
    fetchMovieImg(Type.movie,  history.state.id).then((data)=>{
      console.log(data);
    })
    fetchMovieCredits(Type.movie, history.state.id, credits.movieCredits).then(
      (data) => {
        console.log(data);
        displayCast(data.data.cast);
        displayCrew(data.data.crew);
      }
    );
  }
  if (page === "/people.html" || page === "/people") {
    fetch(Type.person, status.popular).then(({ data }) => {
      displayPeople(data?.results);
      initializeActorEvent();
    });
  }
  if (page === "/search.html" || page === "/search") {
    // const query = new URLSearchParams(location.search);
    fetchMovieSearch(history.state.title).then(({ data }) => {
      displayMovies(data.results);
    });
  }
  if (page === "/actor.html" || page === "/actor") {
    fetchDetails(Type.person, history.state.id).then((data) => {
      displayActor(data.data);
      console.log(data.data);
    });
    fetchMovieCredits(Type.person, history.state.id, credits.movieCredits) .then((data) => {
      console.log(data);
      displayCastActor(data.data.cast);
      displayCrewActor(data.data.crew);
    })

  }
  
  if (page === "/searchess.html" || page === "/searchess") {
    

    const activities = document.getElementById("activitySelector");

    activities.addEventListener("click", function() {
    let options = activities.querySelectorAll("option");
    let count = options.length;
    if(typeof(count) === "undefined" || count < 1)
    {
      addActivityItem();
    }
    });

    activities.addEventListener("change", function() {
    if(activities.value == "popularityAsc"){
        addActivityItem();
    }
    else if(activities.value == "popularitydesc"){
      addActivityItem();
    }
    else if(activities.value == "release_datedesc"){
      addActivityItem();
    }
    else if(activities.value == "release_date.asc"){
      addActivityItem();
    }
    else if(activities.value == "revenue.desc"){
      addActivityItem();
    }
    else if(activities.value == "revenue.asc"){
      addActivityItem();
    }
    else if(activities.value == "original_title.desc"){
      addActivityItem();
    }
    else if(activities.value == "original_title.asc"){
      addActivityItem();
    }
    else{
      console.log("tugadi");
    }
    });
    
    //   let genres = document.querySelector(".selec");
    //   let adventure = document.querySelector(".adventure");
    //   let animation = document.querySelector(".Animation");
    //   let comedy = document.querySelector(".Comedy");
    //   let crime = document.querySelector(".Crime");
    //   let cocumentary = document.querySelector(".Documentary");
    //   const btnfiltr = document.querySelector(".searchsort");
    //   const activitis = document.getElementById("with_genres");

    //   let opti = activitis.querySelectorAll("label");
    //   let coun = opti.length;
    //   if(typeof(coun) === "undefined" || coun < 1)
    // {
    //   addActivityItem();
    // };
    // activitis.addEventListener("change", function() {
    //   if (activitis.tagName == "Action") {
    //     console.log("ssa");
    //     btnfiltr.addEventListener("click", (e)=>{
    //     fetchSearchGenres(Type.movie, genresType.action).then((data)=>{
    //       console.log(data);
    //   })
    //   })
      
    // }
    // });
   
  
    // eventSearchMoviess();
    //   fetchSearchKeywords(Type.movie, history.state.title).then((data)=>{
    //     console.log(data);
    //     console.log(history.state.title);
    //   });
    
     
    
   

    
    
   
  }
});
