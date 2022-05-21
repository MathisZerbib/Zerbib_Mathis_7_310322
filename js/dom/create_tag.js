// Create a tag in advancedSearch field
const createTag = (el, color) => {
    let tag = document.createElement('span')
    let tagClose = document.createElement('button')

    tagClose.className = 'far fa-times-circle btn text-white';
    tagClose.setAttribute('role', 'button')

    tag.innerHTML = el.innerHTML;
    tag.className = color + ' tag btn text-white px-2 mx-2  btn-sm mb-1';

    tagArea.appendChild(tag);
    tag.appendChild(tagClose)
    tagClose.addEventListener('click', () => {
        closeTag(tag)
    })
    addTagToTagArray(tag, color)
    tagArraySearch(tagArrayToSearch)
    removeTagFromList(tag, uniqueIngredientsClone)
    removeTagFromList(tag, uniqueUstensilesClone)
    removeTagFromList(tag, uniqueAppliancesClone)
    if (!uniqueIngredientsClone.includes(tag.innerText)) {
        console.log(uniqueIngredientsClone.includes(tag.innerText), tag.innerText, 'HEEEEEEEEEEEEEEEEEEEEEEEEEERE')

    }


}

const addTagToTagArray = (tag) => {

    tagArrayToSearch.push(tag.innerText)
}