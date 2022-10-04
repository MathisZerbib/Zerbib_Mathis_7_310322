// Close, remove tag from DOM

const closeTag = (tag) => {

    // add removed tag to respective Tag Array

    tag.remove()
    console.log(tag.innerText,  '=======================')
    tagArrayToSearch.filter(e => e !== tag.innerText)

    // if (uniqueIngredients.includes(tag.innerText) && !uniqueIngredientsClone.includes(tag.innerText)) {
    //     console.log('Dont contains On close ingrédient', tag.innerText)
    //     uniqueIngredientsClone.push(tag.innerText)

    //     console.log('Ingrédients after CLOSE', uniqueIngredientsClone)

    // } else if (uniqueUstensiles.includes(tag.innerText) && !uniqueUstensilesClone.includes(tag.innerText)) {
    //     console.log('On close  ustensils includes', tag.innerText)
    //     console.log('Ustensiles after CLOSE', uniqueUstensilesClone)


    //     uniqueUstensilesClone.push(tag.innerText)
    // } else if (uniqueAppliances.includes(tag.innerText) && !uniqueAppliancesClone.includes(tag.innerText)) {
    //     console.log('Dont contains On close Appliance', tag.innerText)
    //     console.log('Appliance  after CLOSE', uniqueAppliancesClone)


    //     uniqueAppliancesClone.push(tag.innerText)
    // }
    tag.visible = true
    tag.classList.remove('tag-posted');
    tag = '';
    console.log('tagArrayToSearch', tagArrayToSearch.length)

    // if (tagArrayToSearch.length !== 0) {
    //     cleanDOM()
    // tagArrayToSearch.map(el=>tagArraySearch(el.text, el.color) )
        

    //     console.log('Tag Array emtpy', 'searchInput empty')

    // } else {
    //     console.log('Default TAGGGG', tagArrayToSearch, 'searchInput', searchInput.value)
    //     cleanDOM();
    //     displayData(getAllRecipes())
    // }
    
    // else {
    //     cleanDOM()
    //     console.log('On close tag tagArrayToSearch', tagArrayToSearch)
    //     tagArraySearch(tagArrayToSearch)
    //         // console.log('IF TAGGGG', tagArrayToSearch)
    // }


    // if (tagArrayToSearch == [] && searchInput.value !== '') {
    //     // cleanDOM();
    //     // defaultView();
    //     console.log('TODO AFFICHER LA RECHERCHE PRINCIPALE')
    // } else if(tagArrayToSearch ==! []) {
    //     // cleanDOM();
    //     // defaultView();

    // }

    // if (tagFilters.innerText == '') {
    //     recipeMatchArray = []
    // }

}