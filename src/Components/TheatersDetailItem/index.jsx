import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCodeTheater } from "../../redux/action/heThongRapAction/actions";
import TheatersMovieMobile from "../TheatersMovieMobile";
import {
  renderImage,
  renderStyleColor,
} from "../../Helper/Function/customTheater";

const TheaterListDetailItem = (props) => {
  // console.log(props.detail);
  const dispatch = useDispatch();
  const codeTheater = useSelector(
    (state) => state.heThongRapReducer.codeTheater
  );
  const cutStr = (string) => {
    return string.substring(string.indexOf("-"));
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
