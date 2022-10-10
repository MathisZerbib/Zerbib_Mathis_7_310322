const searchBar = document.querySelector("#main-search");

searchBar.addEventListener("keyup" , (e) => {
const searchedLetters = e.target.value;
    filterElements(searchedLetters, filteredRecipes);
});