import React, { Fragment } from "react";
import format from "date-format";
import { useHistory } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
const HourHomeDesktop = (props) => {
  const history = useHistory();
  // console.log(props);
  const filterDate = props.movieTime
    // .filter(
    //   (item) =>
    //     new Date(item.ngayChieuGioChieu).getDate() === new Date().getDate() // nếu ngày giống ngày hiện tại thì xoá item đó đi
    // )
    .map((item) => {
      return {
        gioChieu: format("hh:mm", new Date(item.ngayChieuGioChieu)),
        maLichChieu: item.maLichChieu,
      };
    });
  //   Hàm cộng thêm giờ cho giờ chiếu để hiển thị giờ kết thúc của bộ phim
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
  // Hàm này để check: nếu giờ khởi chiếu của phim sớm hơn thời gian hiện tại thì disable nó đi, không cho user chọn
  const disableTime = (time) => {
    if (time) {
      const hours = time.split(":");
      if (
        +hours[0] >= new Date().getHours() &&
        +hours[1] > new Date().getMinutes()
      )
        return true;
      else if (
        +hours[0] > new Date().getHours() &&
        +hours[1] < new Date().getMinutes()
      )
        return true;
      else return false;
    }
  };
  const renderMovieDetailTime = () => {
    return filterDate.map((item, index) => (
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
      </>
    ));
  };
  return <Fragment>{renderMovieDetailTime()}</Fragment>;
};
export default HourHomeDesktop;
