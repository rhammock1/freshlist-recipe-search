const findRecipeType = function(recipeTypes, rtype) {
  return recipeTypes.find(type => type.id === rtype);
}

const findRecipe = function(recipes, recipeId) {
  return recipes.find(recipe => recipe.id === recipeId);
}

const getRecipesForType = function(recipes, type) {
  return (!type) ? recipes : recipes.filter(recipe => recipe.recipeType === type)
}

export {
  findRecipeType,
  findRecipe,
  getRecipesForType,
}