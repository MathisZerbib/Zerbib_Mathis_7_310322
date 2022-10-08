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
        closeTag(tag, color)
        console.log("tagArrayToSearch", tagArrayToSearch)
        for(let i =0;tagArrayToSearch.length > i; i++) {
            const index = tagArrayToSearch[i].text.indexOf(tag.innerText);
            if (index > -1) { // only splice array when item is found
                tagArrayToSearch.splice(index, 1); // 2nd parameter means remove one item only
            }
    
        }


// array = [2, 9]   
    })

const addTagToTagArray = (tag, color) => {
    let text = tag.innerText
    tagArrayToSearch.push({text, color})
};
    triggerSearch(color)

function triggerSearch(color){
    switch (color) {
        case 'bg-primary':
            // console.log('bg-primary')
            const cards = document.querySelectorAll(".filtered");
            addTagToTagArray(tag, color)
            tagArraySearch(tag.innerText, 'ingredients', cards)

            
            console.log('currentIngredients.filter(e => e !== tag.innerText);', tag.innerText)
        
        break;

        case 'bg-green':
            // console.log('bg-green')
            addTagToTagArray(tag, color)
            tagArraySearch(tag.innerText, 'appliances')
            removeElementFromArray(tag.innerText, currentAppliances)


        break;

        case 'bg-red':
            // console.log('bg-red')
            addTagToTagArray(tag, color)
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

