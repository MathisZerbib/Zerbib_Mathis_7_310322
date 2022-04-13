import { recipes } from './recipes.js'

const searchInput = document.getElementById("main-search");
//ARRAYS
// Defines Array
let ingredientsArray = [];
let appliancesArray = [];
let ustensilsArray = [];
let recipeMatchArray = [];
let searchTagList = [];
let tagArea = document.querySelector('#tags');

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

// Hydrate DOM + calc Likes
async function displayData(recipes) {

    recipes.forEach((recipe) => {
        const recipeModel = recipeFactory(recipe);
        const getRecipeCardDOM = recipeModel.getRecipeCardDOM();

        recipesSection.appendChild(getRecipeCardDOM);
    });


};

async function cleanDOM() {
    const recipesSection = document.querySelector("#recipes");
    while (recipesSection.lastChild) {
        recipesSection.removeChild(recipesSection.lastChild);
    }
}

function cleanData() {
    recipeMatchArray = [];
}

function cleanTagList(id) {
    const tagListSection = document.querySelector(`#${id}__taglist`);
    while (tagListSection.lastChild) {
        tagListSection.removeChild(tagListSection.lastChild);
    }
}

const ustensMatch = (recipe, input, recipeMatchArray) => {
    let ustensMatch = recipe.ustensils.filter(ustensil => ustensil.includes(input.toLocaleLowerCase()))

    if (ustensMatch.length !== 0) {
        recipeMatchArray.push(recipe)
    }
}


const applianceMatch = (recipe, input, recipeMatchArray) => {
    if (recipe.appliance.toLocaleLowerCase().includes(input.toLocaleLowerCase())) {
        recipeMatchArray.push(recipe)
    }
}

const recipeMatch = (input, recipeMatchArray) => {
    let recipeMatch = recipes.filter(recipe => recipe.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
    if (recipeMatch.length !== 0) {
        recipeMatch.forEach(el => {
            recipeMatchArray.push(el)
        })
    }
}

const ingredientMatch = (recipe, input, recipeMatchArray) => {
    let ingredientMatch = recipe.ingredients.filter(el =>
        el.ingredient.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
    if (ingredientMatch.length !== 0) {
        // console.log(recipe, 'INGREDIENT MATCH')
        // console.log('LENGHT ingredientMatch', ingredientMatch, "ID:", recipe.id)
        recipeMatchArray.push(recipe)
    }
}

const tagIngredientMatch = (recipe, input, tagArray) => {
    let tagIngredientMatch = recipe.ingredients.filter(el =>
        el.ingredient.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
    if (tagIngredientMatch.length !== 0) {
        // console.log(recipe, 'INGREDIENT MATCH')
        // console.log('LENGHT ingredientMatch', ingredientMatch, "ID:", recipe.id)
        tagArray.push(tag)
    }
}


const descriptionMatch = (input, recipeMatchArray) => {
    let descriptionMatch = recipes.filter(recipe => recipe.description.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
    if (descriptionMatch.length !== 0) {
        descriptionMatch.forEach(el => {
            recipeMatchArray.push(el)
        })
    }
}

function searchPrincipalInput() {
    const input = searchInput.value;
    let recipeMatchArray = [];

    if (input.length >= 3) {
        recipes.forEach(recipe => {
            recipeMatch(input, recipeMatchArray);
            ingredientMatch(recipe, input, recipeMatchArray);
            descriptionMatch(input, recipeMatchArray);

        })
        recipeMatchArray = [...new Set(recipeMatchArray)];
        // console.log("Array ID:", recipeMatchArray)

        cleanDOM();
        displayData(recipeMatchArray);
    } else {
        cleanDOM();
        cleanData();
    }
};


function searchTagInput(e, ul, filterArrow, inputField) {
    if (e.keyCode == 8 && searchTagList !== []) {
        searchTagList.pop()
    }
    if (e.keyCode >= 65 && e.keyCode <= 90)
        var buffer;
    buffer = inputField.value
    searchTagList.push(buffer)
    console.log(searchTagList);
    var final_words = searchTagList[searchTagList.length - 1];
    console.log(final_words)


    if (searchTagList.length >= 3) {
        let newArrayIngredients = [];
        let newArrayUstensils = [];
        let newArrayAppareils = [];
        let parentInput = ul.closest('div').id
        let idDiv = parentInput.replace('sub-search__', '');
        switch (idDiv) {
            case "Ingrédient":
                final_words.split(' ').forEach(el => {
                    let searchTagIngredient = uniqueIngredients.filter(ingredient => ingredient.toLocaleLowerCase().includes(el.toLocaleLowerCase()))
                    newArrayIngredients = [...new Set(searchTagIngredient)];
                    cleanTagList(idDiv)
                })
                console.log("New Array from ingredient:", newArrayIngredients)

                rebuidTag(newArrayIngredients, idDiv)

                break;
            case "Appareils":
                final_words.split(' ').forEach(el => {
                    let searchTagAppareils = uniqueAppliances.filter(appliance => appliance.toLocaleLowerCase().includes(el.toLocaleLowerCase()))
                    newArrayAppareils = [...new Set(searchTagAppareils)];
                    cleanTagList(idDiv)

                })

                rebuidTag(newArrayAppareils, idDiv)

                console.log("New Array from appareils :", newArrayAppareils)
                break;
            case "Ustensiles":
                final_words.split(' ').forEach(el => {
                    let searchTagUstensils = uniqueUstensils.filter(ustensil => ustensil.toLocaleLowerCase().includes(el.toLocaleLowerCase()))
                    newArrayUstensils = [...new Set(searchTagUstensils)];
                    // console.log("Search trought ingredients", searchTagIngredient)
                    cleanTagList(idDiv)
                })
                rebuidTag(newArrayUstensils, idDiv)

                console.log("New Array from ustensils:", newArrayUstensils)
                break;
        }
        // tagIngredientMatch(recipe, inputField.innerText, searchTagList);
        // let tagsfiltrered = [];
        // for (var i = 0; recipes.length < i; i++)
        //     tagsfiltrered = recipes.filter(recipe => recipe.ingredients[i].toLocaleLowerCase().includes(final_words.toLocaleLowerCase()));
        // console.log('tagsfiltrered by Ingredient', tagsfiltrered);
        toggleList(ul, filterArrow, true);

    } else {
        toggleList(ul, filterArrow, false)

    }
    // const input = searchInput.value;
    // let recipeMatchArray = [];

    // if (input.length >= 3) {
    //     recipes.forEach(recipe => {
    //         recipeMatch(input, recipeMatchArray);
    //         ingredientMatch(recipe, input, recipeMatchArray);
    //         descriptionMatch(input, recipeMatchArray);

    //     })
    //     recipeMatchArray = [...new Set(recipeMatchArray)];
    //     // console.log("Array ID:", recipeMatchArray)

    //     cleanDOM();
    //     displayData(recipeMatchArray);
    // } else {
    //     cleanDOM();
    //     cleanData();
    // }
};


/* Event Key principal Search Algo A */
searchInput.addEventListener('keyup', searchPrincipalInput);



// console.log('Uniques Ingredients', uniqueIngredients);
// console.log("uniqueAppliances", uniqueAppliances);
// console.log("uniqueUstensils", uniqueUstensils);

//Create sub search button & list
let subsearchNames = ['Ingrédient', 'Appareils', 'Ustensiles'];


// Remove open class and reset state
const removeOpen = (el, filtersbox, inputField, currentButton) => {
    if (inputField.value.length >= 3) {
        currentButton.classList.remove('open');
        filtersbox.classList.remove('col-lg-5');
        filtersbox.classList.add('col-lg-3');
    } else {
        currentButton.classList.remove('open');
        inputField.removeAttribute('type');
        inputField.setAttribute('type', 'button');
        inputField.setAttribute('value', el);
        filtersbox.classList.remove('col-lg-5');
        filtersbox.classList.add('col-lg-3');
    }
}

const createFiltersDOM = (filtersList) => {
    // <span class="tag btn btn-primary btn-sm mb-1">Coco <i class="far fa-times-circle"></i></span>

    filtersList.forEach(el => {
        let filtersbox = document.createElement('div');
        let filterDiv = document.createElement('div')
        let filterButton = document.createElement('input');
        let filterUl = document.createElement('ul');
        let filterArrow = document.createElement('i')

        filterDiv.setAttribute('data-bs-toggle', 'dropdown');
        filterDiv.setAttribute('aria-expended', false);
        filterDiv.className = "sub-search__button d-flex w-100 mw-100 col btn btn-lg justify-content-between align-items-center"

        filtersbox.setAttribute('id', 'sub-search__' + el);
        filtersbox.setAttribute('data-name', el);
        filtersbox.classList.add('sub-search__bloc', 'col-12', 'col-lg-3', 'm-2', 'dropdown', 'd-flex', 'flex-column', 'justify-content-between', 'align-items-center');

        filterButton.className = 'col btn btn-lg text-black text-left font-weight-bold border-0 sub-search__button'
        filterButton.setAttribute('value', el);
        filterButton.setAttribute('type', 'button');
        filterButton.autofocus = true;
        filterArrow.className = 'fa-solid fa-angle-down col-1 end-0 text-white';

        filterUl.className = 'sub-search__taglist w-100 mw-100 btn text-white border-0 rounded-bottom flex-wrap dropdown-menu ' + el;
        filterUl.setAttribute('role', 'listbox');
        filterUl.setAttribute('id', el + '__taglist');
        // uniqueUstensils.forEach(el => {
        //     filterUl.innerHTML += `<li><span class="tag btn btn-primary btn-sm mb-1">${el}<i class="far fa-times-circle"></i><span></li>`
        // });


        document.getElementById('sub-searchs').append(filtersbox);
        filtersbox.appendChild(filterDiv);
        filterDiv.appendChild(filterButton);
        filterDiv.appendChild(filterArrow)
        filtersbox.appendChild(filterUl);


        document.getElementById('sub-searchs').append(filtersbox)
            // Show tag list in sub searchs and transform the button into search input field
        const currentButton = filtersbox.querySelector('.sub-search__button');
        let inputField = filtersbox.querySelector('.sub-search__button input');
        let ul = filtersbox.querySelector('.sub-search__taglist')

        inputField.addEventListener('keyup', (e) => searchTagInput(e, ul, filterArrow, inputField));


        currentButton.addEventListener('click', () => {


            if (currentButton.classList.contains('open')) {
                // show mode => remove open class and reset state
                ul.classList.remove('d-flex')

                removeOpen(el, filtersbox, inputField, currentButton);
            } else {
                // closed mode => add open class and transform input type in search
                filtersList.forEach(element => {
                    let filtersbox = document.getElementById('sub-search__' + element);
                    const currentButton = filtersbox.querySelector('.sub-search__button');
                    const inputField = filtersbox.querySelector('.sub-search__button input');
                    let ul = filtersbox.querySelector('.sub-search__taglist')
                    ul.classList.remove('d-flex')


                    removeOpen(element, filtersbox, inputField, currentButton);
                });
                currentButton.classList.add('open');
                inputField.removeAttribute('value');
                inputField.setAttribute('type', 'search');
                inputField.setAttribute('placeholder', `Rechercher un ${el}`);
                inputField.focus();
                filtersbox.classList.remove('col-lg-3');
                filtersbox.classList.add('col-lg-5');

            };

        });
    });
};


createFiltersDOM(subsearchNames)


function toggleList(ul, filterArrow, toggle) {
    if (toggle == true) {
        ul.classList.add('d-flex')
        filterArrow.classList.remove('fa-angle-down')
        filterArrow.classList.add('fa-angle-up')
    } else {
        ul.classList.remove('d-flex')
        filterArrow.classList.remove('fa-angle-up')
        filterArrow.classList.add('fa-angle-down')
        toggle = false;
    }



}
// Remove open when click outside of the button 0
window.addEventListener('click', function(event) {
    const clickOnBloc = event.target.closest('.sub-search__bloc');
    if (!clickOnBloc) {
        subsearchNames.forEach(element => {
            let filtersbox = document.getElementById('sub-search__' + element);
            const currentButton = filtersbox.querySelector('.sub-search__button');
            const inputField = filtersbox.querySelector('.sub-search__button input');
            let ul = filtersbox.querySelector('.sub-search__taglist')
            ul.classList.remove('d-flex')
            removeOpen(element, filtersbox, inputField, currentButton);
        });
    };
});



// Create a tag for advancedSearch
const createTag = (el, color) => {
        let tag = document.createElement('span')
        let tagClose = document.createElement('button')

        tagClose.className = 'far fa-times-circle btn text-white';
        tagClose.setAttribute('role', 'button')

        tag.innerHTML = el.innerHTML;
        tag.className = color + ' tag btn text-white px-2 mx-2  btn-sm mb-1';
        tagArea.appendChild(tag);
        tag.appendChild(tagClose)
        tagClose.addEventListener('click', () => {
            closeTag(tag)
        })
        tagToSearch(tag.innerText)
    }
    // Close, remove tag from DOM

const closeTag = (tag) => {
    tag.remove()
}


// SearchByTag

const tagToSearch = (tag) => {

    //     let tagArray = [];
    //     let tagSelector = document.querySelectorAll('#tags span');
    //     if (tag !== undefined) {
    //         tagSelector.forEach(tag => {
    //             tagArray.push(tag.innerText)

    //         })
    //         recipes.forEach(recipe => {
    //             console.log('Tag Array', tagArray)
    // tagArray.forEach(tag => {
    //     if (tagArray.length >= 2) {
    //         if (ustensMatch(recipe, tag, recipeMatchArray) !== undefined) {
    //             ustensMatch(recipe, tag, recipeMatchArray)
    //         } else if (applianceMatch(recipe, tag, recipeMatchArray) !== undefined) {
    //             applianceMatch(recipe, tag, recipeMatchArray)

    //         } else if (ingredientMatch(recipe, tag, recipeMatchArray) !== undefined) {
    //             ingredientMatch(recipe, tag, recipeMatchArray)
    //         } else {
    //             recipeMatchArray = []
    //         }
    //     } else {
    //         applianceMatch(recipe, tag, recipeMatchArray)
    //         ingredientMatch(recipe, tag, recipeMatchArray)
    //         ustensMatch(recipe, tag, recipeMatchArray)
    //     }
    // })
    //             console.log(tag)


    //         })
    //         recipeMatchArray = [...new Set(recipeMatchArray)];
    //         // console.log("Array ID:", recipeMatchArray)
    //         cleanDOM();
    //         displayData(recipeMatchArray);

    //     } else {
    //         cleanDOM();
    //         cleanData();
    //
    console.log(tag);
}

const affineSearch = (ustensMatch, applianceMatch, ingredientMatch) => {


}

const rebuidTag = (tags, id) => {
    for (let i = 0; i < ulLength(tags); i++) {
        let ingTag = document.createElement('li');
        let posted = false;
        ingTag.setAttribute('aria-selected', 'false');
        ingTag.setAttribute('role', 'option');
        ingTag.innerHTML = tags[i];


        switch (id) {
            case 'Ingrédient':
                ingTag.classList.add('dropdown-item', 'bg-primary');
                ingTag.addEventListener('click', () => {

                    if (posted == false) {
                        createTag(ingTag, 'bg-primary')
                        posted = true
                    } else {
                        console.log('alreaddy posted    ')
                    }
                })
                break;
            case 'Appareils':
                ingTag.classList.add('dropdown-item', 'bg-green');
                ingTag.addEventListener('click', () => {

                    if (posted == false) {
                        createTag(ingTag, 'bg-green')
                        posted = true
                    } else {
                        console.log('alreaddy posted    ')
                    }
                })


                break;
            case 'Ustensiles':
                ingTag.classList.add('dropdown-item', 'bg-red');
                ingTag.addEventListener('click', () => {

                    if (posted == false) {
                        createTag(ingTag, 'bg-red')
                        posted = true
                    } else {
                        console.log('alreaddy posted    ')
                    }
                })

                break;

        }


        document.getElementById(id + '__taglist').append(ingTag);
    };
}

// Add tags in susbsearch (max 30 items)
// Define a maximum of 30 items
const ulLength = (array) => {
        return (array.length > 30 ? 30 : array.length);
    }
    // Create li for each tag and add it in there respective ul
    // for (let i = 0; i < ulLength(uniqueIngredients); i++) {
    //     let ingTag = document.createElement('li');
    //     let posted = false;
    //     ingTag.classList.add('dropdown-item', 'bg-primary');
    //     ingTag.setAttribute('aria-selected', 'false');
    //     ingTag.setAttribute('role', 'option');
    //     ingTag.innerHTML = uniqueIngredients[i];
    //     ingTag.addEventListener('click', () => {

//         if (posted == false) {
//             createTag(ingTag, 'bg-primary')
//             posted = true
//         } else {
//             console.log('alreaddy posted    ')
//         }
//     })
//     document.getElementById('Ingrédient__taglist').append(ingTag);
// };
// for (let i = 0; i < ulLength(uniqueAppliances); i++) {
//     let aplTag = document.createElement('li');
//     aplTag.classList.add('dropdown-item', 'bg-green');
//     aplTag.setAttribute('aria-selected', 'false');
//     aplTag.setAttribute('role', 'option');
//     aplTag.innerHTML = uniqueAppliances[i];
//     aplTag.addEventListener('click', () => {
//         createTag(aplTag, 'bg-green')
//     })
//     document.getElementById('Appareils__taglist').append(aplTag);
// };
// for (let i = 0; i < ulLength(uniqueUstensils); i++) {
//     let ustTag = document.createElement('li');
//     ustTag.classList.add('dropdown-item', 'bg-red');
//     ustTag.setAttribute('aria-selected', 'false');
//     ustTag.setAttribute('role', 'option');
//     ustTag.innerHTML = uniqueUstensils[i];
//     ustTag.addEventListener('click', () => {
//         createTag(ustTag, 'bg-red')
//     })
//     document.getElementById('Ustensiles__taglist').append(ustTag);
// };