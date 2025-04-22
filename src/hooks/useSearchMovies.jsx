import { useQuery } from "@tanstack/react-query";
import api from "../uilts/api";

const fetchSearchMovies = ({ keyWord, page }) => {
  return keyWord
    ? api.get(`/search/movie?query=${keyWord}&page=${page}`)
    : api.get(`/movie/popular?page=${page}`);
};

export const useSarchMoviesQuery = ({ keyWord, page }) => {
  return useQuery({
    queryKey: ["movie-search", keyWord, page],
    queryFn: () => fetchSearchMovies({ keyWord, page }),
    select: (data) => data.data,
  });
};
