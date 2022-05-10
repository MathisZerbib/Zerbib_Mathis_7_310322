// Hydrate DOM
async function displayData(recipes) {
    let textWhenEmpty = document.querySelector('.title-default-search');

    recipes.forEach((recipe) => {
        const recipeModel = recipeFactory(recipe);
        const getRecipeCardDOM = recipeModel.buildRecipeCardDOM();

        recipesSection.appendChild(getRecipeCardDOM);
    });

    textWhenEmpty.style.opacity = "0";

};