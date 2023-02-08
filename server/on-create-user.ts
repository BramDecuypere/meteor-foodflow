import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";

Accounts.onCreateUser((options, user) => {
  // TODO: CAREFUL: We add anything that is added to the user
  // this can become a problem once we allow users to be created by signup
  const customizedUser: Meteor.User = {
    ...user,
    ...options,
  };

  return customizedUser;
});
