function searchPrincipalInput(e) {
    // Init words array 

    let inputSearch = [];
    let words = [];
    recipeMatchArray = [];

    tagArrayToSearch = [...new Set(tagArrayToSearch)]
    // console.log("searchInput:", searchInput.value, 'tagArrayToSearch:', tagArrayToSearch)

    // si l'utilisateur appuie sur la touche retour
    // if (e.keyCode == 8 && inputSearch !== []) {
    //     inputSearch.pop()
    // }


    // split input words in array
    words = e.target.value.split(' ').filter(function (el) {
        return el != '';
    });;

    console.log('============WORDS==============', words)

    // for (let i=0; words.length !== 0; i++) {
    //     console.log('============INSIDE==============', words[i])

    //     tagArrayToSearch.push(words[i])
    //     tagArraySearch(tagArrayToSearch);
    //     console.log('tagArrayToSearch', tagArrayToSearch)
    // }

    
    console.log("words", words.toString().length >= 3, searchInput.value)

 
    // console.log('words.length', words.length)

    // if the backward is hitted or the value is more than 3 and the arraySearch  is single
    if (words.length >= 1 && searchInput.value.length >=3) {
        globalSearch(searchInput.value, recipeMatchArray)

        recipeMatchArray = [...new Set(recipeMatchArray)];

        displayData(recipeMatchArray);
        // console.log("globalSearch", recipeMatchArray)
    }


    if (words.toString().length <= 2 ) {
        cleanDOM();
        defaultView()
    }


    // if (words.length >= 2){
    //     let pass = []
    //     for (let i=0; words.length !== i; i++) {
    //         console.log('words[i]', words[i])
    //         if(words[i].length >=3) {
    //             pass.push(true)
    //         }else {
    //             pass.push(false)
    //         }
    //     }
    //     if (!pass.includes(false)) {
    //         globalSearch(words, recipeMatchArray)
            
    //         recipeMatchArray = [...new Set(recipeMatchArray)];
    
    //         cleanDOM();
    //         displayData(recipeMatchArray);
    //         // console.log("globalSearch", recipeMatchArray)
    
    //     }
     
    // }


    // if (words.toString().length >= 3) {
    //     if (words.length > 1) {
    //         console.log('affine Search');

    //         globalSearch(searchInput.value, recipeMatchArray)

    //         recipeMatchArray = [...new Set(recipeMatchArray)];
    
    //         cleanDOM();
    //         displayData(recipeMatchArray);
    //         console.log("globalSearch", recipeMatchArray)
    //     }
    // }

    // // let getCurrentRecipes() = document.querySelectorAll('.recipe-card')

    /* Case no match */
    if (recipeMatchArray.length == 0 && getCurrentRecipes().length == 0 && searchInput.value.length >= 3) {
        if (recipeMatchArray.length == 0) {
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
        if (recipeMatchArray.length == 0 && tagArrayToSearch.length >= 1 && getCurrentRecipes().length !== 0  ) {
            hideError()
            console.log("recipeMatchArray.length", recipeMatchArray.length, 'tagArrayToSearch.length', tagArrayToSearch.length)


            /* even if tag no match */
        } else if (recipeMatchArray.length == 0) {
            console.log('searMatch Array', recipeMatchArray.length)
            displayError()
            cleanDOM();
            defaultView()
        }

    }
    
    // else {
    //     console.log('Else End principalSearch')
    //         // hideError()
    // }
}