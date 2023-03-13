import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { useTracker } from "meteor/react-meteor-data";
import { RecipesCollection } from "/imports/api/recipes/recipes";

const SelectedRecipeHook = (id?: string) => {
  return useTracker(() => {
    const _id = new Mongo.ObjectID(id);
    const handler = Meteor.subscribe("recipeDetail", _id);

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

    try {
      const recipe = RecipesCollection.findOne({ _id });

      if (!recipe) {
        return data;
      }

      return { recipe, loading: false };
    } catch (err) {
      console.log(err);
      return {
        ...data,
        loading: false,
      };
    }
  });
};

export default SelectedRecipeHook;
