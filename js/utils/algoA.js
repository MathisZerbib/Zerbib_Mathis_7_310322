import { recipes } from './recipes.js'

const searchInput = document.getElementById("main-search");

// Hydrate DOM + calc Likes
async function displayData(recipes) {

    recipes.forEach((recipe) => {
        const recipeModel = recipeFactory(recipe);
        const getRecipeCardDOM = recipeModel.getRecipeCardDOM();

        recipesSection.appendChild(getRecipeCardDOM);
    });


};

async function cleanData() {
    const recipesSection = document.querySelector("#recipes");
    while (recipesSection.lastChild) {
        recipesSection.removeChild(recipesSection.lastChild);
    }
}

/* Event Key principal Search*/
searchInput.addEventListener('keyup', function() {
    const input = searchInput.value;
    let recipeMatchArray = [];
    if (input.length >= 3) {
        recipes.forEach(recipe => {

            let ustensMatch = recipe.ustensils.filter(ustensil => ustensil.includes(input.toLocaleLowerCase()))
            let recipeMatch = recipes.filter(recipe => recipe.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()))

            if (ustensMatch.length !== 0) {
                // console.log('LENGHT USTENSMATCH', ustensMatch, "ID:", recipe.id)
                recipeMatchArray.push(recipe)
            }

            if (recipe.appliance.toLocaleLowerCase().includes(input.toLocaleLowerCase())) {
                let applianceMatch = recipe.appliance;
                recipeMatchArray.push(recipe)
                    // console.log('Appliance match', applianceMatch)
            }

            if (recipeMatch.length !== 0) {
                recipeMatch.forEach(el => {
                    recipeMatchArray.push(el)
                        // console.log('RecipeMatch Pushed', el)
                })
            }

        })
        recipeMatchArray = [...new Set(recipeMatchArray)];
        // console.log("Array ID:", recipeMatchArray)

        cleanData();
        displayData(recipeMatchArray);
    } else {
        cleanData();
    }
});
//ARRAYS
// Defines Array
let ingredientsArray = [];
let appliancesArray = [];
let ustensilsArray = [];

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



// console.log('Uniques Ingredients', uniqueIngredients);
// console.log("uniqueAppliances", uniqueAppliances);
// console.log("uniqueUstensils", uniqueUstensils);

//Create sub search button & list
let subsearchNames = ['Ingrédient', 'Appareils', 'Ustensiles'];


function createFiltersDOM(filters) {
    let filtersbox = document.createElement('div');
    let filterButton = document.createElement('input');
    let filterUl = document.createElement('ul');
    // <span class="tag btn btn-primary btn-sm mb-1">Coco <i class="far fa-times-circle"></i></span>

    filters.forEach(el => {
        filtersbox.setAttribute('id', 'sub-search__' + el);
        filtersbox.setAttribute('data-name', el);
        filtersbox.classList.add('sub-search__bloc', 'col-12', 'col-lg-3', 'mb-3', 'dropdown', 'd-flex', 'flex-column', 'justify-content-between', 'align-items-center');
        filterButton.className = 'col btn btn-lg text-black text-left font-weight-bold border-0'
        filterButton.setAttribute('value', el);
        filterButton.setAttribute('type', 'button');

        filterUl.className = 'sub-search__taglist w-100 mw-100 dropdown-menu text-white border-0 rounded-bottom';
        filterUl.setAttribute('role', 'listbox');
        filterUl.setAttribute('id', el + '__taglist');
        uniqueUstensils.forEach(el => {
            filterUl.innerHTML += `<li><span class="tag btn btn-primary btn-sm mb-1">${el}<i class="far fa-times-circle"></i><span></li>`
        })


        document.getElementById('sub-searchs').append(filtersbox)
        filtersbox.appendChild(filterButton)
        filtersbox.appendChild(filterUl)


    })


}


createFiltersDOM(subsearchNames)