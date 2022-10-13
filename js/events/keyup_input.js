const searchBar = document.querySelector("#main-search");
let isFirstSearch = false
searchBar.addEventListener("keyup" , (e) => {
const searchedLetters = e.target.value;
if(tagArrayToSearch.length){
    isFirstSearch = false;
    filterElements(searchedLetters, filteredRecipes);

}else if(searchBar.value > 2 && tagArrayToSearch.length) {
    isFirstSearch = true;
    filterElements(searchedLetters, filteredRecipes);
}else {
    filterElements(searchedLetters, getAllRecipes());

}

});