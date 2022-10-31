import { fetch } from "../api";
import Type, { status, credits } from "../constants";
import { fetchSearchSort } from "../api";
import { sortBy } from "../constants";
import { displayMovies } from "./home";


export function addActivityItem() {
    const activities = document.getElementById("activitySelector");
    console.log("salom");
    const btnsort = document.querySelector(".searchsort");
    btnsort.addEventListener("click", (e)=>{
     e.preventDefault();
     if(activities.value == "popularityAsc"){
       console.log("mana");
       fetchSearchSort(Type.movie, sortBy.TitleZA).then((data)=>{
         console.log(data);
         displayMovies(data.data.results)
       })
     }
     if(activities.value == "popularitydesc"){
       console.log("mana");
       fetchSearchSort(Type.movie, sortBy.popularityDescending).then((data)=>{
         console.log(data);
         displayMovies(data.data.results)
       })
     }
     if(activities.value == "release_datedesc"){
       console.log("mana");
       fetchSearchSort(Type.movie, sortBy.releaseDateDescending).then((data)=>{
         console.log(data);
         displayMovies(data.data.results)
       })
     }
     if(activities.value == "release_date.asc"){
       console.log("mana");
       fetchSearchSort(Type.movie, sortBy.releaseDateAscending).then((data)=>{
         console.log(data);
         displayMovies(data.data.results)
       })
     }
     if(activities.value == "revenue.desc"){
       console.log("mana");
       fetchSearchSort(Type.movie, sortBy.releaseDateDescending).then((data)=>{
         console.log(data);
         displayMovies(data.data.results)
       })
     }
     if(activities.value == "revenue.asc"){
       console.log("mana");
       fetchSearchSort(Type.movie, sortBy.releaseDateAscending).then((data)=>{
         console.log(data);
         displayMovies(data.data.results)
       })
     }
     if(activities.value == "original_title.desc"){
       console.log("mana");
       fetchSearchSort(Type.movie, sortBy.TitleZA).then((data)=>{
         console.log(data);
         displayMovies(data.data.results)
       })
     }
     if(activities.value == "original_title.asc"){
       console.log("mana");
       fetchSearchSort(Type.movie, sortBy.titleAZ).then((data)=>{
         console.log(data);
         displayMovies(data.data.results)
       })
     }

     

     
    })
    
     
    
}

export function eventSearchMoviess(e) {
  const searchKeyword = document.querySelector(".inner_search_formKeyword");
    searchKeyword.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = searchKeyword.title.value;
      history.pushState( { title });
    })
   
}