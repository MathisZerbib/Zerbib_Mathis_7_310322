// Title match
const recipeMatchName = (input, recipeMatchArray) => {
    let recipeMatch = recipes.filter(recipe => recipe.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
    if (recipeMatch.length !== 0) {
        recipeMatch.forEach(el => {
            recipeMatchArray.push(el)
        })
        return recipeMatchArray
    }
}