import { createBrowserRouter } from "react-router-dom";

import { Home, About, Blog, NotFound } from "../pages/public/publicPagesBarril";
import { AppLayout } from "../layout/layoutBarril";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
