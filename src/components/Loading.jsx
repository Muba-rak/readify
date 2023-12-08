import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Loading = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "550px" }}
    >
      <RotatingLines
        strokeColor="hsl(22, 28%, 45%)"
        strokeWidth="2"
        animationDuration="0.75"
        width="200"
        visible={true}
      />
    </div>
  );
};

export default Loading;
