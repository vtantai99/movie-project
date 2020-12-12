import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTheaterDetail } from "../../redux/action/heThongRapAction/actions";
import TheaterListDetailItem from "../TheaterListDetailItem";

const TheaterListDetail = () => {
  const dispatch = useDispatch();
  const theaterDetail = useSelector(
    (state) => state.heThongRapReducer.theaterDetail
  );
  useEffect(() => {
    dispatch(fetchTheaterDetail());
  }, []);
  const renderTheaterDetail = () => {
    return theaterDetail.map((item, index) => (
      <div
        className={`tab-pane fade${index === 0 ? "show active" : ""}`}
        id={item.maHeThongRap}
        key={index}
      >
        <div className="nav nav-tabs" style={{ borderBottom: 0 }}>
          <TheaterListDetailItem
            detail={item}
            nameTheater={item.maHeThongRap}
          />
        </div>
      </div>
    ));
  };
  return (
    <div className="tab-content theater__detail__name" role="tabpanel">
      {renderTheaterDetail()}
    </div>
  );
};

export default TheaterListDetail;
