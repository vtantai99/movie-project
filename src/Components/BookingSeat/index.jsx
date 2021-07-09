import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSeat } from "../../redux/action/bookingAction/actions";
const BookingSeats = () => {
  const dispatch = useDispatch();
  const { danhSachGhe } = useSelector(
    (state) => state.bookingReducer.bookingList
  );
  const renderSeats = () => {
    const ghes = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let arr = [];
    let start = 0;
    let end;
    for (let i = 0; i < ghes.length; i++) {
      arr.push({ day: ghes[i], seats: [] });
    }
    for (var i = 0; i < 10; i++) {
      if (start === 0) {
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
    return arr.map((seatRow, idx) => (
      <div key={idx} className="seats__main__row">
        <span className="tenDay">{seatRow.day}</span>
        <div className="seats__main__row__container">
          {seatRow.seats.map((seat, i) => (
            <div
              key={i}
              onClick={() => onSelectSeat(seat)}
              className={getClass(seat)}
            >
              {seat.dangChon ? seatRow.day + `${i + 1}` : ""}
            </div>
          ))}
        </div>
      </div>
    ));
  };
  return danhSachGhe ? (
    <div className="seats">
      <div className="seats__way">
        <span className="exit__item">
          <i class="fas fa-angle-double-right"></i>
          <i class="fas fa-door-open"></i>
        </span>
        <span className="exit__item">
          EXIT
          <i class="fas fa-door-open"></i>
        </span>
      </div>
      <div className="seats__main">{renderSeats()}</div>
      <div className="seats__note">
        <div className="seats__note__item">
          <span style={{ backgroundColor: "#3e515d" }}></span>
          <p>Ghế thường</p>
        </div>
        <div className="seats__note__item">
          <span style={{ backgroundColor: "#f7b500" }}></span>
          <p>Ghế VIP</p>
        </div>
        <div className="seats__note__item">
          <span style={{ backgroundColor: "#28a745" }}></span>
          <p>Ghế đang chọn</p>
        </div>
        <div className="seats__note__item">
          <span className="daDat" style={{ backgroundColor: "#ccc" }}></span>
          <p>Ghế đã đặt</p>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default BookingSeats;
