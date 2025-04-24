import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import Alert from "react-bootstrap/Alert";

// Embla Carousel 라이브러리 사용
import EmblaCarousel from "./EmblaCarousel";
const OPTIONS = { dragFree: true, loop: true };

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  isLoading && <div sytles={{ color: "red" }}>Loading...</div>;
  isError && <Alert variant="danger">{error.message}</Alert>;

  return (
    <div style={{ marginTop: "100px", overflow: "hidden", height: "40%" }}>
      <EmblaCarousel slides={data?.results} options={OPTIONS} />
    </div>
  );
};

export default Banner;
