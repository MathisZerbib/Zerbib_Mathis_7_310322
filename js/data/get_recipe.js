// Mettre le code JavaScript lié à la page recipe.html
var obj;
let motherArrayRecipe = [];
const recipesSection = document.getElementById("recipes");

// Get recipes

// const getRecipesFromJson = async() => {
//     await fetch('./assets/data/recipes.json')
//         .then(res => res.json())
//         .then(data => {
//             obj = data
//             data.forEach(element => { motherArrayRecipe.push(element) })
//         })
//         .catch(error => console.log(error));
//     // console.log('Recipes: ', recipes);

//     // Penser à remplacer par les données récupérées dans le json
//     // et bien retourner le tableau recipes seulement une fois
//     return ({
//         motherArrayRecipe: [...motherArrayRecipe]
//     })
// }

// // const getRecipesFromJson = async() => {
// // }



init();