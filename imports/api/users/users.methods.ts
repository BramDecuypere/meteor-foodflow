import { Meteor } from "meteor/meteor";

import { Recipe, RecipesCollection } from "../recipes/recipes";

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
