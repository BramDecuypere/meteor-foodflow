import { Meteor } from "meteor/meteor";

import "/server/migrations";
import "/imports/api/recipes/recipes.methods";
import "/imports/api/recipes/recipes.publications";
import "/imports/api/users/users.methods";
import "/imports/api/users/users.publications";

Meteor.startup(() => {
  // Migrations.migrateTo("latest");
  Migrations.migrateTo("1,rerun");
});
