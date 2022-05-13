function searchPrincipalInput(e) {
    const input = searchInput.value;
    let searchMatchArray = [];

    if (e.target.value.length >= 3 || e.target.value.length >= 3 && e.inputType === "deleteContentBackward") {

        if (tagArrayToSearch.length > 0) {
            console.log("TagArray is not Empty", tagArrayToSearch), 'principal search', searchInput;
            // ArrayToUse
            searchMatchArray.forEach(recipe => {
                recipeMatchName(input, searchMatchArray);
                ingredientMatch(recipe, input, searchMatchArray);
                descriptionMatch(input, searchMatchArray);

            })

        } else {
            recipesDOM.forEach(recipe => {
                recipeMatchName(input, searchMatchArray);
                ingredientMatch(recipe, input, searchMatchArray);
                descriptionMatch(input, searchMatchArray);

            })
        }

        searchMatchArray = [...new Set(searchMatchArray)];
        console.log("Principal search Match ID:", searchMatchArray)

        cleanDOM();
        displayData(searchMatchArray);
    } else if (input.length == 0 && tagArrayToSearch.lenght == 0) {
        console.log('no filters', )
    } else {
        cleanDOM();
        defaultView();
        console.log('Default?', input)
    }
}