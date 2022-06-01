function searchPrincipalInput(e) {
    const input = searchInput.value;
    let searchMatchArray = [];

    // TODO Match Multiple ingrédients recipe name and descritpion at the same time. 


    if (e.target.value.length >= 3 || e.target.value.length >= 3 && e.inputType === "deleteContentBackward") {

        if (tagArrayToSearch.length > 0) {
            console.log("Search In recipes:", recipeMatchArray, "Tag not Empty", tagArrayToSearch), 'principal search', searchInput;
            // ArrayToUse
            for (let i = 0; recipeMatchArray.length > i; i++) {
                recipeMatchName(input, searchMatchArray);
                ingredientMatch(recipeMatchArray[i], input, searchMatchArray);
                descriptionMatch(input, searchMatchArray);
            }




        } else {
            for (let j = 0; recipesDOM.length > j; j++) {
                recipeMatchName(input, searchMatchArray);
                ingredientMatch(recipesDOM[j], input, searchMatchArray);
                descriptionMatch(input, searchMatchArray);

            }
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