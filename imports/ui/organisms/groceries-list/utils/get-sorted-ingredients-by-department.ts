import { checkIsIngredientComplete } from "./is-ingredient-complete";
import { ActiveList } from "/interfaces/active-list";
import { IngredientsByDepartment } from "/interfaces/ingredients-by-department";

export const getSortedIngredientsByDepartment = (
  ingredientsByDepartment: IngredientsByDepartment,
  department: string,
  activeList: ActiveList
) => {
  return ingredientsByDepartment[department].sort(({ name }) => {
    const isIngredientComplete = checkIsIngredientComplete(activeList, name);

    if (isIngredientComplete) {
      return 1;
    }

    return -1;
  });
};
