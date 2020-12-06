import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TheaterMovieDetail from "../TheaterMovieDetail";

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
            <TheaterMovieDetail movieDetail={item} />
          </div>
        ))
    );
  };
  return (
    <div className="theater__movies tab-content" role="tabpanel">
      {renderMovieList()}
    </div>
  );
};

export default TheaterMovie;
