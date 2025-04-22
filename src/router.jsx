import { createBrowserRouter } from "react-router";
import HomeLayout from "./layout/HomeLayout";
import HomePage from "./page/HomePage/HomePage";
import LoginPage from "./page/LoginPage/LoginPage";
import SearchPage from "./page/SearchPage/SearchPage";

import MoviesPage from "./page/MoviesPage/MoviesPage";
import MoviesDetailPage from "./page/MoviesDetailPage/MoviesDetailPage";
import NotFoundPage from "./page/NotFoundPage/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "login", Component: LoginPage },
      { path: "search", Component: SearchPage },
      { path: "movies", Component: MoviesPage },
      { path: "movies/:id", Component: MoviesDetailPage },
    ],
  },
  { path: "*", Component: NotFoundPage },
]);
export default router;
