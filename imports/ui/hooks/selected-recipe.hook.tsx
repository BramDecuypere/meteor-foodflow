import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { useTracker } from "meteor/react-meteor-data";
import { RecipesCollection } from "/imports/api/recipes/recipes";

const SelectedRecipeHook = (id?: string) => {
  return useTracker(() => {
    const handler = Meteor.subscribe("recipes");

    const data = { recipe: null, loading: false };

    if (!Meteor.user() || !id) {
      return data;
    }

    if (!handler.ready()) {
      return {
        ...data,
        loading: true,
      };
    }

    const objectId = new Mongo.ObjectID(id);
    const recipe = RecipesCollection.findOne({ _id: objectId });

    if (!recipe) {
      return data;
    }

    return { recipe, loading: false };
  });
};

export default SelectedRecipeHook;
