function searchPrincipalInput(e) {
    const input = searchInput.value;
    let searchMatchArray = [];
    let searchFromInput = [];
    tagArrayToSearch = [...new Set(tagArrayToSearch)]

    // TODO Match Multiple ingrédients recipe name and descritpion at the same time. 

    // console.log('e Input ', e)
    if (e.key == 8 && searchFromInput !== []) {
        searchFromInput.pop()
    }

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

        if (tagArrayToSearch.length >= 1) {
            console.log("Search In recipes:", recipeMatchArray, "Tag not Empty", tagArrayToSearch), 'principal search', searchInput;

            // Use "recipeMatchArray" if Multisearch with at least one tag
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
    let recipesCardDOM = document.querySelectorAll('.recipe-card')

    if (searchMatchArray.length == 0 && recipesCardDOM.length == 0 && input.length >= 3) {
        if (isMatching = false && searchMatchArray.length == 0) {
            cleanDOM();
            defaultViewDOM();
            displayError();
            console.log(recipesCardDOM.length, 'ERROR DISPLAYED')
        }
        cleanDOM();
        defaultViewDOM();
        displayError()
        console.log(recipesCardDOM.length, 'ERROR DISPLAYED')

        console.log('Min char 3', input)
    } else if (bufferFromInput.length == 0) {
        if (searchMatchArray.length == 0 && tagArrayToSearch.length >= 1) {
            // cleanDOM();

            // tagArraySearch(tagArrayToSearch)

            // displayData(searchMatchArray);

            hideError()
            console.log("searchMatchArray.length", searchMatchArray.length, 'tagArrayToSearch.length', tagArrayToSearch.length)


        } else if (searchMatchArray.length == 0) {
            console.log('searMatch Array', searchMatchArray.length)
            displayError()
            cleanDOM();
            defaultView()
        }

    } else {
        console.log('Hide Error')
            // hideError()
    }
}