import assert from "assert";

import "./departments.methods";
import { mockMethodCall } from "meteor/quave:testing";
import { DepartmentsCollection } from "./departments";
import { Random } from "meteor/random";
import { Mongo } from "meteor/mongo";
import { Departments } from "/enums/departments.enum";
import { Meteor } from "meteor/meteor";

if (Meteor.isServer) {
  describe("Departments - methods", () => {
    const userId = Random.id();

    beforeEach(() => {
      DepartmentsCollection.remove({});
    });

    describe("departments.insert", () => {
      it("should insert a department", function () {
        mockMethodCall(
          "departments.insert",
          {
            _id: new Mongo.ObjectID(),
            department: Departments.BAKERY,
            title: {
              nl: "Bakkerij",
            },
          },
          { context: { userId } }
        );

        assert.equal(
          DepartmentsCollection.find({ title: { nl: "Bakkerij" } }).count(),
          1
        );
      });
    });
  });
}
