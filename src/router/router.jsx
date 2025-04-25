import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import HomePage from "../page/HomePage/HomePage";
import LoginPage from "../page/LoginPage/LoginPage";
import SearchPage from "../page/SearchPage/SearchPage";
import MoviesPage from "../page/MoviesPage/MoviesPage";
import MoviesDetailPage from "../page/MoviesDetailPage/MoviesDetailPage";
import NotFoundPage from "../page/NotFoundPage/NotFoundPage";
import ProtectedRoute from "./ProtectedRoute";

// ProtectedRoute 컴포넌트로 로그인 여부를 판단하여 페이지 노출

const router = createBrowserRouter([
  { path: "*", Component: NotFoundPage },
  {
    path: "/",
    children: [
      { index: true, Component: LoginPage },
      {
        Component: ProtectedRoute,
        children: [
          {
            Component: HomeLayout,
            children: [
              { path: "home", Component: HomePage },
              { path: "search", Component: SearchPage },
              { path: "movies", Component: MoviesPage },
              { path: "movies/:id", Component: MoviesDetailPage },
            ],
          },
        ],
      },
    ],
  },
]);
export default router;
