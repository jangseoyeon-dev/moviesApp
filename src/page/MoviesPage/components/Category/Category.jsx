import React from "react";
import { useMovieGenreQuery } from "../../../../hooks/useMovieGenre";

import styles from "./Category.module.css";

const Category = ({ gerneId, setQuery }) => {
  const { data } = useMovieGenreQuery();

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.title}>카테고리</h2>
        <select
          className={styles.select}
          value={gerneId}
          onChange={(e) =>
            setQuery((prev) => ({ ...prev, gerneId: e.target.value }))
          }
        >
          <option value="">전체</option>
          {data?.map((item) => (
            <option className={styles.option} key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.box}>
        <h2 className={styles.title}>인기도</h2>
        <select
          className={styles.select}
          onChange={(e) =>
            setQuery((prev) => ({ ...prev, sort: e.target.value }))
          }
        >
          <option value={"popularity.desc"}>인기 많은 순</option>
          <option value={"popularity.asc"}>인기 적은 순</option>
        </select>
      </div>
    </div>
  );
};

export default Category;
