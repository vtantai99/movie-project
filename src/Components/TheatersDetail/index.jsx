import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTheaterListDetail,
  refreshCodeTheater,
} from "../../redux/action/heThongRapAction/actions";
import TheatersDetailItem from "../TheatersDetailItem";

const TheatersDetail = () => {
  const dispatch = useDispatch();
  const theaterDetail = useSelector(
    (state) => state.heThongRapReducer.theaterDetail
  );
  useEffect(() => {
    dispatch(fetchTheaterListDetail());
    dispatch(refreshCodeTheater());
  }, []);
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
