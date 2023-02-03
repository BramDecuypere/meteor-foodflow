import { Accounts } from "meteor/accounts-base";
import { RecipesCollection } from "../imports/api/recipes/recipes";
import { Meteor } from "meteor/meteor";

const SEED_USERNAME = "meteorite";
const SEED_PASSWORD = "password";

Migrations.add({
  version: 1,
  up() {
    if (RecipesCollection.find().count() === 0) {
      // This is how to get access to the raw MongoDB node collection that the Meteor server collection wraps
      const batch =
        RecipesCollection.rawCollection().initializeUnorderedBulkOp();
      //Mongo throws an error if we execute a batch operation without actual operations, e.g. when Lists was empty.
      let hasUpdates = false;

      const recipesCount = RecipesCollection.find().count();

      if (recipesCount <= 5) {
        hasUpdates = true;
      }

      if (hasUpdates) {
        // We need to wrap the async function to get a synchronous API that migrations expects
        const execute = Meteor.wrapAsync(batch.execute, batch);
        return execute();
      }
    }

    if (!Accounts.findUserByUsername(SEED_USERNAME)) {
      Accounts.createUser({
        username: SEED_USERNAME,
        password: SEED_PASSWORD,
        recipes: [],
        defaultServings: 2,
        activeList: {
          recipes: [],
        },
      } as Omit<Meteor.User, "_id">);
    }

    return true;
  },
  down() {},
});
