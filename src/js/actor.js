import configs from "../configs";
export function displayActor(actor = []) {
    let result = ""; 
    const actorDetails = document.querySelector(".actor");
    const { profile_path, name, biography} = actor;
    const img = profile_path
      ? configs.baseImgURL + profile_path
      : configs.defaultImg + "500";
    configs.baseImgURL;
      result += `
      <div class="row">
      <div class="col">
          <div class="actor__img">
          <img scr="${img}">
          </div>
      </div>
      <div class="col">
          <div class="actor__title">
              <h1>${name} </h1> 
              <div class="actor__details">
                  <p class="day__details"></p>
                  <p class="actor__title_details"></p>
                  <p class="hour__formovie"></p>
              </div>
          </div>
          <div class="row">
              <div class="col"></div>
              <div class="col">User Score</div>
              <div class="col">==</div>
              <div class="col">love</div>
              <div class="col">page</div>
              <div class="col">sevimli</div>
              <div class="col">pley triller</div>
          </div>
  
          <div class="actor__text">
              <p class="tagline">
                  
              </p>
              <p class="overvave">Overvave</p>
              <p class="details__description">
                 ${biography}
              </p>
              <div class="creaters">
                  <p class="creter">Creator</p>
                  <p class="creter">Creator</p>
                  <p class="creter">Creator</p>
              </div>
          </div>
  
      </div>
       </div>
          `;
    actorDetails.innerHTML = result;
}
export function initializeActorEvent() {
    const moviesssMenuNode = document.querySelector(".people .container");
    moviesssMenuNode.addEventListener("click", (event) => {
      const id = event.target.closest(".people_card")?.dataset?.id;
      console.log(id, "bosilgan");
      if (!id) return;
      history.pushState({ id }, null, "/actor.html");
      location.reload();
    });
  }
  