import { Mongo } from "meteor/mongo";
import { Departments } from "/enums/departments.enum";

export interface Department {
  _id: Mongo.ObjectID;
  department: Departments;
  title: {
    nl?: string;
    fr?: string;
    en?: string;
  };
}

export const DepartmentsCollection = new Mongo.Collection<Department>(
  "departments"
);
