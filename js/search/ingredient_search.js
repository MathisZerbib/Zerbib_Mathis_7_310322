// Ingredient match
const ingredientMatch = (recipe, input, recipeMatchArray) => {
    recipe.ingredients.map(el => {
    // Escape accents and Capital letters 
    el.ingredient = cleanString(el.ingredient);
    input = cleanString(input);

    
    if (el.ingredient.includes(input)) {
            // console.log('LENGHT ingredientMatch', ingredientMatch, "ID:", recipe.id)
        recipeMatchArray.push(recipe)
        console.log(el.ingredient, 'Ingredient MATCH')
        return recipeMatchArray
        }
})
}