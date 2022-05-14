const tagArraySearch = (tagArrayToSearch) => {
    console.log("Tag to search:", tagArrayToSearch)
    cleanDOM();
    // lenght for search
    if (tagArrayToSearch.length == 0 && searchInput.value == '') {
        recipes.forEach(recipe => {


            tagArrayToSearch.forEach(tag => {

                tag = tag.toString()
                ingredientMatch(recipe, tag, recipeMatchArray)
                ustensileMatch(recipe, tag, recipeMatchArray)
                applianceMatch(recipe, tag, recipeMatchArray)
            })
        })
    }

    if (tagArrayToSearch.length >= 2) {
        multiTagSearch(tagArrayToSearch)
    } else {
        recipesDOM.forEach(recipe => {


            tagArrayToSearch.forEach(tag => {

                tag = tag.toString()
                ingredientMatch(recipe, tag, recipeMatchArray)
                ustensileMatch(recipe, tag, recipeMatchArray)
                applianceMatch(recipe, tag, recipeMatchArray)
            })
        })
    }
    recipeMatchArray = [...new Set(recipeMatchArray)];
    // console.log("Array ID:", recipeMatchArray)

    // cleanDOM();
    // cleanData();
    if (tagArrayToSearch.length == 1) {
        displayData(recipeMatchArray);

    }

    if (tagArrayToSearch.length == 0) {
        console.log('default View')
        defaultView()

    }
}