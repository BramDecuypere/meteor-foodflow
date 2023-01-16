import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

// function insertRecipe({ title, url }: { title: string; url: string }) {
//   RecipesCollection.insert({ title, url, createdAt: new Date() });
// }

const SEED_USERNAME = "meteorite";
const SEED_PASSWORD = "password";

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    console.log("CREATING SEED USER", SEED_USERNAME);
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
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
