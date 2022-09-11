function searchPrincipalInput(e) {
    let final_words_from_input = []
    const input = searchInput.value;
    let searchMatchArray = [];
    let searchFromInput = [];
    let arrayFromInputSearch;

    tagArrayToSearch = [...new Set(tagArrayToSearch)]
    
    if (e.key == 8 && searchFromInput !== []) {
        searchFromInput.pop()
        console.log("searchFromInput", searchFromInput)
    }

    arrayFromInputSearch =  e.target.value.split(' ').filter(function(el) {
        return el != '';
    });;

    searchFromInput = searchFromInput.push(arrayFromInputSearch)

    final_words_from_input.push(searchFromInput[searchFromInput.length - 1]);
    final_words_from_input.pop()

    if (e.target.value.length >= 3) {

        if (arrayFromInputSearch.length > 1) {
            affineGlobalSearch(final_words_from_input, searchMatchArray)
        }
    }
    // console.log('arrayFromInputSearch.length', arrayFromInputSearch.length)

    // if the backward is hitted or the value is more than 3 and the arraySearch  is single
    
    
    if (e.target.value.length >= 3 && arrayFromInputSearch.length == 1 || e.target.value.length >= 3 && e.inputType === "deleteContentBackward") {
    
        globalSearch(input, searchMatchArray)

        searchMatchArray = [...new Set(searchMatchArray)];
        console.table('principalSearch, if the backward is hitted or .. displayData(searchMatchArray);', searchMatchArray);

        cleanDOM();
        displayData(searchMatchArray);
    }
    let recipesCardDOM = document.querySelectorAll('.recipe-card')

    /* Case no match */
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
        
            /* Case no text in search */
    } else if (arrayFromInputSearch.length == 0) {
        if (searchMatchArray.length == 0 && tagArrayToSearch.length >= 1) {
            hideError()
            console.log("searchMatchArray.length", searchMatchArray.length, 'tagArrayToSearch.length', tagArrayToSearch.length)


            /* even if tag no match */
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