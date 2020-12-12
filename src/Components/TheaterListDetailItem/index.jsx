import { Opacity } from "@material-ui/icons";
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCodeTheater } from "../../redux/action/heThongRapAction/actions";
import BHD from "./Images/bhd.jpg";
import CGV from "./Images/cgv.jpg";
import CineStar from "./Images/cinestar.jpg";
import Galaxy from "./Images/galaxy.png";
import LotteCinima from "./Images/lotte.jpg";
import MegaGS from "./Images/megags.png";

const TheaterListDetailItem = (props) => {
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
        return BHD;
      }
      case "CGV": {
        return CGV;
      }
      case "CineStar": {
        return CineStar;
      }
      case "Galaxy": {
        return Galaxy;
      }
      case "LotteCinima": {
        return LotteCinima;
      }
      case "MegaGS": {
        return MegaGS;
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

  const renderTheaterDetailItem = () => {
    return props.detail.lstCumRap.map((item, index) => (
      <div
        className={`theater__detail__name__item ${
          item.maCumRap === codeTheater ? "active" : ""
        }`}
        data-toggle="tab"
        role="tab"
        key={index}
        onClick={() => dispatch(getCodeTheater(item.maCumRap))}
      >
        <img
          className="theater__detail__name__item--img"
          src={renderImage(props.nameTheater)}
          alt={props.nameTheater}
        />

        <div className="theater__detail__name__item--info">
          <span className="info__theater">
            <span style={renderStyleColor(props.nameTheater)}>
              {props.nameTheater}&nbsp;
            </span>
            {cutStr(item.tenCumRap)}
          </span>
          <span className="info__address">{item.diaChi}</span>
        </div>
      </div>
    ));
  };
  return <Fragment>{renderTheaterDetailItem()}</Fragment>;
};

export default TheaterListDetailItem;
