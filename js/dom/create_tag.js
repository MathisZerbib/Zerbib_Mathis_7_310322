// Create a tag in advancedSearch field
const createTag = (el, color) => {
    let tag = document.createElement('span')
    let tagClose = document.createElement('button')

    tagClose.className = 'far fa-times-circle btn text-white';
    tagClose.setAttribute('role', 'button')

    tag.innerHTML = el.innerHTML;
    tag.className = color + ' tag btn text-white px-2 mx-2  btn-sm mb-1';
    tag.classList.add('tag-posted');

    tagArea.appendChild(tag);
    tag.appendChild(tagClose)
    tagClose.addEventListener('click', () => {
        closeTag(tag)
        triggerSearch(color)
    })
    triggerSearch(color)

function triggerSearch(color){
    switch (color) {
        case 'bg-primary':
            // console.log('bg-primary')
            addTagToTagArray(tag, color)
            cleanDOM()
            tagArraySearch(tag.innerText, 'ingredients')
            console.log('currentIngredients.filter(e => e !== tag.innerText);', tag.innerText)
            currentIngredients.filter(e => e !== tag.innerText);
        break;

        case 'bg-green':
            // console.log('bg-green')
            addTagToTagArray(tag, color)
            cleanDOM()
            tagArraySearch(tag.innerText, 'appliances')
            removeElementFromArray(tag.innerText, currentAppliances)


        break;

        case 'bg-red':
            // console.log('bg-red')
            addTagToTagArray(tag, color)
            cleanDOM()
            tagArraySearch(tag.innerText, 'ustensils')
            removeElementFromArray(tag.innerText, currentUstensils)


            break;
        default:
            break;
    }
    
}
// tagArrayToSearch.map(el => {
//     removeElementFromArray(el, getCurrentIngredients())
//     removeElementFromArray(el, getCurrentUstensils())
//     removeElementFromArray(el, getCurrentAppliances())
// })

}

const addTagToTagArray = (tag, color) => {
    let text = tag.innerText
    tagArrayToSearch.push({text, color})
}