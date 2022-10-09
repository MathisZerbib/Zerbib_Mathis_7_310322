const searchBar = document.querySelector("#main-search");

searchBar.addEventListener("keyup" , (e) => {
const searchedLetters = e.target.value;
const cards = document.querySelectorAll(".card");

filterElements(searchedLetters, getAllRecipes());
});