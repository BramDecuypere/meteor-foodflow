import { Accounts } from "meteor/accounts-base";
import { Recipe, RecipesCollection } from "../imports/api/recipes/recipes";
import { Meteor } from "meteor/meteor";
import { recipesMock } from "./recipe.mock";

const SEED_USERNAME = "meteorite";
const SEED_PASSWORD = "password";

Migrations.add({
  version: 1,
  up: Meteor.wrapAsync(async (_: any, next: any) => {
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

    console.log("----------- SEED USER -------------");
    if (!Accounts.findUserByUsername(SEED_USERNAME)) {
      console.log("----------- no seed user found -------------");
      const recipes = RecipesCollection.find().map((recipe) => recipe._id);
      console.log("----------- recipes for seed user: ", recipes);

      try {
        Accounts.createUser(
          {
            username: SEED_USERNAME,
            password: SEED_PASSWORD,
            recipes,
            defaultServings: 2,
            activeList: {
              recipes: [],
            },
          } as Omit<Meteor.User, "_id">,
          (err) => {
            console.log("----------- create seed user -------------", err);
            next();
          }
        );
      } catch (err) {
        console.log("caught error: ", err);
      }
    } else {
      console.log("------ seed user exists -----");
      next();
    }
  }),

  down() {},
});
