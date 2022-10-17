fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=ea4c56d50a17f4673be5e41527930787')
    .then((res) => res.json())
    .then((data) => filmNode(data.results));


function filmNode(film) {
    let result = "";
    const displayFilm = document.querySelector(".films .container");
    film.forEach((films) => {
        result += `
        <div class="film">
        <img src="../img/film.jpg" alt="Film Image">
        <h4>${films.title}</h4>
        <h5>${films.release_date}</h5>
      </div>
            `;
    });
    displayFilm.innerHTML = result;
};
