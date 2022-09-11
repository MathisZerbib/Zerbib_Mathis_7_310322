// Display default DOM Data
const defaultViewDOM = () => {
    console.log('=====================DOM=========================')
    cleanDOM()
    displayData(recipesDOM)
}


// Display default Data
const defaultView = () => {
    console.log('//////////////////////VIEW/////////////////////////')
    console.log('Before Clean recipesDOM:', recipesDOM)

    cleanDOM()
    displayData(getAllRecipes())
    recipesDOM = getAllRecipes()
    console.log('AFTER Clean recipesDOM:', recipesDOM)

}
const tagFilters = document.querySelector('#tags-container');
const searchInputSelector = document.getElementById("main-search");
// if (searchInput.innerText == '' && tagFilters.innerText == '') {
     recipesDOM = getAllRecipes()

//     cleanDOM()
//     displayData(recipes)

// }