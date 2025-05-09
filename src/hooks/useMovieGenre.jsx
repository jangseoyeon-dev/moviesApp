import { useQuery } from "@tanstack/react-query";
import api from "../uilts/api";

const fetchMovieGenre = () => {
  return api.get("/genre/movie/list");
};

export const useMovieGenreQuery = () => {
  return useQuery({
    queryKey: ["movie-genre"],
    queryFn: fetchMovieGenre,
    select: (data) => data.data.genres,
    staleTime: 300000,
  });
};
