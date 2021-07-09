import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCodeTheater } from "../../redux/action/heThongRapAction/actions";
import TheatersMovieMobile from "../TheatersMovieMobile";
import theaterBhd from "../../Assets/Images/theaterBhd.jpg";
import theaterCgv from "../../Assets/Images/theaterCgv.jpg";
import theaterCineStar from "../../Assets/Images/theaterCineStar.jpg";
import theaterGalaxy from "../../Assets/Images/theaterGalaxy.png";
import theaterLotte from "../../Assets/Images/theaterLotte.jpg";
import theaterMega from "../../Assets/Images/theaterMega.jpeg";
const TheaterListDetailItem = (props) => {
  // console.log(props.detail);
  const dispatch = useDispatch();
  const codeTheater = useSelector(
    (state) => state.heThongRapReducer.codeTheater
  );
  const cutStr = (string) => {
    return string.substring(string.indexOf("-"));
  };
  const renderImage = (nameTheater) => {
    switch (nameTheater) {
      case "BHDStar": {
        return theaterBhd;
      }
      case "CGV": {
        return theaterCgv;
      }
      case "CineStar": {
        return theaterCineStar;
      }
      case "Galaxy": {
        return theaterGalaxy;
      }
      case "LotteCinima": {
        return theaterLotte;
      }
      case "MegaGS": {
        return theaterMega;
      }
      default:
        return null;
    }
  };
  const renderStyleColor = (nameTheater) => {
    switch (nameTheater) {
      case "BHDStar": {
        return { color: "#8bc541" };
      }
      case "CGV": {
        return { color: "#e71a0f" };
      }
      case "CineStar": {
        return { color: "#df0d7a" };
      }
      case "Galaxy": {
        return { color: "#f60" };
      }
      case "LotteCinima": {
        return { color: "#ca4137" };
      }
      case "MegaGS": {
        return { color: "#e5a813" };
      }
      default:
        return null;
    }
  };
  const reSize = () => {
    if (window.innerWidth >= 740) return true;
    else return false;
  };
  const renderTheaterDetailItem = () => {
    return props.detail.lstCumRap.map((item, index) => (
      <div
        className={`theater__detail__item ${
          item.maCumRap === codeTheater ? "active" : ""
        }`}
      >
        <div
          key={index}
          className={`item`}
          data-toggle={window.innerWidth >= 740 ? "tab" : "collapse"}
          role={window.innerWidth >= 740 ? "tab" : "button"}
          data-target={`#${item.maCumRap}`}
          onClick={() => dispatch(getCodeTheater(item.maCumRap))}
        >
          <img
            className="item--img"
            src={renderImage(props.nameTheater)}
            alt={props.nameTheater}
          />
          <div className="item--info">
            <span className="info__theater">
              <span style={renderStyleColor(props.nameTheater)}>
                {props.nameTheater}&nbsp;
              </span>
              {cutStr(item.tenCumRap)}
            </span>
            <span className="info__address">{item.diaChi}</span>
          </div>
        </div>
        <TheatersMovieMobile
          danhSachPhim={{
            danhSachPhimTheoRap: item.danhSachPhim,
            maCumRap: item.maCumRap,
          }}
        />
      </div>
    ));
  };
  return <Fragment>{renderTheaterDetailItem()}</Fragment>;
};

export default TheaterListDetailItem;
