// Hydrate DOM
const displayData = (recipes) => {
  cleanDOM();

  if (recipes.length !== 0) {
    hideError();
  } else {
    showError();
  }

  recipes = [...new Set(recipes)]

  recipes.map((recipe) => {
    const recipeModel = recipeFactory(recipe);
    const getRecipeCardDOM = recipeModel.buildRecipeCardDOM();
    recipesSection.appendChild(getRecipeCardDOM);
  });

  setfilteredRecipes(recipes);
};
