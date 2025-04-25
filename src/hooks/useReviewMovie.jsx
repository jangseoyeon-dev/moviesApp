import { useQuery } from "@tanstack/react-query";
import api from "../uilts/api";

const fetchReviewMovie = (movieId) => {
  return api.get(`/movie/${movieId}/reviews`);
};

export const useReviewMovieQuery = (movieId) => {
  return useQuery({
    queryKey: ["movie-review", movieId],
    queryFn: () => fetchReviewMovie(movieId),
    suspense: true,
    select: (data) => data.data,
  });
};
