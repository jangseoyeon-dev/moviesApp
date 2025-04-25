import React from "react";
import { ClipLoader } from "react-spinners";
import style from "./Loding.module.css";

const Loding = () => {
  return (
    <div className={style.container}>
      <ClipLoader
        color="white"
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loding;
