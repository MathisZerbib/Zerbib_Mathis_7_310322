function searchPrincipalInput(e) {

    // Init words array 

    let newRecipeMatch = [];
    let inputSearch = [];
    let words;

    tagArrayToSearch = [...new Set(tagArrayToSearch)]
    // console.log("searchInput:", searchInput.value, 'tagArrayToSearch:', tagArrayToSearch)

    // si l'utilisateur appuie sur la touche retour
    if (e.key == 8 && inputSearch !== []) {
        inputSearch.pop()
    }

    words = e.target.value.split(' ').filter(function (el) {
        return el != '';
    });;

    console.log("words", words, 'inputSearch', inputSearch)

    // console.log('words.length', words.length)

    // if the backward is hitted or the value is more than 3 and the arraySearch  is single
    if (words.toString().length >= 3 && words.length == 1) {
        globalSearch(searchInput.value, newRecipeMatch)

        newRecipeMatch = [...new Set(newRecipeMatch)];

        cleanDOM();
        displayData(newRecipeMatch);
        console.log("globalSearch", newRecipeMatch)

    }


    if (words.toString().length >= 3) {
        if (words.length > 1) {
            console.log('affine Search');

            globalSearch(searchInput.value, newRecipeMatch)

            newRecipeMatch = [...new Set(newRecipeMatch)];
    
            cleanDOM();
            displayData(newRecipeMatch);
            console.log("globalSearch", newRecipeMatch)

            // affineSearch(words, getCurrentRecipes())
            // console.log('old', newRecipeMatch)
            // newRecipeMatch = [...new Set(newRecipeMatch)];

            // cleanDOM();
            // displayData(newRecipeMatch);
        }
    }

    // let getCurrentRecipes() = document.querySelectorAll('.recipe-card')

    /* Case no match */
    if (newRecipeMatch.length == 0 && getCurrentRecipes().length == 0 && searchInput.value.length >= 3) {
        if (newRecipeMatch.length == 0) {
            cleanDOM();
            defaultViewDOM();
            displayError();
            console.log(getCurrentRecipes().length, 'ERROR DISPLAYED')
        }
        cleanDOM();
        defaultViewDOM();
        displayError()
        console.log(getCurrentRecipes().length, 'ERROR DISPLAYED')

        console.log('Min char 3', searchInput.value)

            /* Case no text in search */
    } else if (words.length == 0) {
        if (newRecipeMatch.length == 0 && tagArrayToSearch.length >= 1) {
            hideError()
            console.log("newRecipeMatch.length", newRecipeMatch.length, 'tagArrayToSearch.length', tagArrayToSearch.length)


            /* even if tag no match */
        } else if (newRecipeMatch.length == 0) {
            console.log('searMatch Array', newRecipeMatch.length)
            displayError()
            cleanDOM();
            defaultView()
        }

    } else {
        console.log('Else End principalSearch')
            // hideError()
    }
}