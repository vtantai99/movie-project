import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTheaterDetail,
  fetchTheaterList,
} from "../../redux/action/heThongRapAction/actions";

const TheaterLogo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTheaterList());
  }, []);
  const theaterList = useSelector(
    (state) => state.heThongRapReducer.theaterList
  );
  const renderTheaterlist = () => {
    return theaterList?.map((item, index) => (
      <div
        key={index}
        className={`theater__logo__item ${index === 0 ? "active " : ""}`}
        data-toggle="tab"
        role="tab"
        data-target={`#${item.maHeThongRap}`}
        aria-selected="true"
      >
        <img
          className="theater__logo__item--img"
          src={item.logo}
          alt={item.tenHeThongRap}
        />
      </div>
    ));
  };
  return (
    <div className="nav nav-tabs theater__logo flex-md-column" role="tablist">
      {renderTheaterlist()}
    </div>
  );
};

export default TheaterLogo;
