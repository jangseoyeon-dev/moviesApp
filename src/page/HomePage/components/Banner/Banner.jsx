import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import Alert from "react-bootstrap/Alert";
import styles from "./Banner.module.css";

// Embla Carousel 라이브러리 사용
import EmblaCarousel from "./EmblaCarousel/EmblaCarousel";
const OPTIONS = { dragFree: true, loop: true };

const Banner = () => {
  const { data, isError, error } = usePopularMoviesQuery();
  isError && <Alert variant="danger">{error.message}</Alert>;

  return (
    <div className={styles.bannerWrapper}>
      <EmblaCarousel slides={data?.results} options={OPTIONS} />
    </div>
  );
};

export default Banner;
