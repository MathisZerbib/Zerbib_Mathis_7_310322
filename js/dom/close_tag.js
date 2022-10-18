// Close, remove tag from DOM

const closeTag = (tag, color, text) => {
    const searchBar = document.querySelector("#main-search");

    // add removed tag to respective Tag Array

    tag.remove()
    tag.classList.remove('tag-posted');

    tag = ''
    switch (color) {
        case "bg-primary":
          tagArrayToSearch.ingredient = tagArrayToSearch.ingredient.filter(el=> el !== text)
          currentIngredients.push(text)
            
          break;
  
        case "bg-green":
          tagArrayToSearch.appliance = tagArrayToSearch.appliance.filter(el=> el !== text)
          currentAppliances.push(text)
          break;
  
        case "bg-red":
          tagArrayToSearch.ustensil = tagArrayToSearch.ustensil.filter(el=> el !== text)

        currentUstensils.push(text)
          break;
        default:
          break;
      }


        reloadSearch(searchBar.value, tagArrayToSearch, filteredRecipes)

}

