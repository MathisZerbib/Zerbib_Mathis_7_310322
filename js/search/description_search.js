// Description match
const descriptionMatch = (input, recipeMatchArray) => {
    let descriptionMatch = recipes.filter(recipe => cleanString(recipe.description).includes(cleanString(input)))
    if (descriptionMatch.length !== 0) {
        descriptionMatch.map(el => {
            recipeMatchArray.push(el)
        })
        console.log(recipeMatchArray, 'DESCRIPTION SEARCH MATCH')
        return recipeMatchArray

    }
}