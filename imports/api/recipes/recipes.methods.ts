import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { Recipe, RecipesCollection } from "./recipes";

Meteor.methods({
  "recipes.insert"(recipe: Recipe) {
    check(recipe._id, String);

    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    RecipesCollection.insert(recipe);
  },
});
