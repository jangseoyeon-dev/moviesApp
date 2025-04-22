import React from "react";
import styles from "./MovieCard.module.css";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";

const MovieCard = ({ movie }) => {
  const { data: generData } = useMovieGenreQuery();
  console.log("generData", generData);
  const showGenres = (generIdList) => {
    if (!generData || !generIdList) return [];

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
          {showGenres(movie.genre_ids)?.map((id, index) => (
            <span key={index} className={styles.badge}>
              {id}
            </span>
          ))}
        </div>
        <div>
          <div>평점: {Math.ceil(movie.vote_average * 10) / 10}</div>
          <div>{movie.adult ? "전체 관람가" : "성인"}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
