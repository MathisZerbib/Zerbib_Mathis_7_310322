/* Event Key principal Search Algo A */
let searchInput = document.getElementById("main-search");
function setKeyupOnSelector (selector) {
    selector.addEventListener('keyup', (e) => { searchPrincipalInput(e) });
}
setKeyupOnSelector(searchInput)
