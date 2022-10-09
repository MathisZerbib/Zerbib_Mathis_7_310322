// Close, remove tag from DOM

const closeTag = (tag) => {

    // add removed tag to respective Tag Array

    tag.remove()
    console.log(tag.innerText,  '=======================')
    tag.classList.remove('tag-posted');
    tag = '';
    console.log('tagArrayToSearch', tagArrayToSearch.length)
    
    reloadSearch()
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
    // }

}