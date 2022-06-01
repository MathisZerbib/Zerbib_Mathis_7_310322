// Appliance Match 
const applianceMatch = (recipe, input, recipeMatch) => {
    if (recipe.appliance.toLocaleLowerCase().includes(input.toLocaleLowerCase())) {
        recipeMatch.push(recipe)
        console.log(recipeMatch, 'Appliance MATCH')
    }
}