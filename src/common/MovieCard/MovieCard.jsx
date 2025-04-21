import React from "react";
import styles from "./MovieCard.module.css";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";

const MovieCard = ({ movie }) => {
  const { data: generData } = useMovieGenreQuery();
  const showGenres = (generIdList) => {
    if (!generData) return [];

    const generDataName = generIdList.map((id) => {
      const generObj = generData.find((gener) => gener.id === id);
      return generObj.name;
    });

    return generDataName;
  };
  return (
    <div
      className={styles.movieCard}
      style={{
        backgroundImage: `url("https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}")`,
      }}
    >
      <div className={styles.overlay}>
        <h3 className={styles.title}>{movie.title}</h3>
        <div>
          {showGenres(movie.genre_ids).map((id) => (
            <span key={id} className={styles.badge}>
              {id}
            </span>
          ))}
        </div>
        <div>
          <div>평점: {Math.ceil(movie.vote_average * 10) / 10}</div>
          <div>{movie.adult ? "청소년 관람불가" : "전체 이용가"}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
