function removeTagFromList(tag, tagArray) {
    tagArray = tagArray.filter(e => e !== tag.innerText);
}