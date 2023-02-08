import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";

const ActiveListHook = () => {
  return useTracker(() => {
    const handler = Meteor.subscribe("users.activeList");

    if (!Meteor.user() || !handler.ready()) {
      return { recipes: [], selectedIngredients: [] };
    }

    const { activeList } = Meteor.user({
      fields: { activeList: 1 },
    }) as Meteor.User;

    return activeList;
  });
};

export default ActiveListHook;
