// Mettre le code JavaScript lié à la page recipe.html
var obj;
var recipes = [];
const recipesSection = document.getElementById("recipes");

// Get recipes

async function getRecipes() {
    await fetch('./assets/data/recipes.json')
        .then(res => res.json())
        .then(data => {
            obj = data
            data.forEach(element => { recipes.push(element) })
        })
        .catch(error => console.log(error));
    // console.log('Recipes: ', recipes);

    // Penser à remplacer par les données récupérées dans le json
    // et bien retourner le tableau recipes seulement une fois
    return ({
        recipes: [...recipes]
    })
}

// async function filterByPopularity(arrayMedias) {
//     let sortedArray = await arrayMedias.sort((a, b) => parseFloat(b.likes) - parseFloat(a.likes));
//     // console.log('sorted Array', sortedArray)
//     arrayMedias = sortedArray
//     displayData(arrayMedias);

// }


// async function filterByTitle(arrayMedias) {
//     let sortedArray = await arrayMedias.sort(function(a, b) {
//             if (a.title < b.title) { return -1; }
//             if (a.title > b.title) { return 1; }
//         })
//         // console.log('sorted Array', sortedArray)
//     arrayMedias = sortedArray
//     displayData(arrayMedias);
// }



// Filters onChange getFilterValue

// filters.addEventListener('change', () => {
//     let optionSelectedIndex = document.querySelector('option:checked').index
//     getFilterValue(optionSelectedIndex);
// })


// async function getFilterValue(index) {
//     switch (index) {
//         case 1:
//             cleanData()
//             filterByPopularity(recipes)
//             break;
//         case 2:
//             cleanData()
//             filterByDate(recipes)
//                 // expected output: "Mangoes and papayas are $2.79 a pound."
//             break;
//         case 3:
//             cleanData()
//             filterByTitle(recipes)
//         default:
//             console.log(`Sorry, we are out of ${index}.`);
//     }
//     console.log('index option ', index)

// }

// Clean DOM
// async function cleanData() {
//     const gallerySection = document.querySelector(".imageWallContainer");
//     while (gallerySection.lastChild) {
//         gallerySection.removeChild(gallerySection.lastChild);
//     }
// }


// Hydrate DOM
async function displayData(recipes) {

    recipes.forEach((recipe) => {
        const recipeModel = recipeFactory(recipe);
        const getRecipeCardDOM = recipeModel.getRecipeCardDOM();

        recipesSection.appendChild(getRecipeCardDOM);
    });


};

// First init
async function init() {
    const { recipes } = await getRecipes();
    // Récupère les datas des photographes
    displayData(recipes)

};

init();