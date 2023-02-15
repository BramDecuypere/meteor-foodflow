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
