import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { ActiveList } from "/interfaces/active-list";

const ActiveListHook = () => {
  return useTracker((): ActiveList & { loading: boolean } => {
    const handler = Meteor.subscribe("users.activeList");

    if (!Meteor.user() || !handler.ready()) {
      return {
        recipes: [],
        selectedIngredients: [],
        extraIngredients: [],
        loading: true,
      };
    }

    const {
      activeList: { recipes, selectedIngredients, extraIngredients },
    } = Meteor.user({
      fields: { activeList: 1 },
    }) as Meteor.User;

    return { recipes, selectedIngredients, extraIngredients, loading: false };
  });
};

export default ActiveListHook;
