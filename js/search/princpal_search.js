function searchPrincipalInput(e) {
    const input = searchInput.value;
    let searchMatchArray = [];

    // TODO Match Multiple ingrédients recipe name and descritpion at the same time. 


    if (e.target.value.length >= 3 || e.target.value.length >= 3 && e.inputType === "deleteContentBackward") {

        if (tagArrayToSearch.length > 0) {
            console.log("Search In recipes:", recipeMatchArray, "Tag not Empty", tagArrayToSearch), 'principal search', searchInput;
            // ArrayToUse
            recipeMatchArray.forEach(recipe => {
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
        console.log("Principal search Match ID:", searchMatchArray);


        cleanDOM();
        displayData(searchMatchArray);
    } else {

        tagArraySearch(tagArrayToSearch)

    }

    if (searchMatchArray.length == 0 && recipesDOM.length == 50 && input.length > 3) {
        // cleanDOM();
        // defaultView();
        displayError()
        console.log('Min char 3', input)
    } else {
        hideError()
    }
}