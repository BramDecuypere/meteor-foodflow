import { Meteor } from "meteor/meteor";

import { getExtraIngredientAmountByName } from "/imports/utils/get-extra-ingredient-amount-by-name";
import { checkIsIngredientComplete } from "/imports/utils/is-ingredient-complete";
import { getTotalRecipeAmountByName } from "/imports/utils/get-total-recipe-amount";

import "./default-recipes.users.method";
import "./default-settings.users.method";

import { Recipe, RecipeIngredient } from "../../recipes/recipes";

Meteor.methods({
  "users.activeList.completeIngredients"(recipeIngredient: RecipeIngredient) {
    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    const { activeList: currentActiveList } = Meteor.user({
      fields: { activeList: 1 },
    }) as Meteor.User;

    const isIngredientSelected =
      currentActiveList.selectedIngredients.findIndex(
        ({ name }) => name === recipeIngredient.name
      ) > -1;

    const activeList = { ...currentActiveList };

    if (isIngredientSelected) {
      const isIngredientComplete = checkIsIngredientComplete(
        currentActiveList,
        recipeIngredient.name
      );

      if (isIngredientComplete) {
        activeList.selectedIngredients = activeList.selectedIngredients.filter(
          ({ name }) => name !== recipeIngredient.name
        );
      } else {
        activeList.selectedIngredients = activeList.selectedIngredients.map(
          (_ingredient) => {
            if (_ingredient.name === recipeIngredient.name) {
              const recipeAmount = getTotalRecipeAmountByName(
                activeList,
                recipeIngredient.name
              );
              const extraIngredientAmount = getExtraIngredientAmountByName(
                activeList,
                recipeIngredient.name
              );

              const amount = recipeAmount + extraIngredientAmount;

              return {
                ..._ingredient,
                amount,
              };
            }

            return _ingredient;
          }
        );
      }
    } else {
      activeList.selectedIngredients = [
        ...activeList.selectedIngredients,
        recipeIngredient,
      ];
    }

    return Meteor.users.update(this.userId, {
      $set: { activeList },
    });
  },

  "users.activeList.addRecipe"(recipe: Recipe, servings: number) {
    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    const { activeList: currentActiveList } = Meteor.user({
      fields: { activeList: 1 },
    }) as Meteor.User;

    const recipes = [
      ...currentActiveList.recipes,
      {
        servings,
        recipe,
      },
    ];

    return Meteor.users.update(this.userId, {
      $set: {
        activeList: {
          ...currentActiveList,
          recipes,
        },
      },
    });
  },

  "users.activeList.removeRecipe"(recipe: Recipe) {
    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    const { activeList: currentActiveList } = Meteor.user({
      fields: { activeList: 1 },
    }) as Meteor.User;

    const recipes = currentActiveList.recipes.filter(
      ({ recipe: _recipe }) => recipe._id.valueOf() !== _recipe._id.valueOf()
    );

    return Meteor.users.update(this.userId, {
      $set: {
        activeList: {
          ...currentActiveList,
          recipes,
        },
      },
    });
  },

  "users.activeList.removeIngredient"(ingredient: RecipeIngredient) {
    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    const { activeList: currentActiveList } = Meteor.user({
      fields: { activeList: 1 },
    }) as Meteor.User;

    const isFoundInExtraIngredients =
      currentActiveList.extraIngredients.findIndex((recipeIngredient) => {
        return recipeIngredient.name === ingredient.name;
      }) > -1;

    if (isFoundInExtraIngredients) {
      const _ingredient = currentActiveList.extraIngredients.find(
        (extraIngredient) => extraIngredient.name === ingredient.name
      );

      if (!_ingredient) {
        return;
      }

      let extraIngredients = currentActiveList.extraIngredients;

      if (_ingredient.amount === undefined || _ingredient.amount === 1) {
        extraIngredients = extraIngredients.filter(
          (_ingredient) => _ingredient.name !== ingredient.name
        );
      } else if (_ingredient.amount > 1) {
        extraIngredients = extraIngredients.map((_ingredient) => ({
          ..._ingredient,
          amount: _ingredient.amount! - 1,
        }));
      }

      return Meteor.users.update(this.userId, {
        $set: {
          activeList: {
            ...currentActiveList,
            extraIngredients,
          },
        },
      });
    }

    const isFoundInSelectedIngredients =
      currentActiveList.selectedIngredients.findIndex((recipeIngredient) => {
        return recipeIngredient.name === ingredient.name;
      }) > -1;

    let selectedIngredients = currentActiveList.selectedIngredients;

    if (isFoundInSelectedIngredients) {
      selectedIngredients = selectedIngredients.map((recipeIngredient) => {
        if (
          recipeIngredient.name === ingredient.name &&
          recipeIngredient.amount
        ) {
          const amount = recipeIngredient.amount + 1;

          return {
            ...recipeIngredient,
            amount,
          };
        }

        return recipeIngredient;
      });
    } else {
      selectedIngredients.push({
        ...ingredient,
        amount: 1,
      });
    }

    return Meteor.users.update(this.userId, {
      $set: {
        activeList: {
          ...currentActiveList,
          selectedIngredients,
        },
      },
    });
  },

  "users.activeList.addIngredient"(ingredient: RecipeIngredient) {
    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    const { activeList: currentActiveList } = Meteor.user({
      fields: { activeList: 1 },
    }) as Meteor.User;

    const isIngredientInSelectedIngredientList =
      currentActiveList.selectedIngredients.findIndex(({ name }) => {
        return name === ingredient.name;
      }) > -1;

    const isIngredientInExtraIngredientsList =
      currentActiveList.extraIngredients.findIndex(({ name }) => {
        return name === ingredient.name;
      }) > -1;

    let selectedIngredients: RecipeIngredient[] =
      currentActiveList.selectedIngredients || [];
    let extraIngredients: RecipeIngredient[] =
      currentActiveList.extraIngredients || [];

    if (isIngredientInSelectedIngredientList) {
      const _ingredient = currentActiveList.selectedIngredients.find(
        (_ingredient) => _ingredient.name === ingredient.name
      );

      if (!_ingredient || !_ingredient.amount) {
      } else if (_ingredient.amount > 1) {
        selectedIngredients = currentActiveList.selectedIngredients.map(
          (item) => {
            if (item.name === ingredient.name && item.amount) {
              return {
                ...item,
                amount: item.amount - 1,
              };
            }

            return item;
          }
        );
      } else if (_ingredient.amount === 1) {
        selectedIngredients = currentActiveList.selectedIngredients.filter(
          (item) => item.name !== ingredient.name
        );
      }
    } else if (isIngredientInExtraIngredientsList) {
      extraIngredients = extraIngredients.map((_ingredient) => {
        if (_ingredient.name === ingredient.name) {
          return {
            ..._ingredient,
            amount:
              typeof _ingredient.amount !== "undefined"
                ? _ingredient.amount + 1
                : undefined,
          };
        }

        return _ingredient;
      });
    } else {
      extraIngredients = [
        ...extraIngredients,
        {
          ...ingredient,
          amount: 1,
        },
      ];
    }

    return Meteor.users.update(this.userId, {
      $set: {
        activeList: {
          ...currentActiveList,
          selectedIngredients,
          extraIngredients,
        },
      },
    });
  },

  "users.activeList.changeServings"(recipe: Recipe, _servings: number) {
    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    let servings = 1;
    if (_servings > 1) {
      servings = _servings;
    }

    const { activeList: currentActiveList } = Meteor.user({
      fields: { activeList: 1 },
    }) as Meteor.User;

    const recipes = currentActiveList.recipes.map((item) => {
      if (item.recipe._id.valueOf() === recipe._id.valueOf()) {
        return {
          ...item,
          servings,
        };
      }

      return item;
    });

    return Meteor.users.update(this.userId, {
      $set: {
        activeList: {
          ...currentActiveList,
          recipes,
        },
      },
    });
  },
});
