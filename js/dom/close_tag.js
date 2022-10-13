// Close, remove tag from DOM

const closeTag = (tag) => {
    const searchBar = document.querySelector("#main-search");

    // add removed tag to respective Tag Array

    tag.remove()
    console.log(tag.innerText,  '=======================')
    tag.classList.remove('tag-posted');
    tag = '';
    console.log('tagArrayToSearch', tagArrayToSearch.length)
    
        reloadSearch(searchBar.value, tagArrayToSearch, filteredRecipes)

}

const reloadSearch = (search, tagArrayToSearch, filteredRecipes) => {

    if(tagArrayToSearch.length){
        isFirstSearch = false;
    tagArraySearch(tagArrayToSearch, filteredRecipes);
    
    }else if(searchBar.value > 2 && tagArrayToSearch.length) {
        isFirstSearch = true;
        filterElements(search, filteredRecipes);
    }else {
        filterElements(search, getAllRecipes());
    
    }


    // if (search.length)
    // filterElements(search, filteredRecipes);

    // if(tagArrayToSearch.length)
    // tagArraySearch(tagArrayToSearch, filteredRecipes);
}