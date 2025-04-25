import React from "react";
import style from "./RecommendContainer.module.css";
import useRecommendMovies from "../../../../hooks/useRecommendMovies";
import MovieCard from "../../../../common/MovieCard/MovieCard";

const RecommendContainer = ({ movieId }) => {
  const { data, isError, error } = useRecommendMovies({ movieId });
  if (isError) {
    return <div className={style.message}>{error.message}</div>;
  }
  return (
    <div className={style.container}>
      <div className={style.cardBox}>
        {data?.map((item) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </div>
    </div>
  );
};

export default RecommendContainer;
