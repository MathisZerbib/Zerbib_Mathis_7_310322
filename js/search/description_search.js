// Description match
const descriptionMatch = (input, recipeMatch) => {
    let descriptionMatch = recipes.filter(recipe => recipe.description.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
    if (descriptionMatch.length !== 0) {
        descriptionMatch.forEach(el => {
            recipeMatch.push(el)
        })
        console.log(descriptionMatch, 'DESCRIPTION SEARCH MATCH')

    }
}