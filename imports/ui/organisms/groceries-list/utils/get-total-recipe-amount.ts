import { ActiveList } from "/interfaces/active-list";

export const getTotalRecipeAmountByName = (
  activeList: ActiveList,
  name: string
) => {
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

  return totalRecipeAmount;
};
