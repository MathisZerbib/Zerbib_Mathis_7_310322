// Title match
const recipeMatchName = (input, recipeMatchArray) => {
    // To do If filter is active 
    // if active recipesDOM
    let recipeMatch = []
    if (!recipesDOM.lenght > 50) {
        recipeMatch = recipes.filter(recipe => recipe.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()))

    }
    recipeMatch = recipesDOM.filter(recipe => recipe.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()))

    if (recipeMatch.length !== 0) {
        recipeMatch.forEach(el => {
            recipeMatchArray.push(el)
        })
        
        console.log(recipeMatchArray, 'NAME SEARCH MATCH')
        return recipeMatchArray
    }
}