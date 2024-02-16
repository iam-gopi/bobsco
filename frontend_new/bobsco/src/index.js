import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Courses from "./components/courses";
import VedhikModel from "./components/vedhik-model";
import Layout from "./components/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/course",
    element: <Courses />,
  },
  {
    path: "/evedhik",
    element: <VedhikModel />,
  },
  {
    path: "/",
    element: <App />,
  },
]);
root.render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);
