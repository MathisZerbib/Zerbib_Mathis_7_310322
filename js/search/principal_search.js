function filterElements(search, data) {
  let resultRecipe = data
  if (search.length < 2 && tagArrayToSearch.length == 0) {
    hideError();
    displayData(data);
    return data
}
    if (search.length > 2) {
      filteredRecipes = resultRecipe.filter(
        (recipe) =>
          cleanString(recipe.name).includes(cleanString(search)) ||
          recipe.ingredients.find((ing) =>
            cleanString(ing.ingredient).includes(cleanString(search))
          ) ||
          cleanString(recipe.description).includes(cleanString(search))
      );
  }
  
  // Si il n'y a pas de recettes filtrés 
  if (filteredRecipes && filteredRecipes.length == 0) {
    // Afficher l'erreur si la longueur du mot entré est plus grand que 2
    if(search.length >= 3){
      console.log("display error");
      showError();
    }else {
      hideError();
      // displayData(getAllRecipes())
      console.log('yooooo hide error display all')
    }

  } 
  
  else {
    if(search.length > 2){
      console.log("display error");
      showError();

    }else {
      hideError();
      console.log('yooooo hide error display all')
    }
    displayData(filteredRecipes);
    hideError();
    return filteredRecipes
  }


  
}
