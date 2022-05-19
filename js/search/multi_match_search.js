const multiTagSearch = (tagArrayToSearch) => {

    let newRecipeArrayOne = []
    let recipeMatchOne = []
    for (let i = 0; i < tagArrayToSearch.length; i++) {

        recipes.forEach(recipe => {


            if (ingredientMatch(recipe, tagArrayToSearch[i], recipeMatchArray) !== undefined) {
                // console.log('TAG: ', tagArrayToSearch[i])
                newRecipeArrayOne.push(recipe)

            }


            // if (ustensileMatch(recipe, tagArrayToSearch[i], recipeMatchArray) !== undefined) {
            //     // console.log('TAG: ', tagArrayToSearch[i])
            //     newRecipeArrayOne.push(recipe)

            // }


            // if (applianceMatch(recipe, tagArrayToSearch[i], recipeMatchArray) !== undefined) {
            //     // console.log('TAG: ', tagArrayToSearch[i])
            //     newRecipeArrayOne.push(recipe)

            // }
            // ustensMatch(recipe, tag, recipeMatchArray)
            // applianceMatch(recipe, tag, recipeMatchArray)

        })
        newRecipeArrayOne = [...new Set(newRecipeArrayOne)];

        // let fusionArray = [...new Set(newRecipeArrayOne, newRecipeArrayTwo)];

        // const newArray = fusionArray[i].ingredients
        //     .filter(ingredient => ingredient == tagArrayToSearch[0] && ingredient == tagArrayToSearch[1])

        // console.log("NEW ARRAY RECIPES",
        //     fusionArray,
        //     "New array", newArray)


        for (let y = 0; newRecipeArrayOne.length > y; y++) {
            let trueArray = [];

            newRecipeArrayOne[y].ingredients.forEach(element => {

                // console.log(element.ingredient, 'newRecipeArrayOne', newRecipeArrayOne[y])

                // console.log('ingredient :', element.ingredient);
                tagArrayToSearch.forEach(el => {
                    if (element.ingredient.toLocaleLowerCase() === el.toLocaleLowerCase()) {
                        // console.log(element.ingredient, 'MATCH [0]', element)
                        trueArray.push(element.ingredient)
                    }

                })

            });

            if (trueArray.length === tagArrayToSearch.length) {
                console.log('TRUE ARRAY', trueArray, 'execpted', tagArrayToSearch.length)

                recipeMatchOne.push(newRecipeArrayOne[y]);
                recipeMatchOne = [...new Set(recipeMatchOne)];
                console.log('Ingredient Pushed', newRecipeArrayOne[y].ingredients)
            }

        }
    }

    if (recipeMatchOne.length !== 0) {
        console.log('recipes :', recipeMatchOne, 'Conditions:', tagArrayToSearch)

        cleanDOM();
        displayData(recipeMatchOne)
        recipeMatchArray = recipeMatchOne
        isMatching = true;
        return recipeMatchOne
    } else {

        // A voir comportement si recette pas trouvé eg: lait beurre far[...]
        displayError()
            // cleanDOM();
        isMatching = false;
        console.log('Dont match conditions', recipeMatchOne)

    }


}