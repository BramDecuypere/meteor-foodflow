import { Labels } from "/enums/labels.enum";
import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { RecipesCollection } from "./recipes";

Meteor.publish(
  "recipes",
  function publishRecipes({ labels }: { labels?: Labels[] }) {
    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    const query: { [key: string]: any } = {};
    if (labels) {
      query.labels = { $in: labels };
    }

    return RecipesCollection.find(query);
  }
);

Meteor.publish(
  "recipeDetail",
  function publishRecipeDetail(_id: Mongo.ObjectID) {
    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    return RecipesCollection.find({ _id });
  }
);
