import { ActiveList } from "/interfaces/active-list";

export const getExtraIngredientAmountByName = (
  activeList: ActiveList,
  name: string
) => {
  const foundExtraIngredient = activeList.extraIngredients.find(
    (_ingredient) => _ingredient.name === name
  );

  let totalExtraIngredient = 0;

  if (foundExtraIngredient) {
    totalExtraIngredient = foundExtraIngredient.amount || 0;
  }

  return totalExtraIngredient;
};
