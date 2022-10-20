const tagArraySearch = (searchedTags, data) => {
  let tempArray = data;

  // Define var to check if current item is Included in a recipe
  let isIngIncluded;
  let isAppIncluded;
  let isUstensIncluded;

  isIngIncluded = tempArray.filter((recipe) =>
    searchedTags.ingredient.every((tagIng) =>
      recipe.ingredients.some(
        (recipeIng) => cleanString(tagIng) === cleanString(recipeIng.ingredient)
      )
    )
  );

  isAppIncluded = tempArray.filter((recipe) =>
    searchedTags.appliance.every(
      (tagApp) => cleanString(recipe.appliance) === cleanString(tagApp)
    )
  );

  isUstensIncluded = tempArray.filter((recipe) =>
    searchedTags.ustensil.every((tagUst) =>
      recipe.ustensils.some(
        (ustensil) => cleanString(ustensil) === cleanString(tagUst)
      )
    )
  );

  filteredRecipes = isIngIncluded
    .filter((value) => isAppIncluded.includes(value))
    .filter((value) => isUstensIncluded.includes(value));

  displayData(filteredRecipes);
  if (filteredRecipes.length == 0) {
    showError();
  }
  return filteredRecipes;
};
