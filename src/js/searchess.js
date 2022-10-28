import { fetch } from "../api";
import Type, { status, credits } from "../constants";

export function searchMoviess(e) {
    e.preventDefault();
    const action = document.querySelector(".action");
    const adventure = document.querySelector(".adventure");
    const animation = document.querySelector(".animation");
    const btn = document.querySelector("button");
    
        if (action && adventure){
            let i;
             action.addEventListener("click", ()=>{
                console.log("click");
    
                btn.onclick = (e) => {
                    fetch(Type.movie, status.popular)
                    .then(({ data }) => {
                      console.log(data);
                      // cardClick();
                    })
                    .catch((err) => console.log(err));
                }
              
            })
             adventure.addEventListener("click", ()=>{
                console.log("clicked");
    
                btn.onclick = (e) => {
                    fetch(Type.person, status.popular)
                    .then(({ data }) => {
                      console.log(data ,"sa");
                      // cardClick();
                    })
                    .catch((err) => console.log(err));
                }
              
            })
        }
            
            
        
    
   
}