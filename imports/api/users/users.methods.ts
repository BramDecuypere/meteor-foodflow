import { Meteor } from "meteor/meteor";

import { RecipesCollection } from "../recipes/recipes";

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
});
