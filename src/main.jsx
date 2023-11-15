import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./layout/App";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import axios from "axios";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Auth from "./layout/Auth";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import Root from "./layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
        children: [
          {
            path: "/",
            element: <Home></Home>,
          },
          {
            path: "/menu",
            element: <Menu></Menu>,
            loader: () => axios.get("menu.json").then((res) => res.data),
          },
          {
            path: "/shop",
            element: <Shop></Shop>,
            loader: () => axios.get("menu.json").then((res) => res.data),
          },
          {
            path: "/contact",
            element: <Contact></Contact>,
          },
        ]
      },
      {
        path: "/auth",
        element: <Auth />,
        children: [
          {
            path: "/auth",
            element: <Login />,
          },
          {
            path: "/auth/sign-up",
            element: <SignUp />,
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

