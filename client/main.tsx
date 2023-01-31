import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "/imports/ui/pages/home";
import DashboardTemplate from "/imports/ui/templates/dashboard";
import Signin from "/imports/ui/pages/signin";
import RequireAuth from "/imports/ui/atoms/require-auth.hook";
import { AuthProvider } from "/imports/ui/hooks/auth.hook";
import RecipesList from "/imports/ui/pages/recipes-list";
import { GlobalProvider } from "/imports/ui/hooks/global.context";
import GroceriesList from "/imports/ui/pages/groceries-list";

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
        element: <RecipesList />,
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
        element: <GroceriesList />,
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
