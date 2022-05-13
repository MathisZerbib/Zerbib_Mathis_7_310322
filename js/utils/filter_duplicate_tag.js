// Filter duplicate tags 
let uniqueIngredients = [...new Set(ingredientsArray.map(element => {
    element = element.replace('.', '')
    return element.toLowerCase();
}))];
let uniqueAppliances = [...new Set(appliancesArray.map(element => {
    element = element.replace('.', '')
    return element.toLowerCase();
}))];
let uniqueUstensils = [...new Set(ustensilsArray.map(element => {
    element = element.replace('.', '')
    return element.toLowerCase();
}))];

uniqueIngredients.sort((a, b) => a.localeCompare(b))
uniqueAppliances.sort((a, b) => a.localeCompare(b))
uniqueUstensils.sort((a, b) => a.localeCompare(b))

let uniqueIngredientsClone = uniqueIngredients;
let uniqueAppliancesClone = uniqueAppliances;
let uniqueUstensilsClone = uniqueUstensils;