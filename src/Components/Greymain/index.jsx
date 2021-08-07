import React from "react";
import { useSelector } from "react-redux";

const Greymain = () => {
  const { isLight } = useSelector((state) => state.themeReducer);

  return (
    <section
      className={`${!isLight && "invisible"} greyMain transition`}
    ></section>
  );
};

export default Greymain;
