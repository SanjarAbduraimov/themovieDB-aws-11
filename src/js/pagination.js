import Type, {
  status,
  credits,
  sortBy,
  sortByTv,
  typeAccount,
} from "../constants";
export function initializePagination(data) {
  const { total_pages } = data;
  console.log(data, "data from pagination");
  //   const prev = document.getElementById("prev");
  //   const next = document.getElementById("next");
  const paginateList = document.querySelector(".pagination__list");
  let paginateNumberList = "";
  for (let i = 1; i <= Number(total_pages); i++) {
    paginateNumberList += `<li data-page="${i}"><a onclick="history.pushState({title:'${history.state.title}'}, null, 'search.html?page=${i}');location.reload();">${i}</a></li>`;
  }
  paginateList.innerHTML = paginateNumberList;

}

export function initializePaginationPeople(data) {
  const { total_pages } = data;
  console.log(data, "data from pagination");
  //   const prev = document.getElementById("prev");
  //   const next = document.getElementById("next");
  const paginateList = document.querySelector(".pagination__list");
  let paginateNumberList = "";
  for (let i = 1; i <= Number(total_pages); i++) {
    paginateNumberList += `<li data-page="${i}"><a onclick="history.pushState({page:'${i}'}, null, 'people.html?page=${i}');location.reload();">${i}</a></li>`;
  }
  paginateList.innerHTML = paginateNumberList;
}

export function initializePaginationMovies(data) {
  const { total_pages } = data;
  console.log(data, "data from pagination");
  //   const prev = document.getElementById("prev");
  //   const next = document.getElementById("next");
  const paginateList = document.querySelector(".pagination__list");
  let paginateNumberList = "";
  for (let i = 1; i <= Number(total_pages); i++) {
    paginateNumberList += `<li data-page="${i}"><a onclick="history.pushState({page:'${i}'}, null, 'movies.html?page=${i}');location.reload();">${i}</a></li>`;
  }
  paginateList.innerHTML = paginateNumberList;
}


