import { Button } from "@material-ui/core";
import React, { Fragment } from "react";
import format from "date-format";
import { NavLink } from "react-router-dom";
const check = (a) => {
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length - 1; j++) {
      if (a[i] === a[j]) {
        return true;
      }
    }
  }
};
const terminate = (a) => {
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] === a[j]) {
        a.splice(j, 1);
      }
    }
  }
  if (check(a)) {
    terminate(a);
  }
};

const TheaterMovieDetailTime = (props) => {
  const listTime = props.movieTime.lstLichChieuTheoPhim.map((item) => {
    return format("hh:mm", new Date(item.ngayChieuGioChieu));
  });
  //   console.log(listTime);
  terminate(listTime); //Xoa nhung giờ chiếu trùng nhau
  //   Hàm cộng thêm giờ cho giờ chiếu để hiển thị giờ kết thúc của bộ phim
  const time_convert = (item, time) => {
    let timeHours = Math.floor(time / 60);
    let timeMinutes = time % 60;
    let itemHours = Number(item.substr(0, item.indexOf(":")));
    let itemMinutes = Number(item.split(":")[1]);
    const a = itemHours + timeHours;
    const b = itemMinutes + timeMinutes;
    if (a.toString().length === 1 && b.toString().length === 2)
      return "0" + a + ":" + b;
    if (a.toString().length === 2 && b.toString().length === 1)
      return a + ":" + "0" + b;
    if (a.toString().length === 1 && b.toString().length === 1)
      return "0" + a + ":" + "0" + b;
    return a + ":" + b;
  };
  const disableTime = (time) => {
    // const hoursReal = new Date().getHours();
    // const minutesReal = new Date().getMinutes();
    if (time) {
      const hours = time.split(":");
      if (
        +hours[0] > new Date().getHours() &&
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

  const renderMovieDetailTime = () => {
    return listTime.map((item, index) => (
      <>
        <button
          //   className="time__btn"
          className={disableTime(item) ? "time__btn" : "time__btn__disable"}
          key={index}
          disabled={disableTime(item) ? false : true}
          style={
            disableTime(item)
              ? { backgroundColor: "rgba(246, 246, 246, 0.5)" }
              : {
                  opacity: "0.5",
                }
          }
        >
          {item}&nbsp;
          <span className="time__btn--end">
            ~ {time_convert(item, 120)}
            {/* {disableTime(item)} */}
          </span>
        </button>
        {/* <button disabled={disableTime(item) ? false : true}>Hello</button> */}
      </>
    ));
  };

  return (
    <Fragment>
      {renderMovieDetailTime()}
      {disableTime()}
    </Fragment>
  );
};

export default TheaterMovieDetailTime;
