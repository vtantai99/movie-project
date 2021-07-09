import React from "react";
import { useSelector } from "react-redux";
import TheatersDetail from "../TheatersDetail";
import TheatersLogo from "../TheatersLogo";
import TheatersMovie from "../TheatersMovie";
const Theaters = () => {
  const { darkMode } = useSelector((state) => state.commonReducer);
  return (
    <section
      className={darkMode === true ? "theater Dark" : "theater"}
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
