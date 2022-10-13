// Close, remove tag from DOM

const closeTag = (tag, color, text) => {
    const searchBar = document.querySelector("#main-search");

    // add removed tag to respective Tag Array

    tag.remove()
    console.log(tag,  '=======================')
    tag.classList.remove('tag-posted');
    console.log('tagArrayToSearch', tagArrayToSearch.length)
    tag = ''
    switch (color) {
        case "bg-primary":
          // console.log('bg-primary')
          tagArrayToSearch.ingredient = tagArrayToSearch.ingredient.filter(el=> el !== text)
            
          break;
  
        case "bg-green":
          // console.log('bg-green')
          tagArrayToSearch.appliance = tagArrayToSearch.appliance.filter(el=> el !== text)
  
          break;
  
        case "bg-red":
          // console.log('bg-red')          
          tagArrayToSearch.ustensil = tagArrayToSearch.ustensil.filter(el=> el !== text)

  
          break;
        default:
          break;
      }


        reloadSearch(searchBar.value, tagArrayToSearch, filteredRecipes)

}

const reloadSearch = (search, tagArrayToSearch) => {

    let resultFromFirstSearch = filterElements(search, getAllRecipes()) 
    console.log(resultFromFirstSearch, "resultFromFirstSearch")
    if(search.length > 2 && (tagArrayToSearch.ingredient.length || tagArrayToSearch.appliance.length || tagArrayToSearch.ustensil.length) ){
        tagArraySearch(tagArrayToSearch, resultFromFirstSearch);
    }else if(!filteredRecipes.length && (tagArrayToSearch.ingredient.length || tagArrayToSearch.appliance.length || tagArrayToSearch.ustensil.length))
    tagArraySearch(tagArrayToSearch, getAllRecipes())
}