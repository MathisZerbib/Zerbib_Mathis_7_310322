function searchPrincipalInput() {
    const input = searchInput.value;
    let recipeMatchArray = [];

    if (input.length >= 3) {
        recipes.forEach(recipe => {
            recipeMatch(input, recipeMatchArray);
            ingredientMatch(recipe, input, recipeMatchArray);
            descriptionMatch(input, recipeMatchArray);

        })
        recipeMatchArray = [...new Set(recipeMatchArray)];
        // console.log("Array ID:", recipeMatchArray)

        cleanDOM();
        displayData(recipeMatchArray);
    } else {
        cleanDOM();
        cleanData();
        defaultView();

    }
}