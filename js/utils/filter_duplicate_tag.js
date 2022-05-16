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


// if (recipesDOM.length !== 50)

document.addEventListener('click', () => {
    // let uniqueIngredientsClone = matchArray.map(e => e.ingredients)
    // uniqueIngredientsClone = matchArray.map(recipe => (recipe.ingredients));
    // uniqueIngredientsClone = uniqueIngredientsClone.map(ingredients => (ingredients));
    let currentIngredientsArray = [];
    let currentUstensilesArray = [];
    let uniqueAppliancesArrray = [];


    matchArray.forEach(el => {
        el.ustensils.forEach(cUstensiles => {
            currentUstensilesArray.push(cUstensiles.toLocaleLowerCase())
        })
        el.ingredients.forEach(cIngredient => {
            currentIngredientsArray.push(cIngredient.ingredient.toLocaleLowerCase())
        })
        uniqueAppliancesArrray.push(el.appliance)
    })



    uniqueIngredientsClone = [...new Set(currentIngredientsArray)];
    uniqueUstensilesClone = [...new Set(currentUstensilesArray)];
    uniqueAppliancesClone = [...new Set(uniqueAppliancesArrray)];


    // console.log('uniqueIngredient If recipes DOM', uniqueIngredientsClone)
    console.log('uniqueIngredient =>', uniqueIngredientsClone, 'Ustensiles => ', uniqueUstensilesClone, 'Appliance', uniqueAppliancesClone)
})