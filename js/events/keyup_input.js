const searchBar = document.querySelector("#main-search");
searchBar.addEventListener("keyup" , (e) => {
const searchedLetters = e.target.value;
if(tagArrayToSearch.length){
    isFirstSearch = false;
}else if(!isFirstSearch) {
    filterElements(searchedLetters, filteredRecipes);
}else{
    filterElements(searchedLetters, getAllRecipes());
}
if(tagArrayToSearch.length && filteredRecipes.length) {
    tagArraySearch(tagArrayToSearch, filteredRecipes)
} else if (tagArrayToSearch.length && !filteredRecipes.length) {
    tagArraySearch(tagArrayToSearch, getAllRecipes())
}
});