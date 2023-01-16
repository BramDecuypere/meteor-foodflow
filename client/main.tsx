import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "/imports/ui/pages/home";
import DashboardTemplate from "/imports/ui/templates/dashboard";
import Signin from "/imports/ui/pages/signin";
import RequireAuth from "/imports/ui/atoms/require-auth.hook";
import { AuthProvider } from "/imports/ui/hooks/auth.hook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: (
      <RequireAuth>
        <DashboardTemplate />
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
        element: <div>Dashboard root</div>,
      },
    ],
  },
  {
    path: "/groceries",
    element: (
      <RequireAuth>
        <DashboardTemplate />
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
        element: <div>groceries</div>,
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
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>,
    document.getElementById("react-target")
  );
});
