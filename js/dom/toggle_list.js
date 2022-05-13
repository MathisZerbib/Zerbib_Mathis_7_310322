const toggleList = (ul, filterArrow, toggle) => {
    if (toggle == true) {
        ul.classList.add('d-flex')
        filterArrow.classList.remove('fa-angle-down')
        filterArrow.classList.add('fa-angle-up')
    } else {
        ul.classList.remove('d-flex')
        filterArrow.classList.remove('fa-angle-up')
        filterArrow.classList.add('fa-angle-down')
        toggle = false;
    }

}