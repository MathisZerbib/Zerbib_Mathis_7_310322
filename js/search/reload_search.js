const reloadSearch = (search, tagArrayToSearch) => {
let resultFromFirstSearch;
    if (search.length > 2) {
        resultFromFirstSearch = filterElements(search, getAllRecipes()) 

    }
    if(search.length > 2 && (tagArrayToSearch.ingredient.length || tagArrayToSearch.appliance.length || tagArrayToSearch.ustensil.length) ){
        tagArraySearch(tagArrayToSearch, resultFromFirstSearch);
    }
    
    if(!filteredRecipes.length && (tagArrayToSearch.ingredient.length >0 || tagArrayToSearch.appliance.length>0 || tagArrayToSearch.ustensil.length>0) || search.length < 2 && (tagArrayToSearch.ingredient.length || tagArrayToSearch.appliance.length || tagArrayToSearch.ustensil.length)) {
        tagArraySearch(tagArrayToSearch, getAllRecipes())
    }
    if (true) {
        console.log('reloading time')
    }

    if ( search.length == 0 && tagArrayToSearch.ingredient.length == 0 && tagArrayToSearch.appliance.length == 0 && tagArrayToSearch.ustensil.length == 0) {
        displayData(getAllRecipes())
    }
}