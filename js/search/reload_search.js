const reloadSearch = (search, tagArrayToSearch) => {
let resultFromFirstSearch;
    if (search.length > 2) {
        resultFromFirstSearch = filterElements(search, getAllRecipes()) 

    }
    if(search.length > 2 && (tagArrayToSearch.ingredient.length || tagArrayToSearch.appliance.length || tagArrayToSearch.ustensil.length) ){
        tagArraySearch(tagArrayToSearch, resultFromFirstSearch);
    }
    
    if(!filteredRecipes.length && (tagArrayToSearch.ingredient.length || tagArrayToSearch.appliance.length || tagArrayToSearch.ustensil.length) || search.length < 2 && (tagArrayToSearch.ingredient.length || tagArrayToSearch.appliance.length || tagArrayToSearch.ustensil.length)) {
        tagArraySearch(tagArrayToSearch, getAllRecipes())
    }
    if (true) {
        console.log('coupocu')
    }

    if ( search.length == 0 && (!tagArrayToSearch.ingredient.length || !tagArrayToSearch.appliance.length || !tagArrayToSearch.ustensil.length)) {
        displayData(getAllRecipes())
    }
}