// Hydrate DOM
const displayData = (recipes) => {
    matchArray = recipes
    if (matchArray.lenght <= 0 || matchArray == undefined) {
        displayError();
    } else {
        hideError();
    }
    recipes.forEach((recipe) => {
        const recipeModel = recipeFactory(recipe);
        const getRecipeCardDOM = recipeModel.buildRecipeCardDOM();

        recipesSection.appendChild(getRecipeCardDOM);
    });
};