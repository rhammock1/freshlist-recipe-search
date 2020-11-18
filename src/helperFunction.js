const findRecipeType = function(recipeTypes, type) {
  return recipeTypes.find(type => type.id === type);
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