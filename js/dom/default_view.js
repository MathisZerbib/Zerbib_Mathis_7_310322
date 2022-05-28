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
        displayData(recipes)
        recipesDOM = recipes
        console.log('AFTER Clean recipesDOM:', recipesDOM)

    }
    // const tagFilters = document.querySelector('#tags-container');
    // const searchInput = document.getElementById("main-search");
    // if (searchInput.innerText == '' && tagFilters.innerText == '') {
    //     recipesDOM = recipes

//     cleanDOM()
//     displayData(recipes)

// }