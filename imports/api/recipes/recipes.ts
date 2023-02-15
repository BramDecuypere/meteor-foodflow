import { Mongo } from "meteor/mongo";

export interface RecipeStep {
  title?: string;
  ingredients?: string[];
  description?: string;
}

export interface RecipeIngredient {
  name: string;
  amount?: number;
  metric?: string;
  departments: string[];
}

export interface Recipe {
  _id: Mongo.ObjectID;
  language: "NL" | "EN";
  title: string;
  image: string;
  labels: string[];
  timings: {
    total: number;
    active: number;
  };
  food: {
    servings: number;
    ingredients: RecipeIngredient[];
  };
  steps: RecipeStep[];
}

export const RecipesCollection = new Mongo.Collection<Recipe>("recipes");
