import { createBrowserRouter } from "react-router-dom";

import { Home, About, Blog, NotFound } from "../pages/public/publicPagesBarril";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <NotFound />,
  },
  {
    path: "/blog",
    element: <Blog />,
    errorElement: <NotFound />,
  },
]);
