import { Mongo } from "meteor/mongo";
import { ActiveList } from "./interfaces/active-list";

declare module "meteor/meteor" {
  module Meteor {
    interface UserEmail {
      address: string;
      verified: boolean;
    }

    interface User {
      _id: string;
      username?: string | undefined;
      emails?: UserEmail[] | undefined;
      createdAt?: Date | undefined;
      profile?: any;
      services?: any;

      // Custom elements
      recipes: Mongo.ObjectID[];
      defaultServings: number;
      activeList: ActiveList;
    }
  }
}
