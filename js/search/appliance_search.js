// Appliance Match 
const applianceMatch = (recipe, input, recipeArray) => {
    if (cleanString(recipe.appliance).includes(cleanString(input))) {
        recipeArray.push(recipe)
        console.log(recipeArray, 'Appliance MATCH')
    }
}