import { getIngredientsByDepartment } from "./get-ingredients-by-department";
import { checkIsIngredientComplete } from "./is-ingredient-complete";
import { RecipeIngredient } from "/imports/api/recipes/recipes";
import { ActiveList } from "/interfaces/active-list";

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
  activeList: ActiveList,
  department: string
) => {
  return getIngredientsByDepartment(activeList)[department].sort(
    sortIngredientsByDepartment(activeList)
  );
};
