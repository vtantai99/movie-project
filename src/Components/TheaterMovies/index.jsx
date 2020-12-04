import React from "react";
import { useSelector } from "react-redux";
import TheaterMovieDetail from "../TheaterMovieDetail";

const TheaterMovie = () => {
  const theaterDetail = useSelector(
    (state) => state.heThongRapReducer.theaterDetail
  );
  const renderMovieList = () => {
    // console.log(theaterDetail);
    // return <div>Hello</div>;
    return theaterDetail?.map((item) =>
      item.lstCumRap.map((item, index) => (
        <div
          //   className={`tab-pane fade ${index === 0 ? "show active" : "hidden"}`}
          className="tab-pane fade show"
          key={index}
          id={item.maCumRap}
        >
          <TheaterMovieDetail movieDetail={item} />
        </div>
      ))
    );
  };
  return (
    <div className="theater__movies tab-content" role="tabpanel">
      {theaterDetail ? renderMovieList() : null}
    </div>
  );
};

export default TheaterMovie;
