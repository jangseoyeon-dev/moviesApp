import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";

const Header = () => {
  const headerRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const threshold = headerRef.current.offsetHeight;
        setIsFixed(window.scrollY >= threshold);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={headerRef}
      className={`${styles.header} ${isFixed ? styles.fixed : ""}`}
    >
      <div className={styles.left}>
        <img
          className={styles.logo}
          alt="logo"
          src="https://assets.coupangplay.com/images/svg/web_gnb_logo_new.svg"
        />
        <ul className={styles.menu}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="movies">Movies</NavLink>
        </ul>
      </div>
      <div>
        <NavLink to="/search">
          <FontAwesomeIcon
            icon={faSearch}
            style={{ color: "white", fontSize: "20px" }}
          />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
