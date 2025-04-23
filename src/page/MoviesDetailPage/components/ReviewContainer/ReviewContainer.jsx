import React from "react";
import { useReviewMovieQuery } from "../../../../hooks/useReviewMovie";
import style from "./ReviewConatiner.module.css";

const ReviewContainer = ({ movieId }) => {
  const { data, isLoading, isError, error } = useReviewMovieQuery(movieId);

  if (isLoading) {
    return <div className={style.message}>Loading...</div>;
  }

  if (isError) {
    return <div className={style.message}>{error.message}</div>;
  }

  return (
    <div className={style.container}>
      {data?.results.map((item) => (
        <div key={item.id} className={style.card}>
          <div className={style.header}>
            <span className={style.author}>{item.author}</span>
            <span className={style.rating}>
              {item.author_details.rating ?? "?"} / 10
            </span>
          </div>
          <p className={style.content}>{item.content}</p>
        </div>
      ))}
      <button className={style.btn}>더보기</button>
    </div>
  );
};

export default ReviewContainer;
