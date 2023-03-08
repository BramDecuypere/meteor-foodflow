import { checkIsIngredientComplete } from "./is-ingredient-complete";
import { RecipeIngredient } from "/imports/api/recipes/recipes";
import { ActiveList } from "/interfaces/active-list";
import { IngredientsByDepartment } from "/interfaces/ingredients-by-department";

export const sortIngredientsByDepartment =
  (activeList: ActiveList) =>
  ({ name }: RecipeIngredient) => {
    const isIngredientComplete = checkIsIngredientComplete(activeList, name);

    if (isIngredientComplete) {
      return 1;
    }

    return -1;
  };

export const getSortedIngredientsByDepartment = (
  ingredientsByDepartment: IngredientsByDepartment,
  department: string,
  activeList: ActiveList
) => {
  return ingredientsByDepartment[department].sort(
    sortIngredientsByDepartment(activeList)
  );
};
