import React, { Fragment } from "react";
import format from "date-format";
import { useHistory } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import { disableTime, convertTime } from "../../Helper/Function/customTime";
const HourButton = (props) => {
  const history = useHistory();

  const filterDate = props.lichChieuTheoNgay.map((item) => {
    return {
      gioChieu: format("hh:mm", new Date(item.ngayChieuGioChieu)),
      maLichChieu: item.maLichChieu,
    };
  });
  const renderMovieDetailTime = () => {
    return filterDate.map((item, index) => (
      <Tooltip
        key={index}
        title={disableTime(item.gioChieu) ? "Buy it" : "Oops! Overtime today"}
        placement="top-center"
      >
        <button
          className="hour__btn"
          onClick={
            disableTime(item.gioChieu)
              ? () => history.push(`/booking/${item.maLichChieu}`)
              : null
          }
          style={
            disableTime(item.gioChieu)
              ? { backgroundColor: "#fff" }
              : { backgroundColor: "#ebebec" }
          }
        >
          <span
            className="hour__btn--start "
            style={
              disableTime(item.gioChieu)
                ? { color: "#108f3e" }
                : { color: "#9b9b9b" }
            }
          >
            {item.gioChieu}
          </span>
          &nbsp;~&nbsp;{convertTime(item.gioChieu, 2)}
        </button>
      </Tooltip>
    ));
  };
  return <Fragment>{renderMovieDetailTime()}</Fragment>;
};
export default HourButton;
