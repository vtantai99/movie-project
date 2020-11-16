import React from "react";
import { useSelector } from "react-redux";
import "./index.scss";
const Loading = () => {
  const commonReducer = useSelector((state) => state.commonReducer);
  const { isLoading } = commonReducer;

  return isLoading ? (
    <div className="loading">
      <img
        src="https://tix.vn/app/assets/img/icons/fade-loading/11.png"
        alt=""
      />
    </div>
  ) : (
    ""
  );
};

export default Loading;
