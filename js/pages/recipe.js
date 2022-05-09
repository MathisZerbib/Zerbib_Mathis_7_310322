// Mettre le code JavaScript lié à la page recipe.html
var obj;
let motherArrayRecipe = [];
const recipesSection = document.getElementById("recipes");

// Get recipes

async function getRecipesFromJson() {
    await fetch('./assets/data/recipes.json')
        .then(res => res.json())
        .then(data => {
            obj = data
            data.forEach(element => { motherArrayRecipe.push(element) })
        })
        .catch(error => console.log(error));
    // console.log('Recipes: ', recipes);

    // Penser à remplacer par les données récupérées dans le json
    // et bien retourner le tableau recipes seulement une fois
    return ({
        motherArrayRecipe: [...motherArrayRecipe]
    })
}


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

// First init
async function init() {
    const { motherArrayRecipe } = await getRecipesFromJson();
    // Récupère les datas des photographes
    displayData(motherArrayRecipe)

};

init();