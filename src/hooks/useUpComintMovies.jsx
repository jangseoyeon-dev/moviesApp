import { useQuery } from "@tanstack/react-query";
import api from "../uilts/api";

const fetchUpComintMovies = () => {
  return api.get("/movie/upcoming");
};

export const useUpComintMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-upcoming"],
    queryFn: fetchUpComintMovies,
    select: (data) => data.data,
  });
};
