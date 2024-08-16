import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "/imports/ui/pages/home";
import DashboardTemplate from "/imports/ui/templates/dashboard";
import Signin from "/imports/ui/pages/signin";
import RequireAuth from "/imports/ui/hooks/require-auth.hook";
import { AuthProvider } from "/imports/ui/hooks/auth.hook";
import Recipes from "/imports/ui/pages/recipes";
import { GlobalProvider } from "/imports/ui/hooks/global.context";
import Groceries from "/imports/ui/pages/groceries";
import Settings from "/imports/ui/pages/settings";
import RecipeDetail from "/imports/ui/pages/recipe-detail";
import RecipeCreate from "/imports/ui/pages/new-recipe";
import SeasonalFruitsAndVeggies from "/imports/ui/pages/seasonal-fruits-and-veggies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: (
      <RequireAuth>
        <DashboardTemplate title="Recipes" />
      </RequireAuth>
    ),
    errorElement: (
      <DashboardTemplate>
        <div>Not found</div>
      </DashboardTemplate>
    ),
    children: [
      {
        path: "",
        element: <Recipes />,
      },
    ],
  },
  {
    path: "/recipes",
    element: (
      <RequireAuth>
        <DashboardTemplate title="Recipe detail" />
      </RequireAuth>
    ),
    errorElement: (
      <DashboardTemplate>
        <div>Not found</div>
      </DashboardTemplate>
    ),
    children: [
      {
        path: "/recipes/:id",
        element: <RecipeDetail />,
      },
      {
        path: "/recipes/create",
        element: <RecipeCreate />,
      },
    ],
  },
  {
    path: "/groceries",
    element: (
      <RequireAuth>
        <DashboardTemplate title="Groceries List" />
      </RequireAuth>
    ),
    errorElement: (
      <DashboardTemplate>
        <div>Not found</div>
      </DashboardTemplate>
    ),
    children: [
      {
        path: "",
        element: <Groceries />,
      },
    ],
  },
  {
    path: "/seasonal-fruits-and-vegetables",
    element: (
      <RequireAuth>
        <DashboardTemplate title="Seasonal fruits and vegetables" />
      </RequireAuth>
    ),
    errorElement: (
      <DashboardTemplate>
        <div>Not found</div>
      </DashboardTemplate>
    ),
    children: [
      {
        path: "",
        element: <SeasonalFruitsAndVeggies />,
      },
    ],
  },
  {
    path: "/settings",
    element: (
      <RequireAuth>
        <DashboardTemplate title="Settings" />
      </RequireAuth>
    ),
    errorElement: (
      <DashboardTemplate>
        <div>Not found</div>
      </DashboardTemplate>
    ),
    children: [
      {
        path: "",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: (
      <div>
        <div>signup</div>
      </div>
    ),
  },
]);

Meteor.startup(() => {
  render(
    <React.StrictMode>
      <AuthProvider>
        <GlobalProvider>
          <RouterProvider router={router} />
        </GlobalProvider>
      </AuthProvider>
    </React.StrictMode>,
    document.getElementById("react-target")
  );
});
