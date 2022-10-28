import configs from "../configs";

export function displayPeople(peoples = []) {
  const peopleWrapper = document.querySelector(".people ");
  let result = "";
  peoples.forEach((people) => {
    const { id, profile_path, name, known_for_department} = people;
    const img = profile_path
      ? configs.baseImgURL + profile_path
      : configs.defaultImg + "500";
    configs.baseImgURL;
    result += ` 
       

       <div class="card people__card">
      <div class="card__head">
        <div class="card__img_top  " id="people__card__top"  data-id="${id}">
          <img width="100%" src="${img}" alt="Movies__Pecture">
        </div>
        
      </div>
        
      <div class="card__body">
        <div class="card__title">
          <p> ${name}</p>
        </div>
        <div class="card__date">
          <p>${known_for_department}</p>
        </div>
        </div>
        <div class="card__content">John Doe</div>
      </div>
      
        `;
  });
  peopleWrapper.innerHTML = result;
}
