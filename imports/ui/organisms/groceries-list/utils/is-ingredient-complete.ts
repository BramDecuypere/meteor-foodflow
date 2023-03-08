import { RecipeIngredient } from "/imports/api/recipes/recipes";
import { ActiveList } from "/interfaces/active-list";

export const checkIsIngredientComplete = (
  activeList: ActiveList,
  name: string
) => {
  return (
    activeList.selectedIngredients.findIndex((ingredient) => {
      const totalRecipeAmount = activeList.recipes.reduce((prev, current) => {
        const foundIngredient: RecipeIngredient | undefined =
          current.recipe.food.ingredients.find(
            (_ingredient) => _ingredient.amount === ingredient.amount
          );

        if (!foundIngredient) {
          return prev;
        }

        return prev + foundIngredient.amount!;
      }, 0);

      const foundExtraIngredient = activeList.extraIngredients.find(
        (_ingredient) => _ingredient.name === ingredient.name
      );

      const totalExtraIngredient = foundExtraIngredient?.amount || 0;

      return (
        ingredient.name === name &&
        ingredient.amount === totalRecipeAmount + totalExtraIngredient
      );
    }) > -1
  );
};
