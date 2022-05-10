// Clean Tag List
const cleanTagListDOM = (id) => {
    const tagListSection = document.querySelector(`#${id}__taglist`);
    while (tagListSection.lastChild) {
        tagListSection.removeChild(tagListSection.lastChild);
    }
}