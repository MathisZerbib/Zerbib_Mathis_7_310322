import loadJSON from "../utils/jsonUtility.js";

const searchInput = document.getElementById("main-search");

searchInput.addEventListener('keyup', function() {
    const input = searchInput.value;
    const result = recipes.filter(item => item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
    console.log('Your input', input)
    console.log('Your result: ', result);
});
//ARRAYS
// Defines Array
let ingredientsArray = [];
let appliancesArray = [];
let ustensilsArray = [];

// loadJSON(function(response) {
//     // Parse JSON string into object
//     var actual_JSON = JSON.parse(response);
//     console.log(actual_JSON)
// });

async function buildUniqueArray() {

    recipes.forEach(recipe => {
        recipe.ingredients.forEach((currentIngredient) => {
            ingredientsArray.push(currentIngredient.ingredient);
        });
        appliancesArray.push(recipe.appliance);
        recipe.ustensils.forEach((currentUstensil) => {
            ustensilsArray.push(currentUstensil);
        });
    });
    // Filter duplicate tags
    const uniqueIngredients = [...new Set(ingredientsArray)];
    const uniqueAppliances = [...new Set(appliancesArray)];
    const uniqueUstensils = [...new Set(ustensilsArray)];



    console.log('Uniques Ingredients', uniqueIngredients);
    console.log("uniqueAppliances", uniqueAppliances);
    console.log("uniqueUstensils", uniqueUstensils);
}


buildUniqueArray();