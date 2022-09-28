const tagArraySearch = (tagArrayToSearch) => {
        cleanDOM()
    // Default View if no filters
    // if (tagArrayToSearch.length == 0 && searchInput.value == '' && tagArrayToSearch.length == 0) {
    //     console.log("All Empty fields")
    //     defaultView();
    // }

    // // multi tags
    // if (tagArrayToSearch.length >= 2) {
    //     console.log("Multitag Multi search:", tagArrayToSearch)
    //     // multiTagSearch(tagArrayToSearch)


    // }


        console.log('tagArrayToSearch', tagArrayToSearch, 'lenght:', tagArrayToSearch.length)
            tagArrayToSearch.map(tag => {
                // tag = tag.toString();
                // if (uniqueIngredients.includes(tag)) {
                //     ingredientMatch(tag, recipeMatchArray);
                // } else if (uniqueUstensiles.includes(tag)) {
                //     ustensilsMatch(tag, recipeMatchArray);
                // } else if (uniqueAppliances.includes(tag)) {
                //     applianceMatch(tag, recipeMatchArray);
                // } else if (tagArrayToSearch.length == 1 && searchInput.value.length >= 3) {
                //     console.log("Neither in INGREDIENTS", uniqueIngredients.includes(tag), "USTENSILES", uniqueUstensiles.includes(tag), "APPLIANCES", uniqueAppliances.includes(tag))
                // } else if (ingredientMatch(tag, recipeMatchArray)) {
                //     console.log('IF ||||| IngredientMatch(recipe, tag, recipeMatchArray)')
                // }
                affineWithTag(tag, recipeMatchArray)
            })
        recipeMatchArray = [...new Set(recipeMatchArray)];
        displayData(recipeMatchArray);

    // if (tagArrayToSearch.length == 1 && searchInput.value.length >= 3) {
    //     // tagArrayToSearch.push(searchInput.value)
    //     console.log('tagArrayToSearch', tagArrayToSearch, 'lenght is', tagArrayToSearch.length, 'Search Input value', searchInput.value)
    //     multiTagSearch(tagArrayToSearch)
    //     // displayData(recipeMatchArray);
    // }

    // if (tagArrayToSearch.length === 0 && searchInput.value.length <= 2) {
    //     console.log('default View');
    //     defaultView();

    // }
    // if (searchInput.value.length >= 3 && tagArrayToSearch.length === 0) {
    //     cleanDOM();

    //     let searchMatchArray = []
    //     if (searchInput.value.includes(' ')) {
    //         console.log('Going to multimatch', searchInput.value.split(' '))
    //         arrayFromInputSearch = searchInput.value.split(' ')
    //         multiTagSearch(arrayFromInputSearch)

    //     } else {
    //         for (let i = 0; recipes.length > i; i++) {
    //             recipeMatchName(searchInput.value, searchMatchArray);
    //             ingredientMatch(recipes[i], searchInput.value, searchMatchArray);
    //             descriptionMatch(searchInput.value, searchMatchArray);
    //         }
    //         searchMatchArray = [...new Set(searchMatchArray)];
    //         console.table(searchMatchArray);


    //         cleanDOM();
    //         displayData(searchMatchArray);
    //     }




    // }
}