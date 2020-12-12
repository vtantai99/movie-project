import React from "react";
import TheaterListDetail from "../TheaterListDetail";
import TheaterLogo from "../TheaterLogo";
import TheaterMovie from "../TheaterMovies";

const TheaterList = () => {
  return (
    <section className="theater" id="theaters">
      <div
        className="row flex-md-row flex-column"
        style={{ border: "1px solid #ebebec", borderRadius: "4px" }}
      >
        <TheaterLogo />
        <div className="theater__detail">
          <TheaterListDetail />
          <TheaterMovie />
        </div>
      </div>
    </section>
  );
};

export default TheaterList;
