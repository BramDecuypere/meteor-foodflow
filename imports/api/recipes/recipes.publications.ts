import { Meteor } from "meteor/meteor";
import { RecipesCollection } from "./recipes";

Meteor.publish("recipes", function publishRecipes() {
  if (!this.userId) {
    throw new Meteor.Error("Not authorized.");
  }

  return RecipesCollection.find();
});
