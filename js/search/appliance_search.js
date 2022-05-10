// Appliance Match 
const applianceMatch = (recipe, input, recipeMatchArray) => {
    if (recipe.appliance.toLocaleLowerCase().includes(input.toLocaleLowerCase())) {
        recipeMatchArray.push(recipe)
            // console.log(recipe, 'Appliance MATCH')
    }
}