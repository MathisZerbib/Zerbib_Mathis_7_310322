// Ingredient match
const ingredientMatch = (recipe, input, recipeMatchArray) => {
    let ingredientMatchRecipe =  recipe.ingredients.map(el => {
    // Escape accents and Capital letters 
    el.ingredient = cleanString(el.ingredient);
    input = cleanString(input);

    
    if (el.ingredient.includes(input)) {
            // console.log('LENGHT ingredientMatch', ingredientMatch, "ID:", recipe.id)
        recipeMatchArray.push(recipe)
        return recipeMatchArray
        }
})
}