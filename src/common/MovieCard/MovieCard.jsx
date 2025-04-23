import React from "react";
import styles from "./MovieCard.module.css";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import { useNavigate } from "react-router";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { data: generData } = useMovieGenreQuery();
  const showGenres = (generIdList) => {
    if (!generData || !generIdList) return [];

    const generDataName = generIdList.map((id) => {
      const generObj = generData.find((gener) => gener.id === id);
      return generObj.name;
    });

    return generDataName;
  };

  // 영화 카드를 누르면 카드 아이디별 페이지로 이동
  const handleClick = () => {
    navigate(`/movies/${movie.id}`);
  };
  return (
    <div
      className={styles.movieCard}
      style={{
        backgroundImage: `url("https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}")`,
      }}
      onClick={handleClick}
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
