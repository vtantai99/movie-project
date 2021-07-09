import React from "react";
import { useSelector } from "react-redux";
const LoadingDemo = () => {
  const { darkMode, isLoading } = useSelector((state) => state.commonReducer);
  return isLoading ? (
    <div
      className={darkMode === true ? "loading-screen Dark" : "loading-screen"}
    >
      <div class="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  ) : (
    ""
  );
};

export default LoadingDemo;
