import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Resume from "./resume.mdx";
import Newbie from "./newbie.mdx";
import Superrookie from "./superrookie.mdx";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Resume />,
  },
  {
    path: '/newbie',
    element: <Newbie />,
  },
  {
    path: '/superrookie',
    element: <Superrookie />,
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
