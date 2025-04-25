import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import Alert from "react-bootstrap/Alert";

import MovieSlider from "../../../../common/MovieSlider/MovieSlider";

const PopularMovieSlice = () => {
  const { data, isError, error } = usePopularMoviesQuery();

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return <MovieSlider title={"이번 주 인기작 TOP 20"} movies={data.results} />;
};

export default PopularMovieSlice;
