// Description match
const descriptionMatch = (input, recipeArray) => {
    let descriptionMatch = recipes.filter(recipe => cleanString(recipe.description).includes(cleanString(input)))
    if (descriptionMatch.length !== 0) {
        descriptionMatch.map(el => {
            recipeArray.push(el)
        })
        console.log(descriptionMatch, 'DESCRIPTION SEARCH MATCH')

    }
}