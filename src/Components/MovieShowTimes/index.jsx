import React from "react";
import format from "date-format";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const MovieShowTimes = ({ lichChieu }) => {
  const heThongRapReducer = useSelector((state) => state.heThongRapReducer);
  const { rap } = heThongRapReducer;
  const history = useHistory();
  const lichChieuArr = lichChieu.filter(
    (el) => el.thongTinRap.maHeThongRap == rap
  );

  const handleClick = (ma) => {
    console.log(ma);
    history.push(`/booking/${ma}`);
  };

  console.log(lichChieuArr);

  return (
    <div className="movieShowTime">
      <div className="times">
        {lichChieuArr.map((el, idx) => (
          <div
            onClick={() => handleClick(el.maLichChieu)}
            key={idx}
            className="time"
          >
            <span className="timeNumber">
              {format("hh:mm", new Date(el.ngayChieuGioChieu))}
            </span>
            ~<span>{el.thoiLuong}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieShowTimes;
