import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import "/imports/api/recipes/recipes.methods";
import "/imports/api/recipes/recipes.publications";
import "/imports/api/users/users.methods";
import "/imports/api/users/users.publications";

Meteor.startup(() => {
  Migrations.migrateTo("latest");
});
