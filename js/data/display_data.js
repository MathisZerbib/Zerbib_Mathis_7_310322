let textEmpty = document.querySelector('.title-empty');

// Hydrate DOM
const displayData = (recipes) => {
    cleanDOM()
    recipes.map((recipe) => {
        const recipeModel = recipeFactory(recipe);
        const getRecipeCardDOM = recipeModel.buildRecipeCardDOM();
        recipesSection.appendChild(getRecipeCardDOM);
    });

    setCurrentRecipes(recipes)
};
