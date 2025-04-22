import React, { CSSProperties } from "react";
import { ClipLoader } from "react-spinners";

const Loding = () => {
  return (
    <div
      style={{
        marginTop: "100px",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ClipLoader
        color="white"
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loding;
