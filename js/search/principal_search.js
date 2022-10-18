function filterElements(search, data) {
  let resultRecipe = data;
  if (search.length < 2 && tagArrayToSearch.length == 0) {
    // hideError();
    displayData(data);
    return data;
  }
  if (search.length > 2) {
    // filteredRecipes = resultRecipe.filter(
    //   (recipe) =>
    //     cleanString(recipe.name).includes(cleanString(search)) ||
    //     recipe.ingredients.find((ing) =>
    //       cleanString(ing.ingredient).includes(cleanString(search))
    //     ) ||
    //     cleanString(recipe.description).includes(cleanString(search))
    // );
let results = [];
    resultRecipe.forEach((recipe) => {
      console.log(cleanString(recipe.name).includes(cleanString(search)),"====================recipe=========================", recipe);
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
