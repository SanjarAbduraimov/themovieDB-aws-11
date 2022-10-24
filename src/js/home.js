export function displayMovies(data) {
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
                              <p> ${movies.title}</p>
                          </div>
                          <div class="card__date">${movies.release_date}</div>
                          <button>dewd</button>
                      </div>
                  </div>
          </div>
          `;
  });
  authorMenuNode.innerHTML = result;
}
export function initializeMoveEvent() {
  const moviesssMenuNode = document.querySelector(".get__movie");
  const searchForm = document.querySelector(".inner_search_form");
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = searchForm.title.value;
    history.pushState({ title }, null, "/search.html");
    location.reload();
  });
  moviesssMenuNode.addEventListener("click", (event) => {
    const id = event.target.closest(".card")?.dataset?.id;
    console.log(id, "bosilgan");
    if (!id) return;
    history.pushState({ id }, null, "/movie.html");
    location.reload();
  });
}
