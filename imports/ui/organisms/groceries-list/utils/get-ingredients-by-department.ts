import { RecipeIngredient } from "/imports/api/recipes/recipes";
import { ActiveList } from "/interfaces/active-list";
import { IngredientsByDepartment } from "/interfaces/ingredients-by-department";

export const getIngredientsByDepartment = (
  activeList: ActiveList
): IngredientsByDepartment => {
  const completeIngredientsList = activeList.recipes.reduce(
    (ingredientsList, activeListItem) => {
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
    },
    [] as RecipeIngredient[]
  );

  const ingredientsByDepartment: IngredientsByDepartment = {};

  const handleIngredientsByDepartment = (
    department: string,
    ingredient: RecipeIngredient
  ) => {
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
        const amount =
          (ingredient.amount || 0) +
          (ingredientsByDepartment[department][ingredientFoundIndex].amount ||
            0);

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

  completeIngredientsList.forEach((ingredient) => {
    ingredient.departments.forEach((department) => {
      handleIngredientsByDepartment(department, ingredient);
    });
  });

  activeList.selectedIngredients.forEach((ingredient) => {
    ingredient.departments.forEach((department) => {
      handleIngredientsByDepartment(department, ingredient);
    });
  });

  return ingredientsByDepartment;
};
