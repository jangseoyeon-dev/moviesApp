import { useQuery } from "@tanstack/react-query";
import api from "../uilts/api";

const fetchSearchMovies = ({ keyWord, page, gerneId, sort }) => {
  const data = {
    ...(keyWord && { query: keyWord }),
    page,
    ...(gerneId && { with_genres: gerneId }),
    ...(sort && { sort_by: sort }),
  };
  const url = keyWord ? "/search/movie" : "/discover/movie";
  return api.get(url, { params: data });
};

export const useSarchMoviesQuery = ({ keyWord, page, gerneId, sort }) => {
  return useQuery({
    queryKey: ["movie-search", keyWord, page, gerneId, sort],
    queryFn: () => fetchSearchMovies({ keyWord, page, gerneId, sort }),

    select: (data) => data.data,
  });
};
