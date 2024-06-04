// --> 🌐 External/Global Imports
import React from "react";
import ReactDOM from "react-dom/client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// --> 🔗	Styles
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

// --> 📄 Pages
import Root from "./pages/Root";
import SignUp from "./pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        element: <SignUp />,
        index: true,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ToastContainer stacked />
    <RouterProvider router={router} />
  </QueryClientProvider>
);
