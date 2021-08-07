import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCodeTheater } from "../../redux/action/heThongRapAction/actions";

const TheaterLogo = () => {
  const dispatch = useDispatch();

  const theaterList = useSelector(
    (state) => state.heThongRapReducer.theaterList
  );
  const changeCodeTheater = (codeTheater) => {
    switch (codeTheater) {
      case "BHDStar": {
        dispatch(getCodeTheater("bhd-star-cineplex-pham-hung"));
        break;
      }
      case "CGV": {
        dispatch(getCodeTheater("cgv-aeon-binh-tan"));
        break;
      }
      case "CineStar": {
        dispatch(getCodeTheater("cns-quoc-thanh"));
        break;
      }
      case "Galaxy": {
        dispatch(getCodeTheater("glx-huynh-tan-phat"));
        break;
      }
      case "LotteCinima": {
        dispatch(getCodeTheater("lotte-cantavil"));
        break;
      }
      case "MegaGS": {
        dispatch(getCodeTheater("megags-cao-thang"));
        break;
      }
    }
  };

  const renderTheaterlist = () => {
    return theaterList?.map((item, index) => (
      <div
        key={index}
        className={`theater__logo__item ${index === 0 ? "active" : null}`}
        data-toggle="tab"
        role="tab"
        data-target={`#${item.maHeThongRap}`}
        aria-selected="true"
        onClick={() => changeCodeTheater(item.maHeThongRap)}
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
    <div className="theater__logo nav nav-tabs flex-md-column" role="tablist">
      {renderTheaterlist()}
    </div>
  );
};

export default TheaterLogo;
