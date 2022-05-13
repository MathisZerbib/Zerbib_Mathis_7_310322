// Hydrate DOM
const displayData = (recipes) => {

    recipes.forEach((recipe) => {
        const recipeModel = recipeFactory(recipe);
        const getRecipeCardDOM = recipeModel.buildRecipeCardDOM();

        recipesSection.appendChild(getRecipeCardDOM);
    });
};