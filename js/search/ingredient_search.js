// Ingredient match
const ingredientMatch = (recipe, input, recipeMatchArray) => {
    let ingredientMatch = recipe.ingredients.filter(el =>

        // Escape accents and Capital letters 
        el.ingredient.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").includes(input.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")))
    if (ingredientMatch.length !== 0) {
        console.log(ingredientMatch, 'INGREDIENT SEARCH MATCH')
            // console.log('LENGHT ingredientMatch', ingredientMatch, "ID:", recipe.id)
        recipeMatchArray.push(recipe)
        return recipeMatchArray
    }
}