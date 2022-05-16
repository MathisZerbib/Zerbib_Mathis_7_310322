// Hydrate DOM
const displayData = (recipes) => {
    matchArray = recipes
    recipes.forEach((recipe) => {
        const recipeModel = recipeFactory(recipe);
        const getRecipeCardDOM = recipeModel.buildRecipeCardDOM();

        recipesSection.appendChild(getRecipeCardDOM);
    });
};