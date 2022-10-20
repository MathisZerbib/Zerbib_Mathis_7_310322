function filterElements(search, data) {
  let resultRecipe = data
  if (search.length < 2 && tagArrayToSearch.length == 0) {
    // hideError();
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
    displayData(filteredRecipes);
    // hideError();
    return filteredRecipes
  }


  
// }
