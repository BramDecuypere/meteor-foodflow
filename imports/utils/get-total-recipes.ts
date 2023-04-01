import { Recipe } from "/imports/api/recipes/recipes";

export const getRecipesTotal = (selectedRecipes: Recipe[]) => {
  return selectedRecipes.reduce((prev, current) => {
    return prev + current.food.servings;
  }, 0);
};
