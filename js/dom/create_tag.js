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

    tagArrayToSearch.forEach(el => {
        removeElementFromArray(el, uniqueIngredientsClone)
        removeElementFromArray(el, uniqueUstensilesClone)
        removeElementFromArray(el, uniqueAppliancesClone)
    })
    if (uniqueIngredientsClone.includes(tag.innerText) == -1) {
        console.log("Unique ingredient", uniqueIngredientsClone.includes(tag.innerText), 'dont match', tag.innerText, 'HEEEEEEEEEEEEEEEEEEEEEEEEEERE')

    }
}

const addTagToTagArray = (tag) => {
    tagArrayToSearch.push(tag.innerText)




}