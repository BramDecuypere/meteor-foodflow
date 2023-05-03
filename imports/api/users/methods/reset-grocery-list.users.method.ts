import { Meteor } from "meteor/meteor";

Meteor.methods({
  "users.resetGroceryList"() {
    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    return Meteor.users.update(this.userId, {
      $set: {
        activeList: {
          recipes: [],
          extraIngredients: [],
          selectedIngredients: [],
        },
      },
    });
  },
});
