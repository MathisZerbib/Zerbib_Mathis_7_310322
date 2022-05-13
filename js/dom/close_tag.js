// Close, remove tag from DOM

const closeTag = (tag) => {

    // **TODO add removed tag to respective Tag Array
    tag.remove()
    tagArrayToSearch = tagArrayToSearch.filter(e => e !== tag.innerText)

    // tag.visible = true
    // tag.classList.remove('already-selected');
    if (tagArrayToSearch.lenght == 0 && searchInput.value == '') {
        cleanDOM()
        defaultView()
    } else {
        cleanDOM()
        tagArraySearch()
            // console.log('IF TAGGGG', tagArrayToSearch)
    }
    console.log('Default TAGGGG', tagArrayToSearch)

}