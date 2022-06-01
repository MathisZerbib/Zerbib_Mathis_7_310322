const multiTagSearch = (tagArrayToSearch) => {

    let matchingUstensil = [];
    let matchingAppliance = [];
    let matchingIngredients = [];
    // TODO SEARCH IF WORD EXIST IN BASE

    tagArrayToSearch.forEach(el => {
        //     if (!strExists(uniqueIngredients, el)) {
        //         console.log('Dont Exist:', strExists(uniqueIngredients, el), el)
        //         tagArrayToSearch = tagArrayToSearch.filter(e => e !== el);
        //     }


        if (strExists(uniqueUstensils, el)) {
            matchingUstensil = recipeMatchArray.filter(e => e.ustensils.includes(el));

            console.log('Exist in Unique Ustensile', el)

            cleanDOM();
            displayData(recipeMatchArray)
                // tagArrayToSearch = tagArrayToSearch.filter(e => e !== el);

        }


        if (strExists(uniqueAppliances, el)) {
            matchingAppliance = recipeMatchArray.filter(e => e.appliance.includes(el));
            cleanDOM();
            displayData(recipeMatchArray)
            console.log('Exist in Unique APPLIANCE', el)
        }



        if (strExists(uniqueIngredients, el)) {
            matchingIngredients = recipeMatchArray.filter(e => e.ingredients.includes(el));
            cleanDOM();
            displayData(recipeMatchArray)
            console.log('Exist in Unique INDREDIENT', el)
        }

    })

    let newRecipeArrayIngredients = []
        // let newRecipeArrayAppliances = []
        // let newRecipeArrayUstensiles = []


    let recipeMatchBothIngredients = []


    for (let i = 0; i < tagArrayToSearch.length; i++) {

        recipes.forEach(recipe => {


            if (ingredientMatch(recipe, tagArrayToSearch[i], recipeMatchArray) !== undefined) {
                // console.log('Ingredients to match: ', tagArrayToSearch[i])
                newRecipeArrayIngredients.push(recipe)

            }


            // if (ustensileMatch(recipe, tagArrayToSearch[i], recipeMatchArray) !== undefined) {
            //     // console.log('Ustensils to match:', ustensileMatch(recipe, tagArrayToSearch[i], recipeMatchArray))
            //     newRecipeArrayUstensiles.push(recipe)
            //         // console.log('TAG: ', tagArrayToSearch[i], 'newRecipeArrayIngredients', newRecipeArrayUstensiles)


            // }


            // if (applianceMatch(recipe, tagArrayToSearch[i], recipeMatchArray) !== undefined) {
            //     // console.log('TAG: ', tagArrayToSearch[i])
            //     newRecipeArrayAppliances.push(recipe)
            //         // console.log('Appliances to match:'), newRecipeArrayAppliances

            // }
            // ustensMatch(recipe, tag, recipeMatchArray)
            // applianceMatch(recipe, tag, recipeMatchArray)

        })
        newRecipeArrayIngredients = [...new Set(newRecipeArrayIngredients)];
        // newRecipeArrayUstensiles = [...new Set(newRecipeArrayUstensiles)];
        // newRecipeArrayAppliances = [...new Set(newRecipeArrayAppliances)];

        if (newRecipeArrayIngredients.length !== 0 || newRecipeArrayIngredients.length !== undefined) {


            for (let y = 0; newRecipeArrayIngredients.length > y; y++) {
                let trueArray = [];

                newRecipeArrayIngredients[y].ingredients.forEach(element => {

                    // console.log(element.ingredient, 'newRecipeArrayIngredients', newRecipeArrayIngredients[y])

                    // console.log('ingredient :', element.ingredient);
                    tagArrayToSearch.forEach(el => {
                        if (element.ingredient.toLocaleLowerCase().includes(el.toLocaleLowerCase())) {
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
        // if (newRecipeArrayUstensiles.length !== 0 || undefined) {

        //     for (let j = 0; newRecipeArrayUstensiles.length > j; j++) {
        //         let trueArray = [];

        //         newRecipeArrayUstensiles[j].ustensils.forEach(element => {

        //             // console.log(element.ingredient, 'newRecipeArrayUstensiles', newRecipeArrayUstensiles[j])

        //             // console.log('ingredient :', element.ingredient);
        //             tagArrayToSearch.forEach(el => {
        //                 // console.log('EL=======', el)
        //                 if (element.toLocaleLowerCase().includes(el.toLocaleLowerCase())) {
        //                     // console.log(element.ustensils, 'MATCH [0]', element)
        //                     trueArray.push(element.ustensils)
        //                 }

        //             })

        //         });

        //         if (trueArray.length === tagArrayToSearch.length) {
        //             // console.log('TRUE ARRAY', trueArray, 'execpted', tagArrayToSearch.length)

        //             matchingUstensil.push(newRecipeArrayUstensiles[j]);
        //             matchingUstensil = [...new Set(matchingUstensil)];
        //             // console.log('Ingredient Pushed', newRecipeArrayUstensiles[y].ingredients)
        //         }

        //     }
        // }

        // if (newRecipeArrayAppliances.length !== 0 || newRecipeArrayAppliances.length !== undefined) {

        //     for (let j = 0; newRecipeArrayAppliances.length > j; j++) {
        //         let trueArray = [];

        //         newRecipeArrayAppliances[j].appliance.forEach(element => {

        //             // console.log(element.ingredient, 'newRecipeArrayAppliances', newRecipeArrayAppliances[j])

        //             // console.log('ingredient :', element.ingredient);
        //             tagArrayToSearch.forEach(el => {
        //                 // console.log('EL=======', el)
        //                 if (element.toLocaleLowerCase().includes(el.toLocaleLowerCase())) {
        //                     // console.log(element.ustensils, 'MATCH [0]', element)
        //                     trueArray.push(element.ustensils)
        //                 }

        //             })

        //         });

        //         if (trueArray.length === tagArrayToSearch.length) {
        //             // console.log('TRUE ARRAY', trueArray, 'execpted', tagArrayToSearch.length)

        //             matchingAppliance.push(newRecipeArrayAppliances[j]);
        //             matchingAppliance = [...new Set(matchingAppliance)];
        //             // console.log('Ingredient Pushed', newRecipeArrayAppliances[y].ingredients)
        //         }

        //     }
        // }


    }

    if (recipeMatchBothIngredients.length !== 0 || undefined) {
        console.log('recipes :', recipeMatchBothIngredients, 'Conditions:', tagArrayToSearch)

        cleanDOM();
        displayData(recipeMatchBothIngredients)
        recipeMatchArray = recipeMatchBothIngredients
        isMatching = true;
        return recipeMatchBothIngredients
    } else
    if (matchingUstensil.length !== 0) {
        console.log('matchingUstensil :', matchingUstensil, 'Conditions:', tagArrayToSearch)
        console.log('§!!!!!!!!!!!!!!!!!!!!!§§§§§§§§§§§§§§§§§§§§§ ', matchingAppliance)

        cleanDOM();
        displayData(matchingUstensil)
        recipeMatchArray = matchingUstensil
        isMatching = true;
        return matchingUstensil
    } else if (matchingAppliance.length !== 0) {
        console.log('matchingAppliance :', matchingAppliance, 'Conditions:', tagArrayToSearch)

        cleanDOM();
        displayData(matchingAppliance)
        recipeMatchArray = matchingAppliance
        isMatching = true;
        return matchingAppliance
    } else {


        // Comportement si recette pas trouvé eg: lait beurre far[...]
        displayError()
            // cleanDOM();
        isMatching = false;
        console.log('Dont match NONE:', 'Ustensiles', matchingUstensil, 'Appliance', matchingAppliance)
    }



    // if (newRecipeArrayIngredients !== -1) {
    //     displayData(recipeMatchBothIngredients)
    // }
    // if (newRecipeArrayUstensiles !== -1) {
    //     displayData(newRecipeArrayUstensiles)
    // }
    // if (newRecipeArrayAppliances !== -1) {
    //     displayData(newRecipeArrayAppliances)

    // }

}