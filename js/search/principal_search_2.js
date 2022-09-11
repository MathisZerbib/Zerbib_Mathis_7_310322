// function searchPrincipalInput(e) {
//   const input = searchInput.value;
//   let searchMatchArray = [];
//   let searchFromInput = [];
//   tagArrayToSearch = [...new Set(tagArrayToSearch)];

//   if (e.key == 8 && searchFromInput !== []) {
//     searchFromInput.pop();
//   }

//   let arrayFromInputSearch;

//   arrayFromInputSearch = e.target.value;

//   if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
//   }
//   arrayFromInputSearch = arrayFromInputSearch.split(" ");

//   arrayFromInputSearch = arrayFromInputSearch.filter(function (el) {
//     return el != "";
//   });

//   console.log("arrayFromInputSearch", arrayFromInputSearch);
//   // searchFromInput = searchFromInput.split(/(\s+)/)
//   searchFromInput = searchFromInput.push(arrayFromInputSearch);
//   var final_words_from_input = [];
//   final_words_from_input.push(searchFromInput[searchFromInput.length - 1]);
//   final_words_from_input.pop();

//   if (e.target.value.length >= 3) {
//     if (arrayFromInputSearch.length > 1) {
//       multiTagSearch(arrayFromInputSearch);
//     }
//   }
//   console.log("arrayFromInputSearch.length", arrayFromInputSearch.length);

//   if (
//     (e.target.value.length >= 3 && arrayFromInputSearch.length == 1) ||
//     (e.target.value.length >= 3 && e.inputType === "deleteContentBackward")
//   ) {
//     if (tagArrayToSearch.length >= 1) {
//       console.log(
//         "Search In recipes:",
//         recipeMatchArray,
//         "Tag not Empty",
//         tagArrayToSearch
//       ),
//         "principal search",
//         searchInput;

//       for (let i = 0; recipeMatchArray.length > i; i++) {
//         recipeMatchName(input, searchMatchArray);
//         ingredientMatch(recipeMatchArray[i], input, searchMatchArray);
//         descriptionMatch(input, searchMatchArray);
//       }
//     } else {
//       for (let j = 0; recipesDOM.length > j; j++) {
//         recipeMatchName(input, searchMatchArray);
//         ingredientMatch(recipesDOM[j], input, searchMatchArray);
//         descriptionMatch(input, searchMatchArray);
//       }
//     }

//     searchMatchArray = [...new Set(searchMatchArray)];
//     console.log("Principal search Match ID:", searchMatchArray);

//     cleanDOM();
//     displayData(searchMatchArray);
//   }
//   let recipesCardDOM = document.querySelectorAll(".recipe-card");

//   if (
//     searchMatchArray.length == 0 &&
//     recipesCardDOM.length == 0 &&
//     input.length >= 3
//   ) {
//     if ((isMatching = false && searchMatchArray.length == 0)) {
//       cleanDOM();
//       defaultViewDOM();
//       displayError();
//       console.log(recipesCardDOM.length, "ERROR DISPLAYED");
//     }
//     cleanDOM();
//     defaultViewDOM();
//     displayError();
//     console.log(recipesCardDOM.length, "ERROR DISPLAYED");

//     console.log("Min char 3", input.length);
//   } else if (arrayFromInputSearch.length == 0) {
//     if (searchMatchArray.length == 0 && tagArrayToSearch.length >= 1) {
//       // cleanDOM();

//       // tagArraySearch(tagArrayToSearch)

//       // displayData(searchMatchArray);

//       hideError();
//       console.log(
//         "searchMatchArray.length",
//         searchMatchArray.length,
//         "tagArrayToSearch.length",
//         tagArrayToSearch.length
//       );
//     } else if (searchMatchArray.length == 0) {
//       console.log("searMatch Array", searchMatchArray.length);
//       displayError();
//       cleanDOM();
//       defaultView();
//     }
//   } else {
//     console.log("Hide Error");
//     // hideError()
//   }
// }
