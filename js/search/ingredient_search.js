// Ingredient match
const ingredientMatch = (recipe, input, recipeMatchArray) => {
    let ingredientMatch = recipe.ingredients.filter(el =>
        el.ingredient.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
    if (ingredientMatch.length !== 0) {
        // console.log(recipe, 'INGREDIENT MATCH')
        // console.log('LENGHT ingredientMatch', ingredientMatch, "ID:", recipe.id)
        recipeMatchArray.push(recipe)
        return recipeMatchArray
    }
}