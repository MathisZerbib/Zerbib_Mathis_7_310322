const tagListSearch = (e, ul, inputField) => {

  if (e.key >= 65 && e.key <= 90)
  var buffer;
  let searchTagListFromInput = [];
  buffer = inputField.value;
  searchTagListFromInput.push(buffer);
  // console.log(searchTagListFromInput);
  var final_words = [];
  final_words.push(searchTagListFromInput[searchTagListFromInput.length - 1]);
  // console.log(final_words);
  
  let newArrayIngredients = [];
  let newArrayUstensils = [];
  let newArrayAppareils = [];
  let parentInput = ul.closest("div").id;
  let idDiv = parentInput.replace("sub-search__", "");
  if (e.key == 8 && searchTagListFromInput !== []) {
    searchTagListFromInput.pop();
  }



    switch (idDiv) {
      case "Ingrédient":
        // console.log("New Array from ingredient:", newArrayIngredients)

        if (buffer.length <= 2 && isFirstSearch ==true) {
          let searchTagIngredient = getCurrentIngredients();
          cleanTagListDOM(idDiv)
          buildTagArray(inputField, searchTagIngredient, idDiv);

        }else {
          let searchTagIngredient = getCurrentIngredients();

          for (let i = 0; final_words.length > i; i++) {
            searchTagIngredient = searchTagIngredient.filter(
              (ingredient) =>
                cleanString(ingredient)
                  .includes(cleanString(final_words[i]))
            );
  
            console.log('==================searchTagIngredient', searchTagIngredient)
            newArrayIngredients = [...new Set(searchTagIngredient)];
            cleanTagListDOM(idDiv);
            newArrayIngredients = [
              ...new Set(
                searchTagIngredient.map((element) => {
                  return cleanString(element)
                })
              ),
            ];
  
            // console.log(newArrayIngredients, 'newArrayIngredients')
          }
          buildTagArray(inputField, newArrayIngredients, idDiv);
        }

        break;
      case "Appareils":

        if (buffer.length <= 2) {
          let searchTagAppareils = getCurrentAppliances();
          cleanTagListDOM(idDiv)
          buildTagArray(inputField, searchTagAppareils, idDiv);

        }else {


        for (let j = 0; final_words.length > j; j++) {
          let searchTagAppareils = getCurrentAppliances();
          
          searchTagAppareils = searchTagAppareils.filter((appliance) =>
          cleanString(appliance)
              .includes(cleanString(final_words[j]))
          );
          newArrayAppareils = [...new Set(searchTagAppareils)];
          cleanTagListDOM(idDiv);

          newArrayAppareils = [
            ...new Set(
              newArrayAppareils.map((element) => {
                return cleanString(element);
              })
            ),
          ];
        }

        buildTagArray(inputField, newArrayAppareils, idDiv);
      }
        break;
      case "Ustensiles":
        if (buffer.length <= 2) {
          let searchTagUstensils = getCurrentUstensils()
          cleanTagListDOM(idDiv)
          buildTagArray(inputField, searchTagUstensils, idDiv);

        }else {

        for (let k = 0; final_words.length > k; k++) {
          let searchTagUstensils = getCurrentUstensils()
          searchTagUstensils = searchTagUstensils.filter((ustensil) =>
          cleanString(ustensil)
              .includes(cleanString(final_words[k]))
          );
          newArrayUstensils = [...new Set(searchTagUstensils)];
          cleanTagListDOM(idDiv);
          newArrayUstensils = [
            ...new Set(
              newArrayUstensils.map((element) => {
                return cleanString(element);
              })
            ),
          ];
        }

        buildTagArray(inputField, newArrayUstensils, idDiv);
      }
        break;
    }
  } 
