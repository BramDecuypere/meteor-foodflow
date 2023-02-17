import { RecipeIngredient } from "/imports/api/recipes/recipes";
import { ActiveList } from "/interfaces/active-list";
import { IngredientsByDepartment } from "/interfaces/ingredients-by-department";

const getCompleteIngredientsList = (activeList: ActiveList) =>
  activeList.recipes.reduce((ingredientsList, activeListItem) => {
    if (!activeListItem) return ingredientsList;

    const ingredientsAdjustedToNewServingSize =
      activeListItem.recipe.food.ingredients.map((recipeIngredient) => {
        const recipe = activeListItem.recipe;
        const servings = activeListItem.servings;
        const amount = recipeIngredient.amount
          ? (recipeIngredient.amount / recipe.food.servings) * servings
          : undefined;

        return {
          ...recipeIngredient,
          amount,
        };
      });

    return [...ingredientsList, ...ingredientsAdjustedToNewServingSize];
  }, [] as RecipeIngredient[]);

const getHandleIngredientsByDepartment =
  (ingredientsByDepartment: IngredientsByDepartment) =>
  (department: string, ingredient: RecipeIngredient, isSelected?: boolean) => {
    if (!ingredientsByDepartment[department]) {
      ingredientsByDepartment[department] = [
        {
          ...ingredient,
        },
      ];
    } else {
      const ingredientFoundIndex = ingredientsByDepartment[
        department
      ].findIndex((ingredientByDepartment) => {
        return ingredientByDepartment.name === ingredient.name;
      });

      if (ingredientFoundIndex !== -1) {
        const currentAmount =
          ingredientsByDepartment[department][ingredientFoundIndex].amount;
        const amount =
          (currentAmount || 0) + (!isSelected ? ingredient.amount || 0 : 0);

        ingredientsByDepartment[department][ingredientFoundIndex] = {
          ...ingredientsByDepartment[department][ingredientFoundIndex],
          amount: amount ? amount : undefined,
        };
      }

      // new ingredient in the list
      else {
        ingredientsByDepartment[department].push(ingredient);
      }
    }
  };

export const getIngredientsByDepartment = (
  activeList: ActiveList
): IngredientsByDepartment => {
  const ingredientsByDepartment: IngredientsByDepartment = {};

  const completeIngredientsList = getCompleteIngredientsList(activeList);

  const handleIngredientsByDepartment = getHandleIngredientsByDepartment(
    ingredientsByDepartment
  );

  completeIngredientsList.forEach((ingredient) => {
    ingredient.departments.forEach((department) => {
      // here we handle the ingredients that come from the recipe
      handleIngredientsByDepartment(department, ingredient);
    });
  });

  activeList.selectedIngredients.forEach((ingredient) => {
    ingredient.departments.forEach((department) => {
      // here we handle the special selected ingredients to avoid crashes
      handleIngredientsByDepartment(department, ingredient, true);
    });
  });

  activeList.extraIngredients.forEach((ingredient) => {
    ingredient.departments.forEach((department) => {
      // here we handle the special selected ingredients to avoid crashes
      handleIngredientsByDepartment(department, ingredient);
    });
  });

  return ingredientsByDepartment;
};
