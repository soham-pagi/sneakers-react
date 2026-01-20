import type { RouteObject } from "react-router";
import Layout from "./components/Layout";
import PageNotFound from "./components/PageNotFound";
import WomenPage from "./pages/WomenPage";

const routes: RouteObject[] = [
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: WomenPage,
      },
      {
        path: "collections",
        Component: () => "Collections",
      },
      {
        path: "men",
        Component: () => "Men",
      },
      {
        index: true,
        path: "women",
        Component: WomenPage,
      },
      {
        path: "about",
        Component: () => "About",
      },
      {
        path: "contact",
        Component: () => "Contact",
      },
    ],
  },
  {
    path: "*",
    Component: PageNotFound,
  },
];

export default routes;
