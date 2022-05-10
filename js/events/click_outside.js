// Remove open when click outside of the button
window.addEventListener('click', function(event) {
    const clickOnBloc = event.target.closest('.sub-search__bloc');
    if (!clickOnBloc) {
        subsearchNames.forEach(element => {
            let filtersbox = document.getElementById('sub-search__' + element);
            const currentSubSearchButton = filtersbox.querySelector('.sub-search__button');
            const inputField = filtersbox.querySelector('.sub-search__button input');
            let ul = filtersbox.querySelector('.sub-search__taglist')
            ul.classList.remove('d-flex')
            let filterArrow = filtersbox.querySelector('.fa-angle-up')
            removeOpen(element, filtersbox, inputField, currentSubSearchButton);

            if (filterArrow)
                toggleList(ul, filterArrow, false)
        });
    };
});