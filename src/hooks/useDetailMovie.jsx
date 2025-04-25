import { useQuery } from "@tanstack/react-query";
import api from "../uilts/api";

const fetchMovieDetailAndVideo = async (movieId) => {
  const [detailRes, videoRes] = await Promise.all([
    api.get(`/movie/${movieId}`),
    api.get(`/movie/${movieId}/videos`),
  ]);
  return {
    detail: detailRes.data,
    video: videoRes.data,
  };
};

export const useDetailMovieQuery = (movieId) => {
  return useQuery({
    queryKey: ["movie-detail", movieId],
    queryFn: () => fetchMovieDetailAndVideo(movieId),
    suspense: true,
  });
};
