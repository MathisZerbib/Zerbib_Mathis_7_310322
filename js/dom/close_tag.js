// Close, remove tag from DOM

const closeTag = (tag) => {

    // **TODO add removed tag to respective Tag Array
    tag.remove()
    tagArrayToSearch = tagArrayToSearch.filter(e => e !== tag.innerText)

    // if (uniqueIngredients.includes(tag.innerText)) {
    //     console.log('On close ingrédients includes', tag.innerText)
    //     uniqueIngredientsClone.push(tag.innerText)
    // } else if (uniqueUstensils.includes(tag.innerText)) {
    //     console.log('On close  ustensils includes', tag.innerText)

    //     uniqueUstensilesClone.push(tag.innerText)
    // } else if (uniqueAppliances.includes(tag.innerText)) {
    //     console.log('On close  appliance includes', tag.innerText)

    //     uniqueAppliancesClone.push(tag.innerText)
    // }
    // tag.visible = true
    // tag.classList.remove('already-selected');
    if (tagArrayToSearch == [] && searchInput.value == '') {
        cleanDOM();
        defaultView();
        // uniqueIngredientsClone = uniqueIngredients
        // uniqueAppliancesClone = uniqueAppliances
        // uniqueUstensilesClone = uniqueUstensils
        console.log('Tag Array emtpy', 'searchInput empty')

    } else {
        cleanDOM()
        console.log('On close tag tagArrayToSearch', tagArrayToSearch)
            // tagArraySearch(tagArrayToSearch)
            // console.log('IF TAGGGG', tagArrayToSearch)
    }
    console.log('Default TAGGGG', tagArrayToSearch, 'searchInput', searchInput.value)
    if (tagArrayToSearch == [] && searchInput.value !== '') {

        console.log('TODO AFFICHER LA RECHERCHE PRINCIPALE')
    } else {
        defaultView();
    }
    tagArraySearch(tagArrayToSearch)

}