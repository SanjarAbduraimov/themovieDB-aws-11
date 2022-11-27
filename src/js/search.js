export function displaySearchResultsAll(data) {
    let result = "";
    const resultSearch = document.querySelector(".main__search");
    result += `<p class="keyword__count"> ${data} Shows</p>` ;
    resultSearch.innerHTML = result;
}
export function displaySearchResultspage(data) {
    let result = "";
    const resultSearch = document.querySelector(".main__searchpage");
    result += `<p class="keyword__count"> ${data} pages</p>` ;
    resultSearch.innerHTML = result;
}
function search(data) {
    
}
