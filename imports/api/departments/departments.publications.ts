import { Meteor } from "meteor/meteor";
import { DepartmentsCollection } from "./departments";

Meteor.publish("departments", function publishDepartments() {
  if (!this.userId) {
    throw new Meteor.Error("Not authorized.");
  }

  return DepartmentsCollection.find();
});
