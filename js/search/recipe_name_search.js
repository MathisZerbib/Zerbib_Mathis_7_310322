// Title match
const recipeMatchName = (input, recipeMatchArray) => {
    // To do If filter is active 
    // if active recipesDOM
    let recipeMatch = []
    if (!recipesDOM.lenght > 50) {
        recipeMatch = recipes.filter(recipe => cleanString(recipe.name).includes(cleanString(input)))

    }
    recipeMatch = recipesDOM.filter(recipe => cleanString(recipe.name).includes(cleanString(input)))

    if (recipeMatch.length !== 0) {
        recipeMatch.map(el => {
            recipeMatchArray.push(el)
        })
        
        console.log(recipeMatchArray, 'NAME SEARCH MATCH')
        return recipeMatchArray
    }
}