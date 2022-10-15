let recipes = [];
let filteredRecipes = [];
let currentIngredients = [];
let currentAppliances = [];
let currentUstensils = [];

let allIngredients = [];
let allAppliances = [];
let allUstensils = [];
let isFirstSearch = true;


let textEmpty = document.querySelector(".title-empty");


/**
 * Simule une connection à une base de donnée avec un fichier json
 */

const init = async () => {
  const req = await fetch("./public/recipes.json");
  if (!req.ok) {
    throw "Données momentanément indisponible";
  }
  
  const data = await req.json();
  // console.log(data)
  recipes = data;
  filteredRecipes = [...data];
  displayData(recipes);

 
};

/**
 * Récupère tous les ingrédients de toutes les recettes
 * @returns {array} Tableau contenant tous les ingrédients de toutes les recettes
 */
const getAllIngredients = () => {
  if (allIngredients.length === 0) {
    recipes.map((recipe) => {
      recipe.ingredients.map((ingredients) => {
        const ingredient = ingredients.ingredient;
        if (!allIngredients.includes(cleanString(ingredient))) {
          allIngredients = [...allIngredients, cleanString(ingredient)];
        }
      });
    });
  }

  return allIngredients.sort((a, b) => a.localeCompare(b));
};

/**
 * Récupère tous les appareils de toutes les recettes
 * @returns {array} Tableau contenant tous les appareils de toutes les recettes
 */
const getAllAppliances = () => {
  if (allAppliances.length === 0) {
    recipes.map((recipe) => {
      if (!allAppliances.includes(cleanString(recipe.appliance))) {
        allAppliances = [...allAppliances, cleanString(recipe.appliance)];
      }
    });
  }

  return allAppliances.sort((a, b) => a.localeCompare(b));
};

/**
 * Récupère tous les ustensiles de toutes les recettes
 * @returns {array} Tableau contenant tous les ustensiles de toutes les recettes
 */
const getAllUstensils = () => {
  if (allUstensils.length === 0) {
    recipes.map((recipe) => {
      recipe.ustensils.map((ustensile) => {
        if (!allUstensils.includes(cleanString(ustensile))) {
          allUstensils = [...allUstensils, cleanString(ustensile)];
        }
      });
    });
  }

  return allUstensils.sort((a, b) => a.localeCompare(b));
};

/**
 * Récupère une recette avec son id
 * @returns {object} Objet contenant toutes les recettes
 */

const getAllRecipes = () => {
  return recipes;
};

/**
 * Set la valeur des recettes actuelles
 * @param {object} data
 * @returns {object} Objet contenant toutes les recettes
 */
const setfilteredRecipes = (data) => {
  data = [...new Set(data)];
  filteredRecipes = data;

  // setCurrentIngredients()
  // setCurrentAppliances()
  // setCurrentUstensils()

  return filteredRecipes;
};

/**
 * Recupère la valeur des recettes actuelles
 * @returns {object} Objet contenant toutes les recettes actuelles
 */
const getfilteredRecipes = () => {
  return filteredRecipes;
};

/**
 * Récupère la valeur des ingrédients des recettes actuelles
 * @returns {object} Objet contenant toutes les ingredients actuels
 */
const getCurrentIngredients = () => {
  if (currentIngredients.length === 0) {
    filteredRecipes.map((recipe) => {
      recipe.ingredients.map((ingredients) => {
        const ingredient = ingredients.ingredient;

        if (!currentIngredients.includes(cleanString(ingredient))) {
          currentIngredients = [
            ...currentIngredients,
            cleanString(
            ingredient),
          ];
        }
      });
    });
  }

  return currentIngredients.sort((a, b) => a.localeCompare(b));
};

/**
 * Récupère la valeur des appliances des recettes actuelles
 * @returns {object} Objet contenant toutes les appliances actuels
 */
const getCurrentAppliances = () => {
  if (currentAppliances.length === 0) {
    filteredRecipes.map((recipe) => {
      if (!currentAppliances.includes(cleanString(recipe.appliance))) {
        currentAppliances = [
          ...currentAppliances,
          cleanString(
          recipe.appliance),
        ];
      }
    });
  }

  return currentAppliances.sort((a, b) => a.localeCompare(b));
};

/**
 * Récupère la valeur des ustensils des recettes actuelles
 * @returns {object} Objet contenant toutes les ustensils actuels
 */
const getCurrentUstensils = () => {
  if (currentUstensils.length === 0) {
    filteredRecipes.map((recipe) => {
      recipe.ustensils.map((ustensile) => {
        if (!currentUstensils.includes(cleanString(ustensile))) {
          currentUstensils = [...currentUstensils, cleanString(ustensile)];
        }
      });
    });
  }

  return currentUstensils.sort((a, b) => a.localeCompare(b));
};

/**
 * Récupère une recette avec son id
 * @param {number} id
 * @returns {object} Objet contenant tous les détails de la recette
 */
const getRecipe = (id) => {
  const recipe = recipes.filter((recipe) => recipe.id === id);

  if (recipe.length !== 1) {
    console.error("Recette introuvable.");
    return;
  }
  return recipe[0];
};


