import React from "react";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div>
      <div>
        <img
          className={styles.logo}
          alt="logo"
          src="https://assets.coupangplay.com/images/svg/web_gnb_logo_new.svg"
        />
        <div className={styles.infoText}>
          <span>404</span>
          <br />
          <span>
            서비스 이용에 불편을 드려 죄송합니다. 해당 페이지를 찾을 수
            없습니다. 홈페이지로 이동해 다양한 콘텐츠를 만나보세요.
          </span>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
