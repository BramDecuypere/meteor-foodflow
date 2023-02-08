import { getSortedIngredientsByDepartment } from "./get-sorted-ingredients-by-department";
import { getAmountOfCheckedIngredients } from "./getAmountOfCheckedIngredients";
import { ActiveList } from "/interfaces/active-list";

export const isDepartmentCompleted = (
  ingredientsByDepartment: any,
  department: string,
  activeList: ActiveList
) => {
  const sortedIngredientsByList = getSortedIngredientsByDepartment(
    ingredientsByDepartment,
    department,
    activeList
  );

  const amountOfCheckedIngredients = getAmountOfCheckedIngredients(
    sortedIngredientsByList,
    activeList
  );

  return amountOfCheckedIngredients === sortedIngredientsByList.length;
};
