

// Display default Data
const defaultView = () => {
    console.log('//////////////////////VIEW/////////////////////////')
    displayData(getAllRecipes())
}
const tagFilters = document.querySelector('#tags-container');
const searchInputSelector = document.getElementById("main-search");
