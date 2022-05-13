// Remove open class and reset state
const removeOpen = (el, filtersbox, inputField, currentSubSearchButton) => {
    if (inputField.value.length >= 3) {
        currentSubSearchButton.classList.remove('open');
        filtersbox.classList.remove('col-lg-5');
        filtersbox.classList.add('col-lg-2');
    } else {
        currentSubSearchButton.classList.remove('open');
        inputField.removeAttribute('type');
        inputField.setAttribute('type', 'button');
        inputField.setAttribute('value', el);
        filtersbox.classList.remove('col-lg-5');
        filtersbox.classList.add('col-lg-2');
    }
}