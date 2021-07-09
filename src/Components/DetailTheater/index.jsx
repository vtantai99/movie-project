import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCodeTheater } from "../../redux/action/movieDetailAction/actions";

const DetailTheater = () => {
  const { theaterList } = useSelector((state) => state.heThongRapReducer);
  const dispatch = useDispatch();
  const renderTheaterLogo = () => {
    return theaterList?.map((item, index) => (
      <div
        key={index}
        className={`detail__theater__item nav-item ${
          index === 0 ? "active" : null
        }`}
        data-toggle="tab"
        role="tab"
        data-target={`#${item.maHeThongRap}`}
        aria-selected="true"
        onClick={() => {
          dispatch(updateCodeTheater(item.maHeThongRap));
        }}
      >
        <img src={item.logo} alt={item.tenHeThongRap} />
        <span>{item.tenHeThongRap}</span>
      </div>
    ));
  };
  return (
    <div className="detail__theater nav nav-tabs" style={{ marginBottom: "0" }}>
      {renderTheaterLogo()}
    </div>
  );
};

export default DetailTheater;
