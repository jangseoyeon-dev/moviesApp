import { useQuery } from "@tanstack/react-query";
import api from "../uilts/api";

const fetchRecommendMovies = (movieId) => {
  return api.get(`/movie/${movieId}/recommendations`);
};

const useRecommendMovies = ({ movieId }) => {
  return useQuery({
    queryKey: ["movie-recommend", movieId],
    queryFn: () => fetchRecommendMovies(movieId),
    select: (data) => data.data.results,
    suspense: true,
  });
};

export default useRecommendMovies;
