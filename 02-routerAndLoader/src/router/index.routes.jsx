import { createBrowserRouter } from "react-router-dom";

import {
  Home,
  About,
  Blog,
  NotFound,
  Post,
} from "../pages/public/publicPagesBarril";
import { AppLayout } from "../layout/layoutBarril";
import { loaderBlog } from "../utils/loaderBlog";
import { loaderPost } from "../utils/loaderPost";
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
        loader: loaderBlog,
      },
      {
        path: "/blog/:id",
        element: <Post />,
        loader: loaderPost,
      },
    ],
  },
]);
