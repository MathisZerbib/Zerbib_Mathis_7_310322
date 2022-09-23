// Ingredient match
const ingredientMatch = (input, recipeMatchArray) => {
    if (recipeMatchArray.length === 0 || undefined || []) {
        getAllRecipes().map((recipe) => {
            recipe.ingredients.map(el => {
                // Escape accents and Capital letters 
                el.ingredient = cleanString(el.ingredient);
                input = cleanString(input);


                if (el.ingredient.includes(input)) {
                    // console.log('LENGHT ingredientMatch', ingredientMatch, "ID:", recipe.id)
                    recipeMatchArray.push(recipe)
                    console.log(el.ingredient, 'Ingredient MATCH')
                }
            })
        })
    } else {
        recipeMatchArray.map((recipe) => {
            recipe.ingredients.map(el => {
                // Escape accents and Capital letters 
                el.ingredient = cleanString(el.ingredient);
                input = cleanString(input);


                if (el.ingredient.includes(input)) {
                    // console.log('LENGHT ingredientMatch', ingredientMatch, "ID:", recipe.id)
                    recipeMatchArray.push(recipe)
                    console.log(el.ingredient, 'Ingredient MATCH')
                }
            })
        })
    }


}