import { createBrowserRouter } from "react-router-dom";

import { Home, About, Blog } from "../pages/public/publicPagesBarril";
export const routes = createBrowserRouter([
  {
    path: "/",
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
]);
