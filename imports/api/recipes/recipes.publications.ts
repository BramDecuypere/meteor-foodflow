import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { RecipesCollection } from "./recipes";

Meteor.publish("recipes", function publishRecipes() {
  if (!this.userId) {
    throw new Meteor.Error("Not authorized.");
  }

  return RecipesCollection.find();
});

Meteor.publish(
  "recipeDetail",
  function publishRecipeDetail(_id: Mongo.ObjectID) {
    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    return RecipesCollection.find({ _id });
  }
);
