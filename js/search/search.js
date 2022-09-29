const globalSearch = (filter, recipeMatch) => {
  // filterArray
  // if the filter parameter is an arrray
  if (Array.isArray(filter)) {
    // filter.map((e) => {
    //   // if the filter parameter is an arrray
    //   recipeMatchName(e, recipeMatch)
    //   console.log('RETURNED Name Search match :',recipeMatch)

    //   descriptionMatch(e, recipeMatch)
    //   console.log('RETURNED Desc Search match :',recipeMatch)

    //   ingredientMatch(e, recipeMatch)
    //   console.log('RETURNED Ingredient Search match :',recipeMatch)


    // });
  } else {
    recipeMatchName(filter, recipeMatch);
    descriptionMatch(filter, recipeMatch);
    ingredientMatch(filter, recipeMatch);
    
  }

  // ustensilsMatch(filter, recipeMatch)
  // applianceMatch(filter, recipeMatch)

  //else {
  //   // const results = recipeMatch.filter(recipe => {
  //   //   // 👇️ using OR (||) operator
  //   //   return recipe.name.includes(filter) || recipe.description.includes(filter);
  //   // });

  //   // console.log(results)

  //     // recipeMatch.map((recipe) => {
  //     //   ingredientMatch(recipe, filter, recipeMatch)
  //     //   ustensilsMatch(recipe, filter, recipeMatch)
  //     // })

  // }
};

function affineWithTag(filter, recipeMatch) {
  ingredientMatch(filter, recipeMatch);
  ustensilsMatch(filter, recipeMatch);
  applianceMatch(filter, recipeMatch);
}

// const affineSearch = (filterArray, recipeMatch) => {

//   console.log('affineSearch filterArray, ', filterArray, recipeMatch)

//   // const filters = filterArray;

//   // const filteredData = recipeMatch.map(( recipe ) => recipe.includes());
//   // const filteredData = recipeMatch.filter((el)=> {

//   // })
//   //     const data = [{type: "meat", food: "hamburger"}, {type:"fruit", food:"banana"}, {type:"fish", food: "red snapper"}, {type:"vegetables", food:"fungi"}]

//   // let filter1 = 'meat'
//   // let filter2 = 'fruit'

//   // const filters = [filter1, filter2];

//   // const filteredData = data.filter(({ type }) => filters.includes(type));
//   // console.log(filteredData);

//   //const data = recipeMatch
//   const data = [{ name: "meat", description: "hamburger" }, { name: "fruit", description: "banana" }, { name: "fish", description: "red snapper" }, { name: "vegetables", description: "fungi" }]
//   //{
//   //   "id": 1,
//   //   "name": "Limonade de Coco",
//   //   "servings": 1,
//   //   "ingredients": [{
//   //           "ingredient": "Lait de coco",
//   //           "quantity": 400,
//   //           "unit": "ml"
//   //       },
//   //       {
//   //           "ingredient": "Jus de citron",
//   //           "quantity": 2
//   //       },
//   //       {
//   //           "ingredient": "Crème de coco",
//   //           "quantity": 2,
//   //           "unit": "cuillères à soupe"
//   //       },
//   //       {
//   //           "ingredient": "Sucre",
//   //           "quantite": 30,
//   //           "unit": "grammes"
//   //       },
//   //       {
//   //           "ingredient": "Glaçons"
//   //       }
//   //   ],
//   //   "time": 10,
//   //   "description": "Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée",
//   //   "appliance": "Blender",
//   //   "ustensils": ["cuillère à Soupe", "verres", "presse citron"]
//   // },

//   const filters = filterArray

//   const filteredByName = data.filter(({ name, description }) => filters.includes(name) && filters.includes(description));
//   // const filteredByDesc = data.filter(({ description }) => filters.includes(description));
//   // const filteredByIngredients = data.filter(({ ingredients }) => filters.includes(ingredients));

//   console.log('results', filteredByName);

//   // recipeMatchName(filter, recipeMatch)
//   // descriptionMatch( filter, recipeMatch)

//   // if (filteredByName.recipe include the recipes in filteredByDesc)
//   // filterArray

//   //     let result = filterArray.map( filter => {

//   // });
//   return filteredByName

// }
// function affineSearch(currentMatchArray, filter ) {
//     currentMatchArray.map((recipe) => {
//         ingredientMatch( filterValue, currentMatchArray, recipe)
//         applianceMatch( filterValue, currentMatchArray, recipe)
//         ustensilsMatch( filterValue, currentMatchArray, recipe)
//     })
//     recipeMatch = currentMatchArray;

// }
