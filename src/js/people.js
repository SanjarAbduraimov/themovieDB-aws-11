import configs from "../configs";

export function displayPeople(peoples = []) {
  const peopleWrapper = document.querySelector(".people .container");
  let result = "";
  peoples.forEach((people) => {
    const { id, profile_path, name } = people;
    const img = profile_path
      ? configs.baseImgURL + profile_path
      : configs.defaultImg + "500";
    configs.baseImgURL;
    result += ` 
        <div class="people_card" data-id="${id}">
        <img src="${img}" alt="film Image" />
        <h4>${name}</h4>
        <h5 class="people_title"></h5>
      </div>
        `;
  });
  peopleWrapper.innerHTML = result;
}
