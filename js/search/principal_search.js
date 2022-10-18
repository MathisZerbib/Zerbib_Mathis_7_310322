function filterElements(search, data) {
  let resultRecipe = data;
  if (search.length < 2 && tagArrayToSearch.length == 0) {
    // hideError();
    displayData(data);
    return data;
  }
  if (search.length > 2) {
let results = [];
    resultRecipe.forEach((recipe) => {
      if (cleanString(recipe.name).includes(cleanString(search))) {
        results.push(recipe);
      } 
    });
    resultRecipe.forEach((recipe) => {
      recipe.ingredients.forEach((ing) => {
        if (
          cleanString(ing.ingredient).includes(cleanString(search)) ||
          cleanString(recipe.description).includes(cleanString(search))
        ) {
          results.push(recipe);
        }
      });
    });
    filteredRecipes = results
  }



  displayData(filteredRecipes);
  // hideError();
  return filteredRecipes;
}

// }
