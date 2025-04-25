import React from "react";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.container}>
        <img
          className={styles.logo}
          alt="logo"
          src="https://assets.coupangplay.com/images/svg/web_gnb_logo_new.svg"
        />
        <div className={styles.box}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://static.coupangcdn.com/image/coupang/loyalty/icons/icon-wow-2023.png"
              width={"70px"}
            />
            <h3 style={{ fontSize: "25px" }}>쿠팡 와우회원 전용</h3>
          </div>
          <div style={{ fontSize: "60px", lineHeight: "70px" }}>
            <span>최신 영화, TV시리즈,</span>
            <br />
            <span>스포츠 중계를 모두 한 곳에서</span>
          </div>
        </div>
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/home");
          }}
        >
          <input
            className={styles.input}
            type="email"
            placeholder="이메일을 입력하세요"
            required
          />
          <input
            className={styles.input}
            type="password"
            placeholder="비밀번호를 입력하세요"
            required
          />
          <button type="submit" className={styles.loginButton}>
            로그인
          </button>
        </form>
      </div>
      <div className={styles.container2}>
        <img
          src="https://assets.coupangplay.com/images/pre-login2-update-13-jan.png"
          width={"400px"}
        />
        <div className={styles.text}>
          <h2>
            오직 쿠팡플레이에서
            <br /> 즐길 수 있는 쿠플 시리즈 추천
          </h2>
          <span>
            다양한 콘텐츠를 모바일, 태블릿, PC, TV로 언제 어디서든 시청
          </span>
        </div>
      </div>
      <footer></footer>
    </div>
  );
};

export default LoginPage;
