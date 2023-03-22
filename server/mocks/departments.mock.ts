import { Departments } from "/enums/departments.enum";
import { Department } from "/imports/api/departments/departments";

export const departmentsMock: Omit<Department, "_id">[] = [
  {
    department: Departments.FRESH_VEGETABLES_AND_FRUITS,
    title: {
      nl: "Verse Groenten & Fruit",
      en: "Fresh Vegetables & Fruits",
    },
  },
  {
    department: Departments.MEAT_FISH_AND_ALTERNATIVES,
    title: {
      nl: "Vlees, Vis & Alternatieven",
      en: "Meat, fish & alternatives",
    },
  },

  {
    department: Departments.CANNED_FOOD,
    title: {
      nl: "Conserven",
      en: "Canned food",
    },
  },
  {
    department: Departments.BAKING_COOKING,
    title: {
      nl: "Bakken",
      en: "Baking & Cooking",
    },
  },
  {
    department: Departments.PASTA_SAUCE,
    title: {
      nl: "Pasta & Pasta Sauzen",
      en: "Pasta & Pasta Sauce",
    },
  },
  {
    department: Departments.GRAINS_BEANS_RICE,
    title: {
      nl: "Granen, Bonen & Rijst",
      en: "Grains, Beans & Rice",
    },
  },
  {
    department: Departments.DAIRY_AND_EGGS,
    title: {
      nl: "Melkproducten en eieren",
      en: "Dairy & Eggs",
    },
  },
  {
    department: Departments.BEER_WINE_LIQUOR,
    title: {
      nl: "Bier, Wijn & Likeuren",
      en: "Beer, Wine & Liquors",
    },
  },
  {
    department: Departments.BEVERAGES,
    title: {
      nl: "Dranken & Sappen",
      en: "Beverages",
    },
  },
  {
    department: Departments.BAKERY,
    title: {
      nl: "Bakkerij",
      en: "Bakery",
    },
  },
  {
    department: Departments.FROZEN,
    title: {
      nl: "Diepvries",
      en: "Frozen",
    },
  },
  {
    department: Departments.SNACKS,
    title: {
      nl: "Snacks",
      en: "Snacks",
    },
  },
  {
    department: Departments.CLEANING_HOUSEHOLD,
    title: {
      nl: "Poets & Huishoudproducten",
      en: "Cleaning & Household",
    },
  },
  {
    department: Departments.PERSONAL_CARE,
    title: {
      nl: "Persoonlijke Hygiëne",
      en: "Personal Care",
    },
  },
  {
    department: Departments.OTHER,
    title: {
      nl: "Overige",
      en: "Other",
    },
  },
];
