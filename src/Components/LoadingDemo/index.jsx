import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
const LoadingDemo = () => {
  const location = useLocation();

  const { isLoading } = useSelector((state) => state.commonReducer);
  const { isLight } = useSelector((state) => state.themeReducer);

  return isLoading ? (
    <div
      className={`${
        !isLight && "bg-gray-800 text-white"
      } loading-screen transition`}
    >
      <div className="flex flex-col items-center">
        <div className="loading">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {location.pathname === "/admin/dashboard" && (
          <p className="mt-3">
            Dữ liệu thống kê mất một ít thời gian, kiên nhẫn nhé
          </p>
        )}
      </div>
    </div>
  ) : (
    ""
  );
};

export default LoadingDemo;
