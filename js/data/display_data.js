let textEmpty = document.querySelector('.title-empty');

// Hydrate DOM
const displayData = (recipes) => {
    cleanDOM()
    matchArray = recipes
    matchArray = [...new Set(matchArray)]

    if (matchArray.lenght <= 0 || matchArray == undefined) {
        displayError();
    } else {
        hideError();
    }
    recipes.map((recipe) => {
        const recipeModel = recipeFactory(recipe);
        const getRecipeCardDOM = recipeModel.buildRecipeCardDOM();
        recipesSection.appendChild(getRecipeCardDOM);
    });

    setCurrentRecipes(recipes)
};
