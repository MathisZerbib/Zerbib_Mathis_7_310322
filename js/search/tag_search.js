const tagArraySearch = (tagArrayToSearch) => {
    console.log("Tag to search:", tagArrayToSearch)
    cleanDOM();

    // Default View if no filters
    if (tagArrayToSearch.length == 0 && searchInput.value == '') {

        console.log("All Empty fields")

        defaultView();
    }

    if (tagArrayToSearch.length >= 2) {
        multiTagSearch(tagArrayToSearch)
    }

    if (searchInput.length > 0 && tagArrayToSearch.length > 0) {
        // tagArrayToSearch = tagArrayToSearch.push(searchInput.value)
        // multiTagSearch(tagArrayToSearch)
        console.log('Input search + Match at least One Tag')
            // recipesDOM.forEach(recipe => {
            //     tagArrayToSearch.forEach(tag => {

        //         tag = tag.toString();
        //         ingredientMatch(recipe, tag, recipeMatchArray);
        //         ustensileMatch(recipe, tag, recipeMatchArray);
        //         applianceMatch(recipe, tag, recipeMatchArray);
        //     })
        // })
    }
    // recipeMatchArray = [...new Set(recipeMatchArray)];
    // console.log("Array ID:", recipeMatchArray)

    // cleanDOM();
    // cleanData();
    if (tagArrayToSearch.length == 1 && searchInput.value.length >= 1) {
        tagArrayToSearch.push(searchInput.value)
        console.log('tagArrayToSearch lenght is 1', searchInput.value, tagArrayToSearch)
        multiTagSearch(tagArrayToSearch)

        // displayData(recipeMatchArray);
    }

    if (tagArrayToSearch.length == 0) {
        console.log('default View');
        defaultView();


    }
}