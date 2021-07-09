import React from "react";
import { useSelector } from "react-redux";
import TheatersMovieDesktop from "../TheatersMovieDesktop";
const TheaterMovie = () => {
  const theaterDetail = useSelector(
    (state) => state.heThongRapReducer.theaterDetail
  );
  const codeTheater = useSelector(
    (state) => state.heThongRapReducer.codeTheater
  );
  const renderMovieList = () => {
    return theaterDetail?.map((item) =>
      item.lstCumRap
        .filter((item) => item.maCumRap === codeTheater)
        .map((item, index) => (
          <div key={index}>
            <TheatersMovieDesktop movieDetail={item} />
          </div>
        ))
    );
  };
  return <div className="theater__movies">{renderMovieList()}</div>;
};

export default TheaterMovie;
