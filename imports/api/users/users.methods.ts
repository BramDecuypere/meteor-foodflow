import { Meteor } from "meteor/meteor";

import {
  Recipe,
  RecipeIngredient,
  RecipesCollection,
} from "../recipes/recipes";

Meteor.methods({
  "users.defaultRecipes"() {
    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    const recipes = RecipesCollection.find();

    if (Meteor.user({ fields: { recipes: 1 } })?.recipes.length === 0) {
      return Meteor.users.update(this.userId, {
        $set: {
          recipes: recipes.map((doc) => doc._id),
        },
      });
    }

    return Meteor.user();
  },

  "users.toggleSelectedIngredientOnAcctiveList"(
    recipeIngredient: RecipeIngredient
  ) {
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
      activeList.selectedIngredients = activeList.selectedIngredients.filter(
        ({ name }) => name !== recipeIngredient.name
      );
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

  "users.addRecipeToActiveList"(recipe: Recipe, servings: number) {
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

  "users.removeRecipeFromActiveList"(recipe: Recipe, servings: number) {
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

  "users.removeIngredientFromActiveList"(ingredient: RecipeIngredient) {
    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    const { activeList: currentActiveList } = Meteor.user({
      fields: { activeList: 1 },
    }) as Meteor.User;

    const isFoundInSelectedIngredients =
      currentActiveList.selectedIngredients.findIndex((recipeIngredient) => {
        return recipeIngredient.name === ingredient.name;
      }) > -1;

    let selectedIngredients = currentActiveList.selectedIngredients;
    console.log(
      "🚀 ~ file: users.methods.ts:131 ~ selectedIngredients:",
      selectedIngredients
    );

    if (isFoundInSelectedIngredients) {
      selectedIngredients = selectedIngredients.map((recipeIngredient) => {
        console.log(
          "🚀 ~ file: users.methods.ts:134 ~ selectedIngredients=selectedIngredients.map ~ recipeIngredient:",
          recipeIngredient
        );
        if (
          recipeIngredient.name === ingredient.name &&
          recipeIngredient.amount
        ) {
          const amount = recipeIngredient.amount + 1;
          console.log(
            "🚀 ~ file: users.methods.ts:139 ~ selectedIngredients=selectedIngredients.map ~ amount:",
            amount
          );

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

  "users.addIngredientToActiveList"(
    ingredient: RecipeIngredient,
    amount: number
  ) {
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
      selectedIngredients = currentActiveList.selectedIngredients.map(
        (item) => {
          if (item.name === ingredient.name) {
            return {
              ...item,
              amount,
            };
          }

          return item;
        }
      );
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

  "users.changeServingsActiveList"(recipe: Recipe, _servings: number) {
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

  "users.removeRecipeToActiveList"(recipe: Recipe) {
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

  "users.changeDefaultServings"(servings: number) {
    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    return Meteor.users.update(this.userId, {
      $set: {
        defaultServings: servings,
      },
    });
  },
});
