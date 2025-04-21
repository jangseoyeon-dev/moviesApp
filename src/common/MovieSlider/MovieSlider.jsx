import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from "./MovieSlider.module.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MovieSlider = ({ title, movies }) => {
  return (
    <div style={{ marginBottom: "50px" }}>
      <h2 className={styles.title}>{title}</h2>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="movie-slider p-1"
        containerClass={styles["carousel-container"]}
        responsive={responsive}
      >
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlider;
