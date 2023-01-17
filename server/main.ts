import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { Recipe, RecipesCollection } from "../imports/api/recipes/recipes";
import "/imports/api/recipes/recipes.methods";
import "/imports/api/recipes/recipes.publications";
import { recipesMock } from "./recipe.mock";

const SEED_USERNAME = "meteorite";
const SEED_PASSWORD = "password";

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }

  if (RecipesCollection.find().count() === 0) {
    const _recipes = recipesMock as Recipe[];

    const userId = Accounts.findUserByUsername(SEED_USERNAME);

    const bulk = RecipesCollection.rawCollection().initializeUnorderedBulkOp();

    _recipes.forEach((recipe) => {
      bulk.insert(recipe);
    });

    bulk.execute();

    const recipeIds = RecipesCollection.find().map((recipe) => recipe._id);

    if (userId) {
      Meteor.users.update(userId._id, {
        $set: {
          recipes: recipeIds,
        },
      });
    }
  }

  Accounts.onCreateUser((options, user) => {
    const customizedUser = Object.assign(user);

    // We still want the default hook's 'profile' behavior.
    if (options.profile) {
      customizedUser.profile = options.profile;
    }

    return customizedUser;
  });
});
