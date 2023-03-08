import { getExtraIngredientAmountByName } from "./get-extra-ingredient-amount-by-name";
import { getTotalRecipeAmountByName } from "./get-total-recipe-amount";
import { ActiveList } from "/interfaces/active-list";

export const checkIsIngredientComplete = (
  activeList: ActiveList,
  name: string
) => {
  const selectedIngredientToCheck = activeList.selectedIngredients.find(
    (ingredient) => ingredient.name === name
  );

  if (!selectedIngredientToCheck) {
    return false;
  }

  if (selectedIngredientToCheck.amount === undefined) {
    return true;
  }

  const selectedAmountOfIngredient = selectedIngredientToCheck.amount;

  const totalRecipeAmount = getTotalRecipeAmountByName(activeList, name);

  const totalExtraIngredient = getExtraIngredientAmountByName(activeList, name);

  return (
    selectedAmountOfIngredient === totalExtraIngredient + totalRecipeAmount
  );
};
