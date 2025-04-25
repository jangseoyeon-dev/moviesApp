import React from "react";
import { useMovieGenreQuery } from "../../../../hooks/useMovieGenre";

import styles from "./Category.module.css";
import Select from "../../../../common/Select/Select";

const Category = () => {
  const { data } = useMovieGenreQuery();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>카테고리</h2>
      <ul className={styles.itemBox}>
        {data?.map((item) => (
          <li className={styles.item} key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
      <div className={styles.select}>
        <Select className={styles.select} data={data} />
      </div>
    </div>
  );
};

export default Category;
