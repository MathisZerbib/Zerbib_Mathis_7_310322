import { recipes } from './recipes.js'

const searchInput = document.getElementById("main-search");
// searchInput.focus()
// Defines Array
let ingredientsArray = [];
let appliancesArray = [];
let ustensilsArray = [];
let recipeMatchArray = [];
let searchTagListFromInput = [];
let tagArea = document.querySelector('#tags');
let textWhenEmpty = document.querySelector('.title-default-search');


// Loop all recipes
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
let uniqueIngredients = [...new Set(ingredientsArray)];
let uniqueAppliances = [...new Set(appliancesArray)];
let uniqueUstensils = [...new Set(ustensilsArray)];

// Hydrate DOM
async function displayData(recipes) {
    if (recipes.length !== 0) {
        textWhenEmpty.style.opacity = '0';
    }
    recipes.forEach((recipe) => {
        const recipeModel = recipeFactory(recipe);
        const getRecipeCardDOM = recipeModel.getRecipeCardDOM();

        recipesSection.appendChild(getRecipeCardDOM);
    });
};

// Display default Data
function defaultView() {
    displayData(recipes)
}

//Clean DOM
function cleanDOM() {

    const recipesSection = document.querySelector("#recipes");
    while (recipesSection.lastChild) {
        recipesSection.removeChild(recipesSection.lastChild);
    }

    if (recipesSection.lastChild == null) {
        textWhenEmpty.style.opacity = "1";

    }

}

// Clean Recipes 
function cleanData() {
    recipeMatchArray = [];

}

// Clean Tag List
function cleanTagListDOM(id) {
    const tagListSection = document.querySelector(`#${id}__taglist`);
    while (tagListSection.lastChild) {
        tagListSection.removeChild(tagListSection.lastChild);
    }
}


// Ustensils match

const ustensMatch = (recipe, input, recipeMatchArray) => {
    let ustensMatch = recipe.ustensils.filter(ustensil => ustensil.includes(input.toLocaleLowerCase()))

    if (ustensMatch.length !== 0) {
        recipeMatchArray.push(recipe)
            // console.log(recipe, 'Ustens MATCH')

    }
}

// Appliance Match 
const applianceMatch = (recipe, input, recipeMatchArray) => {
    if (recipe.appliance.toLocaleLowerCase().includes(input.toLocaleLowerCase())) {
        recipeMatchArray.push(recipe)
            // console.log(recipe, 'Appliance MATCH')
    }
}

// Title match
const recipeMatch = (input, recipeMatchArray) => {
    let recipeMatch = recipes.filter(recipe => recipe.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
    if (recipeMatch.length !== 0) {
        recipeMatch.forEach(el => {
            recipeMatchArray.push(el)
        })
    }
}

// Ingredient match
const ingredientMatch = (recipe, input, recipeMatchArray) => {
    let ingredientMatch = recipe.ingredients.filter(el =>
        el.ingredient.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
    if (ingredientMatch.length !== 0) {
        // console.log(recipe, 'INGREDIENT MATCH')
        // console.log('LENGHT ingredientMatch', ingredientMatch, "ID:", recipe.id)
        recipeMatchArray.push(recipe)
    }
}

// Description match
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
        defaultView();

    }
}


function tagListSearch(e, ul, filterArrow, inputField) {
    if (e.keyCode == 8 && searchTagListFromInput !== []) {
        searchTagListFromInput.pop()
    }
    if (e.keyCode >= 65 && e.keyCode <= 90)
        var buffer;
    buffer = inputField.value
    searchTagListFromInput.push(buffer)
        // console.log(searchTagListFromInput);
    var final_words = searchTagListFromInput[searchTagListFromInput.length - 1];
    // console.log(final_words)
    let newArrayIngredients = [];
    let newArrayUstensils = [];
    let newArrayAppareils = [];
    let parentInput = ul.closest('div').id
    let idDiv = parentInput.replace('sub-search__', '');



    if (buffer.length >= 3) {
        switch (idDiv) {
            case "Ingrédient":
                final_words.split(' ').forEach(el => {
                        let searchTagIngredient = uniqueIngredients.filter(ingredient => ingredient.toLocaleLowerCase().includes(el.toLocaleLowerCase()))


                        newArrayIngredients = [...new Set(searchTagIngredient)];
                        cleanTagListDOM(idDiv)
                        newArrayIngredients = [...new Set(newArrayIngredients.map(element => {
                            return element.toLowerCase();
                        }))]

                        // console.log(newArrayIngredients, 'newArrayIngredients')


                    })
                    // console.log("New Array from ingredient:", newArrayIngredients)

                rebuildTagArrayDOM(inputField, newArrayIngredients, idDiv)

                break;
            case "Appareils":
                final_words.split(' ').forEach(el => {
                    let searchTagAppareils = uniqueAppliances.filter(appliance => appliance.toLocaleLowerCase().includes(el.toLocaleLowerCase()))
                    newArrayAppareils = [...new Set(searchTagAppareils)];
                    cleanTagListDOM(idDiv)

                    newArrayAppareils = [...new Set(newArrayAppareils.map(element => {
                        return element.toLowerCase();
                    }))]
                })

                rebuildTagArrayDOM(inputField, newArrayAppareils, idDiv)

                // console.log("New Array from appareils :", newArrayAppareils)
                break;
            case "Ustensiles":
                final_words.split(' ').forEach(el => {
                    let searchTagUstensils = uniqueUstensils.filter(ustensil => ustensil.toLocaleLowerCase().includes(el.toLocaleLowerCase()))
                    newArrayUstensils = [...new Set(searchTagUstensils)];
                    // console.log("Search trought ingredients", searchTagIngredient)
                    cleanTagListDOM(idDiv)
                    newArrayUstensils = [...new Set(newArrayUstensils.map(element => {
                        return element.toLowerCase();
                    }))]

                })
                rebuildTagArrayDOM(inputField, newArrayUstensils, idDiv)

                // console.log("New Array from ustensils:", newArrayUstensils)
                break;

        }
        // console.log(buffer)
        if (buffer == "Ingrédient" || buffer == 'Appareils' || buffer == 'Ustensiles' && searchTagListFromInput == []) {
            // toggleList(ul, filterArrow, false);

        } else {
            toggleList(ul, filterArrow, true);

        }

    } else {
        // toggleList(ul, filterArrow, false)

    }
}

const rebuildTagArrayDOM = (inputField, tags, id) => {
    for (let i = 0; i < ulLength(tags); i++) {
        let liTag = document.createElement('li');
        let cleanTagName = ''
        liTag.setAttribute('aria-selected', 'false');
        liTag.setAttribute('role', 'option');
        liTag.innerHTML = tags[i];
        cleanTagName = tags[i].replace(/\s/g, '_')
        liTag.id = cleanTagName


        switch (id) {
            case 'Ingrédient':
                liTag.classList.add('dropdown-item', 'bg-primary');
                liTag.addEventListener('click', () => {

                    // TODO REMOVE TAG FROM ARRAY
                    uniqueIngredients.splice(uniqueIngredients.findIndex(e => e.toLocaleLowerCase().includes(liTag.innerText)), 1);

                    uniqueIngredients = [...new Set(uniqueIngredients.map(element => {
                        return element.toLowerCase();
                    }))]

                    console.log('UNIQUE INGREDIENT', uniqueIngredients)
                    liTag.setAttribute('aria-selected', 'true');

                    uniqueIngredients = uniqueIngredients.filter(e => e !== tags[i])
                    console.log('Tags ', tags)
                    createTag(liTag, 'bg-primary')
                    inputField.innerText = ''
                })
                break;
            case 'Appareils':
                liTag.classList.add('dropdown-item', 'bg-green');
                liTag.addEventListener('click', () => {
                    liTag.setAttribute('aria-selected', 'true');
                    createTag(liTag, 'bg-green')
                    posted = true
                    inputField.value = ''

                })


                break;
            case 'Ustensiles':
                liTag.classList.add('dropdown-item', 'bg-red');
                liTag.addEventListener('click', () => {
                    liTag.setAttribute('aria-selected', 'true');
                    createTag(liTag, 'bg-red')
                    inputField.value = ''
                })

                break;

        }


        document.getElementById(id + '__taglist').append(liTag);
    };
}


/* Event Key principal Search Algo A */
searchInput.addEventListener('keyup', searchPrincipalInput);



// console.log('Uniques Ingredients', uniqueIngredients);
// console.log("uniqueAppliances", uniqueAppliances);
// console.log("uniqueUstensils", uniqueUstensils);

//Create sub search button & list
let subsearchNames = ['Ingrédient', 'Appareils', 'Ustensiles'];


// Remove open class and reset state
const removeOpen = (el, filtersbox, inputField, currentSubSearchButton) => {
    if (inputField.value.length >= 3) {
        currentSubSearchButton.classList.remove('open');
        filtersbox.classList.remove('col-lg-5');
        filtersbox.classList.add('col-lg-3');
    } else {
        currentSubSearchButton.classList.remove('open');
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
        const currentSubSearchButton = filtersbox.querySelector('.sub-search__button');
        let inputField = filtersbox.querySelector('.sub-search__button input');
        let ul = filtersbox.querySelector('.sub-search__taglist')

        inputField.addEventListener('keyup', (e) => tagListSearch(e, ul, filterArrow, inputField));


        // StackoverFlow
        // function some_func(otherFunc, ev) {
        //     // magic happens
        // }
        // someObj.addEventListener("click", some_func.bind(null, some_other_func), false);


        currentSubSearchButton.addEventListener('click', () => {

            let filtersboxIngredient = document.querySelector('#sub-search__Ingrédient');

            let ulIngredient = filtersboxIngredient.querySelector('.sub-search__taglist')


            let parentInputIngredient = ulIngredient.closest('div').id
            let idingredient = parentInputIngredient.replace('sub-search__', '');

            rebuildTagArrayDOM(inputField, uniqueIngredients, idingredient);


            let filtersboxUstensil = document.querySelector('#sub-search__Ustensiles');

            let ulUstensil = filtersboxUstensil.querySelector('.sub-search__taglist')


            let parentInputUstensil = ulUstensil.closest('div').id
            let idUstensil = parentInputUstensil.replace('sub-search__', '');




            rebuildTagArrayDOM(inputField, uniqueUstensils, idUstensil);



            let filtersboxAppliance = document.querySelector('#sub-search__Appareils');

            let ulAppliance = filtersboxAppliance.querySelector('.sub-search__taglist')


            let parentInputAppliance = ulAppliance.closest('div').id
            let idAppliance = parentInputAppliance.replace('sub-search__', '');




            rebuildTagArrayDOM(inputField, uniqueAppliances, idAppliance);

            toggleList(ul, filterArrow, true);

            if (currentSubSearchButton.classList.contains('open')) {
                // show mode => remove open class and reset state
                ul.classList.remove('d-flex')

                removeOpen(el, filtersbox, inputField, currentSubSearchButton);
            } else {
                // closed mode => add open class and transform input type in search
                filtersList.forEach(element => {
                    let filtersbox = document.getElementById('sub-search__' + element);
                    const currentSubSearchButton = filtersbox.querySelector('.sub-search__button');
                    const inputField = filtersbox.querySelector('.sub-search__button input');
                    let ul = filtersbox.querySelector('.sub-search__taglist')
                    ul.classList.remove('d-flex')


                    removeOpen(element, filtersbox, inputField, currentSubSearchButton);
                });
                currentSubSearchButton.classList.add('open');
                inputField.removeAttribute('value');
                inputField.setAttribute('type', 'search');
                inputField.setAttribute('placeholder', `Rechercher un ${el}`);
                inputField.focus();
                filtersbox.classList.remove('col-lg-3');
                filtersbox.classList.add('col-lg-5');

                toggleList(ul, filterArrow, true)
            };

        });
    });
}


createFiltersDOM(subsearchNames);


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
            const currentSubSearchButton = filtersbox.querySelector('.sub-search__button');
            const inputField = filtersbox.querySelector('.sub-search__button input');
            let ul = filtersbox.querySelector('.sub-search__taglist')
            ul.classList.remove('d-flex')
            removeOpen(element, filtersbox, inputField, currentSubSearchButton);
        });
    };
});



// Create a tag in advancedSearch field
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
        addTagToTagArray(tag)
        tagArraySearch()


    }
    // Close, remove tag from DOM

const closeTag = (tag) => {
    tag.remove()
    console.log(tagArrayToSearch = tagArrayToSearch.filter(e => e !== tag.innerText));
    tagArraySearch()
}


function removeTagFromList(tag, tagListSection) {
    tagListSection = tagListSection.filter(e => e !== tag.innerText);


}

// Add Tag to Tag Array Search
let tagArrayToSearch = []

const addTagToTagArray = (tag) => {
    tagArrayToSearch.push(tag.innerText)
}

const tagArraySearch = () => {
    console.log("Tag to search:", tagArrayToSearch)
    cleanDOM();
    cleanData();
    recipes.forEach(recipe => {
        uniqueIngredients
        if (tagArrayToSearch.length >= 2) {
            multiTagSearch(recipesMatchArray, tagArrayToSearch)
        } else {
            tagArrayToSearch.forEach(tag => {

                    tag = tag.toString()
                        // console.log('loop search tag: ', tag)

                    ingredientMatch(recipe, tag, recipeMatchArray)
                    ustensMatch(recipe, tag, recipeMatchArray)
                    applianceMatch(recipe, tag, recipeMatchArray)
                })
                // console.log("Array ID:", recipeMatchArray)
        }
    })
    recipeMatchArray = [...new Set(recipeMatchArray)];
    // console.log("Array ID:", recipeMatchArray)

    // cleanDOM();
    // cleanData();
    displayData(recipeMatchArray);
}

const multiTagSearch = (recipeMatchArray, tagArrayToSearch) => {
    let newRecipeArray = [];
    tagArrayToSearch.forEach(element => {
        try {
            ingredientMatch(recipe, element, recipeMatchArray)
            ustensMatch(recipe, element, recipeMatchArray)
            applianceMatch(recipe, element, recipeMatchArray)

        } catch (error) {

        }

    });

    // console.log('tagArrayToSearch:', tagArrayToSearch)


}


// Add tags in susbsearch (max 30 items)
// Define a maximum of 30 items
const ulLength = (array) => {
    return (array.length > 30 ? 30 : array.length);
}