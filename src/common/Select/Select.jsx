import React from "react";
import styles from "./Select.module.css";

const Select = ({ data }) => {
  return (
    <select className={styles.select}>
      {data?.map((item) => (
        <option className={styles.option} key={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
