import { checkIsIngredientComplete } from "./is-ingredient-complete";
import { RecipeIngredient } from "/imports/api/recipes/recipes";
import { ActiveList } from "/interfaces/active-list";

export const getAmountOfCheckedIngredients = (
  sortedIngredientsOfDepartment: RecipeIngredient[],
  activeList: ActiveList
) => {
  return sortedIngredientsOfDepartment.reduce((prev, curr) => {
    if (checkIsIngredientComplete(activeList, curr.name)) {
      return prev + 1;
    }

    return prev;
  }, 0);
};
