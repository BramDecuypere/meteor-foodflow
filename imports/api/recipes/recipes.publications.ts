import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import { RecipesCollection } from "./recipes";

Meteor.publish("recipes.recipe", function publishRecipes() {
  return RecipesCollection.find();
});
