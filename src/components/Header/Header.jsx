import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css"; // 상대 경로 OK?

const navData = [
  { id: 0, title: "TV", value: "tv" },
  { id: 1, title: "영화", value: "movie" },
  { id: 2, title: "스포츠", value: "sports" },
  { id: 3, title: "스토어", value: "store" },
  { id: 4, title: "키즈", value: "kids" },
  { id: 5, title: "라이브", value: "live" },
];

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
        <NavLink to="/home">
          <img
            className={styles.logo}
            alt="logo"
            src="https://assets.coupangplay.com/images/svg/web_gnb_logo_new.svg"
          />
        </NavLink>
        <ul className={styles.menu}>
          {navData.map((item) => (
            <NavLink key={item.id} to={item.value}>
              {item.title}
            </NavLink>
          ))}
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
