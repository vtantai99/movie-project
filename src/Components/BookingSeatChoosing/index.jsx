import React from "react";
import { useSelector } from "react-redux";
import { nameSeat } from "../../Helper/Function/nameSeat";
const DangChonSeats = () => {
  const { danhSachGhe } = useSelector(
    (state) => state.bookingReducer.bookingList
  );

  const renderDangChonSeat = () => {
    const seatsChoosing = danhSachGhe?.filter((ghe) => ghe.dangChon);

    return seatsChoosing && seatsChoosing.length
      ? seatsChoosing.map((item, index) =>
          index === seatsChoosing.length - 1 ? (
            <span key={index} className="text-red-500">
              {nameSeat(+item.stt)}
            </span>
          ) : (
            <span key={index} className="text-red-500">
              {nameSeat(+item.stt)},&nbsp;
            </span>
          )
        )
      : null;
  };

  return renderDangChonSeat();
};
export default DangChonSeats;
