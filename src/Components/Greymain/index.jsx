import React from "react";
import { useSelector } from "react-redux";

const Greymain = () => {
  const { darkMode } = useSelector((state) => state.commonReducer);
  return (
    <section
      className={darkMode === true ? "greyMain Dark" : "greyMain"}
    ></section>
  );
};

export default Greymain;
