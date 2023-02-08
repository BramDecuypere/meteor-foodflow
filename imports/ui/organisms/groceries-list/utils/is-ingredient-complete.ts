import { ActiveList } from "/interfaces/active-list";

export const checkIsIngredientComplete = (
  activeList: ActiveList,
  name: string
) => {
  return (
    activeList.selectedIngredients.findIndex(
      (ingredient) => ingredient.name === name
    ) > -1
  );
};
