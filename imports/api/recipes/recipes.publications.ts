import { Meteor } from "meteor/meteor";
import { RecipesCollection } from "./recipes";

Meteor.publish("recipes", function publishRecipes() {
  return RecipesCollection.find();
});
