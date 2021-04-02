// const findRecipeType = function(recipeTypes, rtype) {
//   return recipeTypes.find(type => type.type === rtype);
// }

// const findRecipe = function(recipes, recipeId) {
//   let recipe;
//   recipe = recipes.find(recipe => recipe.id === Number(recipeId));
//   console.log(recipe);
//   return recipe;
// }

const getRecipesForType = function(recipes, type) {
  return (!type) ? recipes : recipes.filter(recipe => recipe.recipeType === type)
}

const getRecipeForSearch = function(recipes, searchTerm) {
  let searchResults = [];
  recipes.find(recipe => {
    if (recipe.name.trim().toLowerCase().includes(searchTerm.toLowerCase().trim())) {
      searchResults.push(recipe);
    }
  })
  
  return searchResults;
}

export {
  // findRecipeType,
  // findRecipe,
  getRecipesForType,
  getRecipeForSearch,
}