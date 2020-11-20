import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSeat } from "../../redux/action/bookingAction/actions";
import "./index.scss";
const BookingSeats = () => {
  const dispatch = useDispatch();
  const bookingReducer = useSelector((state) => state.bookingReducer);

  const { bookingList, countDownTime } = bookingReducer;
  const { danhSachGhe } = bookingList;
  // if (danhSachGhe) {
  //   console.log(danhSachGhe.length);
  // }

  const renderSeats = () => {
    const ghes = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let arr = [];
    let start = 0;
    let end;
    for (let i = 0; i < 10; i++) {
      arr.push({ day: ghes[i], seats: [] });
    }
    for (var i = 0; i < 10; i++) {
      if (start == 0) {
        end = 16;
      } else {
        end = start + 16;
      }
      for (var j = start; j < end; j++) {
        const currentSeats = arr[i].seats;
        if (typeof currentSeats !== "undefined") {
          const ghe = { ...danhSachGhe[j], tenDay: ghes[i] };
          currentSeats.push(ghe);
        }
      }
      start += 16;
    }

    return arr.map((seatRow, idx) => (
      <div key={idx} className="seatRow">
        <span className="tenDay">{seatRow.day}</span>
        <div className="seatRowContainer">
          {seatRow.seats.map((seat, i) => (
            <div
              key={i}
              onClick={() => countDownTime > 0 && onSelectSeat(seat)}
              className={getClass(seat)}
            >
              {seat.dangChon ? seatRow.day + `${i + 1}` : ""}
            </div>
          ))}
        </div>
      </div>
    ));
  };

  const onSelectSeat = (seat) => {
    if (!seat.daDat) {
      dispatch(selectSeat(seat));
    }
  };

  const getClass = (seat) => {
    let string = "seat ";
    if (seat.daDat) {
      string += "DaChon";
    } else if (seat.dangChon) {
      string += "DangChon";
    } else {
      if (seat.loaiGhe === "Thuong") {
        string += "Thuong";
      } else if (seat.loaiGhe === "Vip") {
        string += "Vip";
      }
    }
    return string;
  };

  return danhSachGhe ? <div className="seats">{renderSeats()}</div> : "";
};

export default BookingSeats;
