const searchInput = document.getElementById("main-search");
// searchInput.focus()
// Defines Array
let ingredientsArray = [];
let appliancesArray = [];
let ustensilsArray = [];
let recipeMatchArray = [];
let searchTagListFromInput = [];
let tagArea = document.querySelector('#tags');
let textDefault = document.querySelector('.title-default-search');
let isMatching;
textEmpty.style.opacity = '0';
textEmpty.style.display = 'none';




// TODO: Faire deux array RECIPES, une array originale (mother),et une arrayDOM pour l'affichage du DOM 

// Loop all recipes

// [User]filtre (ArrayDOM) => {Courgette Carotte view des elements correspondants 
//if(no filter)
//return array mother
//  si modifications => return ArrayDOM
//
//}

recipes.forEach(recipe => {
    recipe.ingredients.forEach((currentIngredient) => {
        ingredientsArray.push(currentIngredient.ingredient);
    });
    appliancesArray.push(recipe.appliance);
    recipe.ustensils.forEach((currentUstensil) => {
        ustensilsArray.push(currentUstensil);
    });
});


//Create sub search button & list
let subsearchNames = ['Ingrédient', 'Appareils', 'Ustensiles'];
createFiltersDOM(subsearchNames);





// Add Tag to Tag Array Search
let tagArrayToSearch = []


// const MultiMatch = (ingredientMatchArray, ustensMatchArray, applianceMatchArray) => {

//     console.log('Ingredient Match Array', ingredientMatchArray, 'ustensMatchArray', ustensMatchArray, 'applianceMatchArray', applianceMatchArray)
//         // const results = arrayOne.filter(({ ingredient: ig1 }) => !arrayTwo.some(({ ingredient: ig2 }) => ig2 === ig1));

//     console.log(results);
//     // let multiMatch = recipeMatchArray.filter(recipe => recipe.description.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
//     // if (descriptionMatch.length !== 0) {
//     //     descriptionMatch.forEach(el => {
//     //         recipeMatchArray.push(el)
//     //     })
// }