function filterElements(search, data) {
  let resultRecipe = data;
  if (search.length < 2 && tagArrayToSearch.length == 0) {
    // hideError();
    displayData(data);
    return data;
  }
  if (search.length > 2) {
    let results = [];

    for (let i = 0; resultRecipe.length > i; i++) {
      if (
        cleanString(resultRecipe[i].name).includes(cleanString(search)) ||
        cleanString(resultRecipe[i].description).includes(cleanString(search))
      ) {
        results.push(recipe);
      } else {
        for (let y = 0; resultRecipe[i].ingredients.length > y; y++) {
          if (
            cleanString(resultRecipe[i].ingredients[y].ingredient).includes(
              cleanString(search)
            )
          ) {
            results.push(resultRecipe[i]);
            break;
          }
        }
      }

      filteredRecipes = results;
    }

    displayData(filteredRecipes);
    // hideError();
    return filteredRecipes;
  }
}
