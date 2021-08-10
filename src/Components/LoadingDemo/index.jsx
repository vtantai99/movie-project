import React from "react";
import { useSelector } from "react-redux";
const LoadingDemo = () => {
  const { isLoading } = useSelector((state) => state.commonReducer);
  const { isLight } = useSelector((state) => state.themeReducer);

  return isLoading ? (
    <div
      className={`${
        !isLight && "bg-gray-800 text-white"
      } loading-screen transition`}
    >
      <div className="loading">
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
