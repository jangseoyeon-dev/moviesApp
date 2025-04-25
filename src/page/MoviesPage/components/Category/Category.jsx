import React from "react";
import { useMovieGenreQuery } from "../../../../hooks/useMovieGenre";

import styles from "./Category.module.css";

const Category = () => {
  const { data } = useMovieGenreQuery();

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.title}>카테고리</h2>
        <select className={styles.select}>
          {data?.map((item) => (
            <option className={styles.option} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.box}>
        <h2 className={styles.title}>인기도</h2>
        <select className={styles.select}>
          <option>인기 순</option>
          <option>인기 많은 순</option>
          <option>인기 적은 순</option>
        </select>
      </div>
    </div>
  );
};

export default Category;
