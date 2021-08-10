import React from "react";
import { useSelector } from "react-redux";

import TheatersDetailItem from "../TheatersDetailItem";

const TheatersDetail = () => {
  const theaterDetail = useSelector(
    (state) => state.heThongRapReducer.theaterDetail
  );

  const renderTheaterDetail = () => {
    return theaterDetail.map((item, index) => (
      <div
        className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
        id={item.maHeThongRap}
        key={index}
      >
        <TheatersDetailItem detail={item} nameTheater={item.maHeThongRap} />
      </div>
    ));
  };
  return (
    <div className="theater__detail tab-content " role="tabpanel">
      {renderTheaterDetail()}
    </div>
  );
};

export default TheatersDetail;
