import React from "react";
import styles from "./SearchPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.inputbox}>
          <input
            className={styles.input}
            type="text"
            placeholder="제목, 장르, 배우로 검색해보세요."
          />
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
