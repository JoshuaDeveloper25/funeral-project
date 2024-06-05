// --> 🌐 External/Global Imports
import React from "react";
import ReactDOM from "react-dom/client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppProvider } from "./context/AppProvider";

// --> 🔗	Styles
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

// --> 📄 Pages
import Root from "./pages/Root";
import SignUp from "./pages/SignUp/SignUp";
import Verified from "./pages/Verified/Verified";
import SignIn from "./pages/SignIn/SignIn";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        element: <h2>Home</h2>,
        index: true,
      },

      {
        element: <SignUp />,
        path: "/sign-up",
      },

      {
        element: <SignIn />,
        path: "/sign-in",
      },

      {
        element: <Verified />,
        path: "/verified/:tokenId",
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <QueryClientProvider client={queryClient}>
      <ToastContainer position="top-center" stacked />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </AppProvider>
);
