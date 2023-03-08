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

  const totalRecipeAmount = activeList.recipes.reduce((prev, current) => {
    const foundIngredient = current.recipe.food.ingredients.find(
      (_ingredient) => _ingredient.name === name
    );

    if (!foundIngredient) {
      return prev;
    }

    let amount = 0;

    if (foundIngredient) {
      const foundIngredientAmount = foundIngredient
        ? foundIngredient.amount || 0
        : 0;
      debugger;
      amount =
        (foundIngredientAmount / current.recipe.food.servings) *
        current.servings;
    }

    return prev + amount;
  }, 0);

  const foundExtraIngredient = activeList.extraIngredients.find(
    (_ingredient) => _ingredient.name === name
  );

  let totalExtraIngredient = 0;

  if (foundExtraIngredient) {
    totalExtraIngredient = foundExtraIngredient.amount || 0;
  }

  debugger;

  return (
    selectedAmountOfIngredient === totalExtraIngredient + totalRecipeAmount
  );
};
