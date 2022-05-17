function searchPrincipalInput(e) {
    const input = searchInput.value;
    let searchMatchArray = [];
    let searchFromInput = [];
    // TODO Match Multiple ingrédients recipe name and descritpion at the same time. 

    console.log('e Input ', e)
    if (e.key == 8 && searchFromInput !== []) {
        searchFromInput.pop()
    }
    if (e.key >= 65 && e.key <= 90)
        console.log('COUCOU')
    let bufferFromInput;

    bufferFromInput = e.target.value

    if (e.key == " " ||
        e.code == "Space" ||
        e.keyCode == 32
    ) {


    }
    bufferFromInput = bufferFromInput.split(' ');

    bufferFromInput = bufferFromInput.filter(function(el) {
        return el != '';
    });

    console.log('bufferFromInput', bufferFromInput)
        // searchFromInput = searchFromInput.split(/(\s+)/)
    searchFromInput = searchFromInput.push(bufferFromInput)
    var final_words_from_input = []
    final_words_from_input.push(searchFromInput[searchFromInput.length - 1]);
    final_words_from_input.pop()

    if (e.target.value.length >= 3) {

        if (bufferFromInput.length > 1) {
            multiTagSearch(bufferFromInput)
        }
    }
    console.log('bufferFromInput.length', bufferFromInput.length)

    if (e.target.value.length >= 3 && bufferFromInput.length == 1 || e.target.value.length >= 3 && e.inputType === "deleteContentBackward") {

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
    }

    if (searchMatchArray.length == 0 && recipesDOM.length == 50 && input.length >= 3) {
        // cleanDOM();
        // defaultView();
        // displayError()
        console.log('Min char 3', input)
    } else if (bufferFromInput.length == 0) {
        cleanDOM();
        defaultView()
    } else {
        hideError()
    }
}