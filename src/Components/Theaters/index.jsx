import React from "react";
import { useSelector } from "react-redux";
import TheatersDetail from "../TheatersDetail";
import TheatersLogo from "../TheatersLogo";
import TheatersMovie from "../TheatersMovie";
const Theaters = () => {
  const { isLight } = useSelector((state) => state.themeReducer);

  return (
    <section
      className={`${!isLight && "bg-gray-800 text-white"} theater transition`}
      id="theaters"
    >
      <div
        className="row flex-md-row flex-column"
        style={{
          border: "1px solid #ebebec",
          borderRadius: "4px",
          margin: "0",
        }}
      >
        <TheatersLogo />
        <div className="theater__main">
          <TheatersDetail />
          <TheatersMovie />
        </div>
      </div>
    </section>
  );
};

export default Theaters;
