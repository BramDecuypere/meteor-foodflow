import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { DepartmentsCollection } from "/imports/api/departments/departments";

const DepartmentsHook = () => {
  return useTracker(() => {
    const handler = Meteor.subscribe("departments");

    const data = { departments: [], loading: false };

    if (!Meteor.user()) {
      return data;
    }

    if (!handler.ready()) {
      return {
        ...data,
        loading: true,
      };
    }

    try {
      const departments = DepartmentsCollection.find({}).fetch();

      return { departments, loading: false };
    } catch (err) {
      console.log(err);
      return {
        ...data,
        loading: false,
      };
    }
  });
};

export default DepartmentsHook;
