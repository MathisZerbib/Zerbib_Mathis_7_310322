const tagArraySearch = (tagArrayToSearch) => {
        cleanDOM()

        // console.log('tagArrayToSearch', tagArrayToSearch, 'lenght:', tagArrayToSearch.length)

        if (recipeMatchArray.length !== 0) {
            tagArrayToSearch.map(tag => {
                affineWithTag(tag, recipeMatchArray)
            })
       recipeMatchArray = [...new Set(recipeMatchArray)];
        displayData(recipeMatchArray);
        }else{
            tagArrayToSearch.map(tag => {
                affineWithTag(tag, newRecipeMatch || newRecipeMatch)
            })
       newRecipeMatch = [...new Set(newRecipeMatch)];
        displayData(newRecipeMatch);
        }


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