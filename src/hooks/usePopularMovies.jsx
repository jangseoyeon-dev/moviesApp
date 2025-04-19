import { useQuery } from "@tanstack/react-query";
import api from "../uilts/api";

const fetchPopularMovies = () => {
  return api.get("/movie/popular");
};

export const usePopularMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-popular"],
    queryFn: fetchPopularMovies,
    select: (data) => data.data,
  });
};
