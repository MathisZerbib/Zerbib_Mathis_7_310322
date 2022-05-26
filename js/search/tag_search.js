const tagArraySearch = (tagArrayToSearch) => {
    cleanDOM();

    // Default View if no filters
    if (tagArrayToSearch.length == 0 && searchInput.value == '' && tagArrayToSearch.length == 0) {

        console.log("All Empty fields")

        defaultView();
    }

    // if multi tags
    if (tagArrayToSearch.length >= 2) {
        console.log("Multi search:", tagArrayToSearch)
        multiTagSearch(tagArrayToSearch)
    }

    // if input is empty and tags not emtpy
    if (tagArrayToSearch.length === 1) {
        // tagArrayToSearch = tagArrayToSearch.push(searchInput.value)
        // multiTagSearch(tagArrayToSearch)
        console.log('tagArrayToSearch.length == 1')
        recipesDOM.forEach(recipe => {
            tagArrayToSearch.forEach(tag => {
                tag = tag.toString();
                if (uniqueIngredients.includes(tag)) {
                    ingredientMatch(recipe, tag, recipeMatchArray);
                } else if (uniqueUstensils.includes(tag)) {
                    ustensileMatch(recipe, tag, recipeMatchArray);

                } else if (uniqueAppliances.includes(tag)) {
                    applianceMatch(recipe, tag, recipeMatchArray);
                } else if (tagArrayToSearch.length == 1 && searchInput.value.length >= 3) {

                    console.log("Neither in INGREDIENTS", uniqueIngredients.includes(tag), "USTENSILES", uniqueUstensils.includes(tag), "APPLIANCES", uniqueAppliances.includes(tag))
                }
            })
        })
        recipeMatchArray = [...new Set(recipeMatchArray)];
        displayData(recipeMatchArray);
    }


    console.log("Recipes single Match:", recipeMatchArray)

    // cleanDOM();
    // cleanData();
    if (tagArrayToSearch.length === 1 && searchInput.value.length >= 1) {
        tagArrayToSearch.push(searchInput.value)
        console.log('tagArrayToSearch lenght is 1', searchInput.value, tagArrayToSearch)
        multiTagSearch(tagArrayToSearch)

        // displayData(recipeMatchArray);
    }

    if (tagArrayToSearch.length === 0) {
        console.log('default View');
        defaultView();


    }
}