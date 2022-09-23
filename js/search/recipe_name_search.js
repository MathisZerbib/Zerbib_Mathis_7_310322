// Title match
const recipeMatchName = (input, recipeMatchArray) => {

    // To do If filter is active 
    // if active recipesDOM

    if (recipeMatchArray.length === 0 || undefined || []) {

        let recipeMatch = []
        recipeMatch = getAllRecipes().filter(recipe => cleanString(recipe.name).includes(cleanString(input)))

        if (recipeMatch.length !== 0) {
            recipeMatch.map(el => {
                recipeMatchArray.push(el)
            })

            console.log(recipeMatchArray, 'NAME SEARCH MATCH')
        }
    } else {

        let recipeMatch = []
        recipeMatch = recipeMatchArray.filter(recipe => cleanString(recipe.name).includes(cleanString(input)))

        if (recipeMatch.length !== 0) {
            recipeMatch.map(el => {
                recipeMatchArray.push(el)
            })

            console.log(recipeMatchArray, 'NAME SEARCH MATCH')
        }


        return recipeMatchArray
    }
}