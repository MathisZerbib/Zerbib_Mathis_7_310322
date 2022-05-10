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