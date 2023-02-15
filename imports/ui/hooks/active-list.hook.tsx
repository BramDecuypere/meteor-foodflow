import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";

const ActiveListHook = () => {
  return useTracker(() => {
    const handler = Meteor.subscribe("users.activeList");

    if (!Meteor.user() || !handler.ready()) {
      return { recipes: [], selectedIngredients: [], loading: true };
    }

    const {
      activeList: { recipes, selectedIngredients },
    } = Meteor.user({
      fields: { activeList: 1 },
    }) as Meteor.User;

    return { recipes, selectedIngredients, loading: false };
  });
};

export default ActiveListHook;
