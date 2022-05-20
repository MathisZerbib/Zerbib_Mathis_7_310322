const multiTagSearch = (tagArrayToSearch) => {

    let newRecipeArrayIngredients = []
    let newRecipeArrayAppliances = []
    let newRecipeArrayUstensiles = []


    let recipeMatchBothIngredients = []
    let recipeMatchBothUstensiles = []
    let recipeMatchBothAppliances = []


    for (let i = 0; i < tagArrayToSearch.length; i++) {

        recipes.forEach(recipe => {


            if (ingredientMatch(recipe, tagArrayToSearch[i], recipeMatchArray) !== undefined) {
                console.log('Ingredients to match: ', tagArrayToSearch[i])
                newRecipeArrayIngredients.push(recipe)

            }


            if (ustensileMatch(recipe, tagArrayToSearch[i], recipeMatchArray) !== undefined) {
                console.log('Ustensils to match:', ustensileMatch(recipe, tagArrayToSearch[i], recipeMatchArray))
                newRecipeArrayUstensiles.push(recipe)
                    // console.log('TAG: ', tagArrayToSearch[i], 'newRecipeArrayIngredients', newRecipeArrayUstensiles)


            }


            if (applianceMatch(recipe, tagArrayToSearch[i], recipeMatchArray) !== undefined) {
                // console.log('TAG: ', tagArrayToSearch[i])
                newRecipeArrayAppliances.push(recipe)
                console.log('Appliances to match:'), newRecipeArrayAppliances

            }
            // ustensMatch(recipe, tag, recipeMatchArray)
            // applianceMatch(recipe, tag, recipeMatchArray)

        })
        newRecipeArrayIngredients = [...new Set(newRecipeArrayIngredients)];
        newRecipeArrayUstensiles = [...new Set(newRecipeArrayUstensiles)];
        newRecipeArrayAppliances = [...new Set(newRecipeArrayAppliances)];

        // let fusionArray = [...new Set(newRecipeArrayIngredients, newRecipeArrayTwo)];

        // const newArray = fusionArray[i].ingredients
        //     .filter(ingredient => ingredient == tagArrayToSearch[0] && ingredient == tagArrayToSearch[1])

        // console.log("NEW ARRAY RECIPES",
        //     fusionArray,
        //     "New array", newArray)

        if (newRecipeArrayIngredients.length !== 0 || newRecipeArrayIngredients.length !== undefined) {


            for (let y = 0; newRecipeArrayIngredients.length > y; y++) {
                let trueArray = [];

                newRecipeArrayIngredients[y].ingredients.forEach(element => {

                    // console.log(element.ingredient, 'newRecipeArrayIngredients', newRecipeArrayIngredients[y])

                    // console.log('ingredient :', element.ingredient);
                    tagArrayToSearch.forEach(el => {
                        if (element.ingredient.toLocaleLowerCase() === el.toLocaleLowerCase()) {
                            // console.log(element.ingredient, 'MATCH [0]', element)
                            trueArray.push(element.ingredient)
                        }

                    })

                });

                if (trueArray.length === tagArrayToSearch.length) {
                    // console.log('TRUE ARRAY', trueArray, 'execpted', tagArrayToSearch.length)

                    recipeMatchBothIngredients.push(newRecipeArrayIngredients[y]);
                    recipeMatchBothIngredients = [...new Set(recipeMatchBothIngredients)];
                    // console.log('Ingredient Pushed', newRecipeArrayIngredients[y].ingredients)
                }

            }
        }
        if (newRecipeArrayUstensiles.length !== 0 || newRecipeArrayUstensiles.length !== undefined) {

            for (let j = 0; newRecipeArrayUstensiles.length > j; j++) {
                let trueArray = [];

                newRecipeArrayUstensiles[j].ustensils.forEach(element => {

                    // console.log(element.ingredient, 'newRecipeArrayUstensiles', newRecipeArrayUstensiles[j])

                    // console.log('ingredient :', element.ingredient);
                    tagArrayToSearch.forEach(el => {
                        console.log('EL=======', el)
                        if (element.toLocaleLowerCase() === el.toLocaleLowerCase()) {
                            // console.log(element.ustensils, 'MATCH [0]', element)
                            trueArray.push(element.ustensils)
                        }

                    })

                });

                if (trueArray.length === tagArrayToSearch.length) {
                    // console.log('TRUE ARRAY', trueArray, 'execpted', tagArrayToSearch.length)

                    recipeMatchBothUstensiles.push(newRecipeArrayUstensiles[j]);
                    recipeMatchBothUstensiles = [...new Set(recipeMatchBothUstensiles)];
                    // console.log('Ingredient Pushed', newRecipeArrayUstensiles[y].ingredients)
                }

            }
        }

        if (newRecipeArrayAppliances.length !== 0 || newRecipeArrayAppliances.length !== undefined) {

            for (let j = 0; newRecipeArrayAppliances.length > j; j++) {
                let trueArray = [];

                newRecipeArrayAppliances[j].appliance.forEach(element => {

                    // console.log(element.ingredient, 'newRecipeArrayAppliances', newRecipeArrayAppliances[j])

                    // console.log('ingredient :', element.ingredient);
                    tagArrayToSearch.forEach(el => {
                        console.log('EL=======', el)
                        if (element.toLocaleLowerCase() === el.toLocaleLowerCase()) {
                            // console.log(element.ustensils, 'MATCH [0]', element)
                            trueArray.push(element.ustensils)
                        }

                    })

                });

                if (trueArray.length === tagArrayToSearch.length) {
                    // console.log('TRUE ARRAY', trueArray, 'execpted', tagArrayToSearch.length)

                    recipeMatchBothAppliances.push(newRecipeArrayAppliances[j]);
                    recipeMatchBothAppliances = [...new Set(recipeMatchBothAppliances)];
                    // console.log('Ingredient Pushed', newRecipeArrayAppliances[y].ingredients)
                }

            }
        }


    }

    if (recipeMatchBothIngredients.length !== 0 || undefined) {
        console.log('recipes :', recipeMatchBothIngredients, 'Conditions:', tagArrayToSearch)

        cleanDOM();
        displayData(recipeMatchBothIngredients)
        recipeMatchArray = recipeMatchBothIngredients
        isMatching = true;
        return recipeMatchBothIngredients
    } else {

        // A voir comportement si recette pas trouvé eg: lait beurre far[...]
        displayError()
            // cleanDOM();
        isMatching = false;
        console.log('Dont match conditions', recipeMatchBothIngredients)

    }


    if (recipeMatchBothUstensiles.length !== 0) {
        console.log('recipes :', recipeMatchBothUstensiles, 'Conditions:', tagArrayToSearch)

        cleanDOM();
        displayData(recipeMatchBothUstensiles)
        recipeMatchArray = recipeMatchBothUstensiles
        isMatching = true;
        return recipeMatchBothUstensiles
    } else {

        // A voir comportement si recette pas trouvé eg: lait beurre far[...]
        displayError()
            // cleanDOM();
        isMatching = false;
        console.log('Dont match conditions', recipeMatchBothUstensiles)

    }


    if (recipeMatchBothAppliances.length !== 0) {
        console.log('recipes :', recipeMatchBothAppliances, 'Conditions:', tagArrayToSearch)

        cleanDOM();
        displayData(recipeMatchBothAppliances)
        recipeMatchArray = recipeMatchBothAppliances
        isMatching = true;
        return recipeMatchBothAppliances
    } else {

        // A voir comportement si recette pas trouvé eg: lait beurre far[...]
        displayError()
            // cleanDOM();
        isMatching = false;
        console.log('Dont match conditions', recipeMatchBothAppliances)

    }


}