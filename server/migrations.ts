import { Accounts } from "meteor/accounts-base";
import { Recipe, RecipesCollection } from "../imports/api/recipes/recipes";
import { Meteor } from "meteor/meteor";
import { recipesMock } from "./recipe.mock";

// Make sure we create a user with everything attached to it
import "/server/on-create-user";

const SEED_USERNAME = "meteorite";
const SEED_PASSWORD = "password";

Migrations.add({
  version: 1,
  up() {
    const _recipes = recipesMock as Recipe[];
    // This is how to get access to the raw MongoDB node collection that the Meteor server collection wraps
    const batch = RecipesCollection.rawCollection().initializeUnorderedBulkOp();
    //Mongo throws an error if we execute a batch operation without actual operations, e.g. when Lists was empty.
    let hasUpdates = false;

    const recipesCount = RecipesCollection.find().count();

    if (recipesCount < 5) {
      _recipes.forEach((recipe) => {
        batch.insert(recipe);
      });
      hasUpdates = true;
    }

    if (hasUpdates) {
      // We need to wrap the async function to get a synchronous API that migrations expects
      const execute = Meteor.wrapAsync(batch.execute, batch);
      return execute();
    }
  },

  down() {},
});

Migrations.add({
  version: 2,
  up() {
    if (!Accounts.findUserByUsername(SEED_USERNAME)) {
      const recipes = RecipesCollection.find().map((recipe) => recipe._id);

      Accounts.createUser({
        username: SEED_USERNAME,
        password: SEED_PASSWORD,
        recipes,
        defaultServings: 2,
        activeList: {
          recipes: [],
          selectedIngredients: [],
        },
      } as Omit<Meteor.User, "_id">);
    }
  },
  down() {},
});
