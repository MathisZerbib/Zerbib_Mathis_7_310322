// Appliance Match 
const applianceMatch = (recipe, input, recipeMatchArray) => {

    if (cleanString(recipe.appliance).includes(cleanString(input))) {
        recipeMatchArray.push(recipe)
        console.log(recipeMatchArray, 'Appliance MATCH')
    }
}