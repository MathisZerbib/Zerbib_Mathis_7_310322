// Description match
const descriptionMatch = (input, recipeMatchArray) => {
    let descriptionMatch = recipes.filter(recipe => recipe.description.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
    if (descriptionMatch.length !== 0) {
        descriptionMatch.forEach(el => {
            recipeMatchArray.push(el)
        })
    }
}