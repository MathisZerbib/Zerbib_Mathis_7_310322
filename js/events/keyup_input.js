const searchBar = document.querySelector("#main-search");


searchBar.addEventListener("keyup" , (e) => {
const searchedLetters = e.target.value;
isFirstSearch = true;   
if (filteredRecipes.length || tagArrayToSearch.length >0) {
    isFirstSearch = false;
}
    // if its not the first time search

if(isFirstSearch == false && searchedLetters.length > 2 ) {
    let resultFromFirstSearch = filterElements(searchedLetters, getAllRecipes()) 
    tagArraySearch(tagArrayToSearch, resultFromFirstSearch)
}

    // if first time search and input 3 characters

if(isFirstSearch==true && searchedLetters.length >= 3){
    filterElements(searchedLetters, getAllRecipes());
}

    // if its filter time and tag array is filled
if((tagArrayToSearch.ingredient.length || tagArrayToSearch.appliance.length|| tagArrayToSearch.ustensil.length )  && isFirstSearch ==true && searchedLetters.length >2) {
    let resultFromFirstSearch = filterElements(searchedLetters, getAllRecipes()) 
    tagArraySearch(tagArrayToSearch, resultFromFirstSearch)
}

if ((tagArrayToSearch.ingredient.length || tagArrayToSearch.appliance.length|| tagArrayToSearch.ustensil.length ) && !filteredRecipes.length) {
    tagArraySearch(tagArrayToSearch, getAllRecipes())
}


if ((tagArrayToSearch.ingredient.length || tagArrayToSearch.appliance.length|| tagArrayToSearch.ustensil.length )&& searchedLetters.length < 2 )  {
    tagArraySearch(tagArrayToSearch, getAllRecipes())
}

// if ((!tagArrayToSearch.ingredient.length || !tagArrayToSearch.appliance.length || !tagArrayToSearch.ustensil.length) || search.length < 2 && (!tagArrayToSearch.ingredient.length || !tagArrayToSearch.appliance.length || !tagArrayToSearch.ustensil.length)) {
//     displayData(getAllRecipes())
// }
});

searchBar.addEventListener('input', (e)=> {
    const searchedLetters = e.target.value;
    if (searchedLetters.length <= 2 && tagArrayToSearch.ingredient.length == 0 && tagArrayToSearch.appliance.length == 0 && tagArrayToSearch.ustensil.length == 0) {
        hideError()
        displayData(getAllRecipes())
    }
});