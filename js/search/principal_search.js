function filterElements(letters ,elements) {
    let isError = [];
    if(letters.length > 2) {
        for(i=0; elements.length > i; i++) {
            if(cleanString(elements[i].textContent).includes(cleanString(letters))) {
                elements[i].style.display = 'block';
                // console.log(elements[i].childNodes[1].innerText)
                if(!elements[i].className.includes('filtered')) {
                    elements[i].classList.add('filtered');
                }
                isError.push(false);
            }else{
                elements[i].style.display = 'none';
                elements[i].classList.remove('filtered');
                isError.push(true);
            }
        }
        if(isError.includes(true) && !isError.includes(false)) {
                displayError()
        }else {
            hideError()
        }
    }

    else if(letters.length <=2) {
        for(i=0; elements.length > i; i++) {
            hideError()
                elements[i].style.display = 'block';
        }
    }

    // // Init words array 
    // tagArrayToSearch = [...new Set(tagArrayToSearch)]
    // let words = [];
    // let recipeMatchArray = [];


    // // split input words in array
    // words = e.target.value.split(' ').filter(function (el) {
    //     return el != '';
    // });;

    // console.log('============WORDS==============', words)

    // // for (let i=0; words.length !== 0; i++) {
    // //     console.log('============INSIDE==============', words[i])

    // //     tagArrayToSearch.push(words[i])
    // //     tagArraySearch(tagArrayToSearch);
    // //     console.log('tagArrayToSearch', tagArrayToSearch)
    // // }

    
    // console.log("words", words.toString().length >= 3, searchInput.value)

 
    // // console.log('words.length', words.length)
    

    // // if the backward is hitted or the value is more than 3 and the arraySearch  is single
    // if (words.length >= 1 
    //     && searchInput.value.length >=3 
    //    ) {
    //     if ( e.keyCode == 8 ) {
    //         cleanDOM()
    //         defaultView()
    //         globalSearch(searchInput.value, recipeMatchArray)    
    //     }
    //     cleanDOM()
    //     globalSearch(searchInput.value, recipeMatchArray)

    //     recipeMatchArray = [...new Set(recipeMatchArray)];

    //     displayData(recipeMatchArray);
    //     // console.log("globalSearch", recipeMatchArray)
    // }

    //     // If not enough char lenght display current Recipes
    // if (words.toString().length <= 2 && e.keyCode == 8 ) {
    //     cleanDOM();
    //     defaultView();
    // }


 
    // /* Case no match */
    // if (getCurrentRecipes().length == 0 && searchInput.value.length >= 3) {
    //     cleanDOM();
    //     defaultView();
    //     displayError()

    //     console.log('Min char 3', searchInput.value)

    //         /* Case no text in search */
    // } else if (words.length == 0) {
    //     if (recipeMatchArray.length == 0 && tagArrayToSearch.length >= 1 && getCurrentRecipes().length !== 0  ) {
    //         hideError()
    //         console.log("recipeMatchArray.length", recipeMatchArray.length, 'tagArrayToSearch.length', tagArrayToSearch.length)


    //         /* even if tag no match */
    //     } else if (recipeMatchArray.length == 0) {
    //         console.log('searMatch Array', recipeMatchArray.length)
    //         displayError()
    //         cleanDOM();
    //         defaultView()
    //     }

    // }
    
    // else {
    //     console.log('Else End principalSearch')
    //         // hideError()
    // }
}