import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { Recipe } from "/imports/api/recipes/recipes";

const ActiveList = () => {
  return useTracker<{ recipes: { servings: number; recipe: Recipe }[] }>(() => {
    const handler = Meteor.subscribe("users.activeList");

    if (!Meteor.user() || !handler.ready()) {
      return { recipes: [] };
    }

    const { activeList } = Meteor.user({
      fields: { activeList: 1 },
    }) as Meteor.User;

    return activeList;
  });
};

export default ActiveList;
