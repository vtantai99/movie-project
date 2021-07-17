import React from "react";
import { useSelector } from "react-redux";
const DangChonSeats = () => {
  const { danhSachGhe } = useSelector(
    (state) => state.bookingReducer.bookingList
  );
  const getTenDay = (stt) => {
    if (stt >= 145) {
      return `J${stt - 16 * 9}`;
    } else if (stt >= 129) {
      return `I${stt - 16 * 8}`;
    } else if (stt >= 113) {
      return `H${stt - 16 * 7}`;
    } else if (stt >= 97) {
      return `G${stt - 16 * 6}`;
    } else if (stt >= 81) {
      return `F${stt - 16 * 5}`;
    } else if (stt >= 65) {
      return `E${stt - 16 * 4}`;
    } else if (stt >= 49) {
      return `D${stt - 16 * 3}`;
    } else if (stt >= 33) {
      return `C${stt - 16 * 2}`;
    } else if (stt >= 17) {
      return `B${stt - 16}`;
    } else {
      return `A${stt}`;
    }
  };

  const renderDangChonSeat = () => {
    const seatsChoosing = danhSachGhe?.filter((ghe) => ghe.dangChon);
    return seatsChoosing && seatsChoosing.length
      ? seatsChoosing.map((item, index) =>
          index === seatsChoosing.length - 1 ? (
            <span key={index}>{getTenDay(+item.stt)}</span>
          ) : (
            <span key={index}>{getTenDay(+item.stt)},&nbsp;</span>
          )
        )
      : null;
  };

  return renderDangChonSeat();
};
export default DangChonSeats;
