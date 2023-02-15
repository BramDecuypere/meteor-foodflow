import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { useTracker } from "meteor/react-meteor-data";
import { useParams } from "react-router-dom";
import { RecipesCollection } from "/imports/api/recipes/recipes";

const SelectedRecipeHook = () => {
  return useTracker(() => {
    const { id } = useParams();

    if (!Meteor.user()) {
      return { recipe: null, loading: false };
    }

    const objectId = new Mongo.ObjectID(id);
    const recipe = RecipesCollection.findOne({ _id: objectId });

    return { recipe, loading: false };
  });
};

export default SelectedRecipeHook;
