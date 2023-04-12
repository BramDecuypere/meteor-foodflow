import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { Department, DepartmentsCollection } from "./departments";
import { Mongo } from "meteor/mongo";

Meteor.methods({
  "departments.insert"(department: Department) {
    check(department._id, Mongo.ObjectID);

    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    DepartmentsCollection.insert(department);
  },
});
