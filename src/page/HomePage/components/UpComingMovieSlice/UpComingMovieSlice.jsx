import React from "react";
import { useUpComintMoviesQuery } from "../../../../hooks/useUpComintMovies";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";

const UpComingMovieSlice = () => {
  const { data, isError, error } = useUpComintMoviesQuery();
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return <MovieSlider title={"새로 올라온 콘텐츠"} movies={data.results} />;
};

export default UpComingMovieSlice;
