// Close, remove tag from DOM

const closeTag = (tag) => {
    // **TODO add removed tag to respective Tag Array
    tag.remove()
    console.log("Filter Close tag: ", tagArrayToSearch = tagArrayToSearch.filter(e => e !== tag.innerText));
    tagArraySearch()
}