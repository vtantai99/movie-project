import React from "react";
import { useHistory } from "react-router";
import format from "date-format";
import Tooltip from "@material-ui/core/Tooltip";
const HourHomeMobile = (props) => {
  const history = useHistory();
  const listHours = props.lichChieuTheoPhim.map((item) => {
    return {
      gioChieu: format("hh:mm", new Date(item.ngayChieuGioChieu)),
      maLichChieu: item.maLichChieu,
    };
  });
  const convertTime = (item, time) => {
    item = item.split(":");
    let hours = +item[0];
    let minutes = +item[1];
    minutes >= 10 ? (minutes = minutes) : (minutes = "0" + minutes);
    let timeEnds = hours + time;
    timeEnds >= 24 ? (timeEnds = timeEnds - 24) : (timeEnds = timeEnds);
    timeEnds < 10 ? (timeEnds = "0" + timeEnds) : (timeEnds = timeEnds);
    return timeEnds + ":" + minutes;
  };
  const disableTime = (time) => {
    if (time) {
      const hours = time.split(":");
      if (
        +hours[0] >= new Date().getHours() &&
        +hours[1] > new Date().getMinutes()
      )
        return true;
      if (
        +hours[0] > new Date().getHours() &&
        +hours[1] < new Date().getMinutes()
      )
        return true;
      return false;
    }
  };
  // console.log(listHours);
  const renderItemHours = () => {
    return listHours.map((item, index) => (
      <>
        <Tooltip
          title={
            disableTime(item.gioChieu) ? "Let's go" : "Oops! Overtime today"
          }
          placement="top-center"
        >
          <button
            className="hour__btn"
            key={index}
            onClick={
              disableTime(item.gioChieu)
                ? () => history.push(`/booking/${item.maLichChieu}`)
                : null
            }
            style={
              disableTime(item.gioChieu)
                ? { backgroundColor: "#fff", minWidth: "40%" }
                : { backgroundColor: "#ebebec", minWidth: "40%" }
            }
          >
            <span
              className="hour__btn--start"
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
      </>
    ));
  };
  return <div className="col-12">{renderItemHours()}</div>;
};

export default HourHomeMobile;
