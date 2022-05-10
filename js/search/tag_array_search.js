const tagArraySearch = () => {
    console.log("Tag to search:", tagArrayToSearch)
    cleanDOM();
    cleanData();
    // lenght for search
    if (tagArrayToSearch.length <= 0) {
        defaultView();
    }
    if (tagArrayToSearch.length >= 2) {
        multiTagSearch(tagArrayToSearch)
    } else {
        recipes.forEach(recipe => {


            tagArrayToSearch.forEach(tag => {

                tag = tag.toString()
                ingredientMatch(recipe, tag, recipeMatchArray)
                ustensMatch(recipe, tag, recipeMatchArray)
                applianceMatch(recipe, tag, recipeMatchArray)
            })
        })
    }
    recipeMatchArray = [...new Set(recipeMatchArray)];
    // console.log("Array ID:", recipeMatchArray)

    // cleanDOM();
    // cleanData();
    displayData(recipeMatchArray);
}