import React from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import Tooltip from "@material-ui/core/Tooltip";
import { convertTime } from "../../Helper/Function/customTime";

const DetailTimeItem = ({ timeItem }) => {
  const history = useHistory();
  const { dateShow } = useSelector((state) => state.movieDetailReducer);

  const disableTime = (time) => {
    if (dateShow === new Date().getDate()) {
      let hours = time.split(":");
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
    return true;
  };

  return (
    <>
      <Tooltip
        title={
          disableTime(timeItem.gioChieu) ? "Let's go" : "Oops! Overtime today"
        }
        placement="top-center"
      >
        <button
          className="hour__detail"
          onClick={
            disableTime(timeItem.gioChieu)
              ? () => history.push(`/booking/${timeItem.maLichChieu}`)
              : null
          }
          style={
            disableTime(timeItem.gioChieu)
              ? { backgroundColor: "#fff" }
              : { backgroundColor: "#ebebec" }
          }
        >
          <span
            className="hour__detail--start"
            style={
              disableTime(timeItem.gioChieu)
                ? { color: "#108f3e" }
                : { color: "#9b9b9b" }
            }
          >
            {timeItem.gioChieu}
          </span>
          &nbsp;~&nbsp;{convertTime(timeItem.gioChieu, 2)}
        </button>
      </Tooltip>
    </>
  );
};

export default DetailTimeItem;
