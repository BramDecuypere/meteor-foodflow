import { Meteor } from "meteor/meteor";

Meteor.methods({
  "users.changeDefaultServings"(servings: number) {
    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    return Meteor.users.update(this.userId, {
      $set: {
        defaultServings: servings,
      },
    });
  },
});
