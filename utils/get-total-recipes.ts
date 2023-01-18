import { SelectedRecipe } from "/interfaces/global-context";

export const getRecipesTotal = (selectedRecipes: SelectedRecipe[]) => {
  return selectedRecipes.reduce((prev, current) => {
    return prev + current.servings;
  }, 0);
};
