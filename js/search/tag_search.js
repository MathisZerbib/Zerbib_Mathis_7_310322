const tagArraySearch = (tagArrayToSearch) => {
    cleanDOM();

    // Default View if no filters
    if (tagArrayToSearch.length == 0 && searchInput.value == '' && tagArrayToSearch.length == 0) {

        console.log("All Empty fields")

        defaultView();
    }

    // multi tags
    if (tagArrayToSearch.length >= 2) {
        console.log("Multitag Multi search:", tagArrayToSearch)
        multiTagSearch(tagArrayToSearch)
    }

    // if multi multi tags 

    // if (tagArrayToSearch.length >= 2) {
    //     console.log("Multitag Multi search:", multiTagSearch(tagArrayToSearch))
    //     cleanDOM()
    //     let recipesFromMulti = recipeMatchBothIngredients
    //     recipesFromMulti
    //         .forEach(recipe => {
    //             tagArrayToSearch.forEach(tag => {
    //                 console.log("EEEEEEEEEEEEEEEEE", tag)
    //                 if (uniqueUstensils.includes(tag) !== -1) {
    //                     ustensileMatch(recipe, tag, recipeMatchArray);
    //                     // ustensileMatch(multiTagSearch(tagArrayToSearch), e, recipeMatchArr,ay)
    //                 }
    //             })

    //         })
    //     recipeMatchArray = [...new Set(recipeMatchArray)];
    //     displayData(recipeMatchArray);
    // }


    // if input is empty and tags not emtpy
    if (tagArrayToSearch.length == 1) {
        // tagArrayToSearch = tagArrayToSearch.push(searchInput.value)
        // multiTagSearch(tagArrayToSearch)
        console.log('tagArrayToSearch', tagArrayToSearch, 'lenght:', tagArrayToSearch.length)
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
                } else if (ingredientMatch(recipe, tag, recipeMatchArray)) {
                    console.log('IF ||||| IngredientMatch(recipe, tag, recipeMatchArray)')
                }
            })
        })
        recipeMatchArray = [...new Set(recipeMatchArray)];
        displayData(recipeMatchArray);
    }

    if (tagArrayToSearch.length == 1 && searchInput.value.length >= 1) {
        tagArrayToSearch.push(searchInput.value)
        console.log('tagArrayToSearch', tagArrayToSearch, 'lenght is', tagArrayToSearch.length, 'Search Input value', searchInput.value)
        multiTagSearch(tagArrayToSearch)

        // displayData(recipeMatchArray);
    }

    if (tagArrayToSearch.length === 0) {
        console.log('default View');
        defaultView();

    }
}