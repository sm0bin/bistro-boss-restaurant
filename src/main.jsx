import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./layout/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <h1>Home</h1>,
      },
      {
        path: "/about",
        element: <h1>About</h1>,
      },
      {
        path: "/contact",
        element: <h1>Contact</h1>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

