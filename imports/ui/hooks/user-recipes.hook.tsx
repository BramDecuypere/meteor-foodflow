import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { RecipesCollection } from "/imports/api/recipes/recipes";

const UserRecipes = () => {
  const userRecipes = useTracker(() => {
    const handler = Meteor.subscribe("users.recipes");

    if (!Meteor.user() || !handler.ready()) {
      return [];
    }

    return RecipesCollection.find().fetch();
  });

  return userRecipes;
};

export default UserRecipes;
