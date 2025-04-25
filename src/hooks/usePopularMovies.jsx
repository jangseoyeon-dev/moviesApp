import { useQuery } from "@tanstack/react-query";
import api from "../uilts/api";

const fetchPopularMovies = () => {
  return api.get("/movie/popular");
};

export const usePopularMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-popular"],
    queryFn: fetchPopularMovies,
    suspense: true,
    select: (data) => data.data,
  });
};
