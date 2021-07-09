import React from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCodeTheaterMobile } from "../../redux/action/movieDetailAction/actions";
import DetailMobileTime from "../DetailMobileTime";
const DetailTheaterMobile = () => {
  const dispatch = useDispatch();
  const { theaterList } = useSelector((state) => state.heThongRapReducer);
  const renderTheaterListMobile = () => {
    return theaterList?.map((item, index) => (
      <Fragment>
        <div
          className="logo__wrapper collapsed"
          key={index}
          data-toggle="collapse"
          data-target={`#${item.maHeThongRap}`}
          aria-expanded="false"
          role="button"
          onClick={() => dispatch(updateCodeTheaterMobile(item.maHeThongRap))}
        >
          <div className="theater__item">
            <img
              className="item--img"
              src={item.logo}
              alt={item.tenHeThongRap}
            />
            <span className="item--name">{item.tenHeThongRap}</span>
          </div>
        </div>
        <DetailMobileTime
          maHeThongRap={item.maHeThongRap}
          tenHeThongRap={item.tenHeThongRap}
        />
      </Fragment>
    ));
  };
  return (
    <div className="list__theater__mobile">{renderTheaterListMobile()}</div>
  );
};

export default DetailTheaterMobile;
