function filterElements(search, data) {
  if (!search || !search.length) {
    filteredRecipes = [...data];
  } else {
    if (search.length > 2) {
      filteredRecipes = data.filter(
        (recipe) =>
          cleanString(recipe.name).includes(cleanString(search)) ||
          recipe.ingredients.find((ing) =>
            cleanString(ing.ingredient).includes(cleanString(search))
          ) ||
          cleanString(recipe.description).includes(cleanString(search))
      );
    }
  }

  if (!filteredRecipes.length && search.length >= 3) {
    console.log("coucou error");
    displayError();
  } else {
    hideError();
  }

  if (!filteredRecipes.length && search.length <= 2) {
    hideError();
  }

  displayData(filteredRecipes);
}
