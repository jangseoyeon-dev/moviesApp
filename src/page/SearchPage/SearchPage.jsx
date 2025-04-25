import React, { useState } from "react";
import styles from "./SearchPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

const SearchPage = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const navigate = useNavigate();
  const searchByKeyword = () => {
    navigate(`/movies?q=${searchKeyword}`);
    setSearchKeyword("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.menuBox}>
        <span onClick={() => navigate("/home")}>Home</span>
        <br />
        <span onClick={() => navigate("/movies")}>Movies</span>
      </div>
      <div className={styles.inputbox}>
        <input
          className={styles.input}
          type="text"
          placeholder="제목, 장르, 배우로 검색해보세요."
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchByKeyword();
            }
          }}
        />
        <FontAwesomeIcon icon={faSearch} onClick={searchByKeyword} />
      </div>
    </div>
  );
};

export default SearchPage;
