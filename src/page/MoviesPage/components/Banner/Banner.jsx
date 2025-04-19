import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import Alert from "react-bootstrap/Alert";
import sytles from "./Banner.module.css";

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  isLoading && <div>Loading...</div>;
  isError && <Alert variant="danger">{error.message}</Alert>;

  return (
    <div
      className={sytles.banner}
      style={{
        backgroundImage:
          "url(" +
          `https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/${data?.results[0].poster_path}` +
          ")",
      }}
    >
      <div className={sytles["banner-text-area"]}>
        <h1 className={sytles.title}>{data?.results?.[0]?.title}</h1>
        <p>{data?.results?.[0]?.overview}</p>
      </div>
    </div>
  );
};

export default Banner;
