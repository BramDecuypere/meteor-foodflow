import { ActiveList } from "/interfaces/active-list";

export const checkIsIngredientComplete = (
  activeList: ActiveList,
  name: string,
  amount?: number
) => {
  return (
    activeList.selectedIngredients.findIndex(
      (ingredient) => ingredient.name === name && ingredient.amount === amount
    ) > -1
  );
};
