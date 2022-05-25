// Ustensils match

const ustensileMatch = (recipe, input, recipeMatchArray) => {
    let ustensMatch = recipe.ustensils.filter(ustensil => ustensil.includes(input.toLocaleLowerCase()))

    if (ustensMatch.length !== 0) {
        recipeMatchArray.push(recipe)
        console.log(ustensMatch, 'Ustens MATCH')
    }
    return recipeMatchArray
}