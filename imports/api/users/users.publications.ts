import { Meteor } from "meteor/meteor";
import { RecipesCollection } from "../recipes/recipes";

Meteor.publish("users.activeList", function () {
  if (!this.userId) {
    throw new Meteor.Error("Not authorized.");
  }

  return Meteor.users.find(this.userId, {
    fields: {
      activeList: 1,
    },
  });
});

Meteor.publish("users.recipes", function publishUserRecipes() {
  const user = Meteor.user({ fields: { recipes: 1 } });

  if (!user) {
    return [];
  }

  const { recipes } = user;

  return RecipesCollection.find({
    _id: { $in: recipes },
  });
});
