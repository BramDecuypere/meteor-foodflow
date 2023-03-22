import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { Department, DepartmentsCollection } from "./departments";

Meteor.methods({
  "departments.insert"(department: Department) {
    check(department._id, String);

    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    DepartmentsCollection.insert(department);
  },
});
