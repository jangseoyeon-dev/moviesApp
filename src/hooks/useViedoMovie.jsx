import { useQuery } from "@tanstack/react-query";
import api from "../uilts/api";

const fetchDetailMovie = (movieId) => {
  return api.get(`/movie/${movieId}/videos`);
};

export const useViedoMovieQuery = (movieId) => {
  return useQuery({
    queryKey: ["movie-video", movieId],
    queryFn: () => fetchDetailMovie(movieId),
  });
};
