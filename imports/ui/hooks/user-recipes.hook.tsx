import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { RecipesCollection } from "/imports/api/recipes/recipes";
import { Labels } from "/enums/labels.enum";

const UserRecipes = ({ labels }: { labels?: Labels[] }) => {
  const userRecipes = useTracker(() => {
    const handler = Meteor.subscribe("users.recipes");

    if (!Meteor.user() || !handler.ready()) {
      return [];
    }

    const query: { [key: string]: any } = {};
    if (labels && labels.length > 0) {
      query.labels = { $in: labels };
    }

    return RecipesCollection.find(query).fetch();
  });

  return userRecipes;
};

export default UserRecipes;
