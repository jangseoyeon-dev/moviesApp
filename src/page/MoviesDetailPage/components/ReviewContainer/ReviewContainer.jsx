import React, { useState } from "react";
import { useReviewMovieQuery } from "../../../../hooks/useReviewMovie";
import style from "./ReviewConatiner.module.css";

const ReviewContainer = ({ movieId }) => {
  const { data, isError, error } = useReviewMovieQuery(movieId);
  const [expandKey, setExpandKey] = useState([]);

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
              {item.author_details.rating} / 10
            </span>
          </div>
          <p
            className={`${style.content} ${
              expandKey.includes(item.id) ? style.expanded : ""
            }`}
          >
            {item.content}
          </p>
          <span
            class={style.moreText}
            onClick={() =>
              setExpandKey((prev) =>
                prev.includes(item.id)
                  ? prev.filter((id) => id !== item.id)
                  : [...prev, item.id]
              )
            }
          >
            {expandKey.includes(item.id) ? "접기" : "더보기"}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ReviewContainer;
