import { Recipe } from "/imports/api/recipes/recipes";

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
      recipes: string[];
      defaultServings: number;
      activeList: {
        recipes: {
          servings: number;
          recipe: Recipe;
        }[];
      };
    }
  }
}
