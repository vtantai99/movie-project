import React from "react";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
const BookingCountDown = () => {
  const history = useHistory();
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
          swal({
            title: "Thời gian giữ ghế đã hết",
            text: "Bạn có muốn đặt vé lại ?",
            icon: "warning",
            buttons: {
              cancel: "Trang chủ",
              confirm: "Đặt vé lại",
            },
          }).then((confirm) => {
            if (confirm) {
              window.location.reload();
            } else {
              history.push("/");
            }
          });
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });
  return (
    <div className="timer__check">
      <>
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </>
    </div>
  );
};

export default BookingCountDown;
