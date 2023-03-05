import { Meteor } from "meteor/meteor";

import "/server/migrations";

import "/imports/api/users";
import "/imports/api/users";

Meteor.startup(() => {
  Migrations.migrateTo("latest");
});
