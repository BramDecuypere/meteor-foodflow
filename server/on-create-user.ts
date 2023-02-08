import { Accounts } from "meteor/accounts-base";

Accounts.onCreateUser((options, user) => {
  const customizedUser = {
    ...user,
    ...options,
  };

  return customizedUser;
});
