import { createBrowserRouter } from "react-router";
import HomeLayout from "./layout/HomeLayout";
import HomePage from "./page/HomPage/HomePage";
import LoginPage from "./page/LoginPage/LoginPage";
import MoviesPage from "./page/MoviesPage/MoviesPage";
import MoviesDetailPage from "./page/MoviesDetailPage/MoviesDetailPage";
import NotFoundPage from "./page/NotFoundPage/NotFoundPage";
import SearchPage from "./page/SearchPage/SearchPage";

const router = createBrowserRouter([
  //   { path: "/", Component: HomePage },
  {
    path: "/",
    Component: HomeLayout,
    children: [
      { index: true, Component: MoviesPage },
      { path: "login", Component: LoginPage },
      { path: "search", Component: SearchPage },
      { path: ":title", Component: MoviesPage },
      { path: "titles/:id", Component: MoviesDetailPage },
    ],
  },
  { path: "*", Component: NotFoundPage },
]);
export default router;
