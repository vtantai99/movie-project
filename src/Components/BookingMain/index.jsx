import React from "react";
import { useSelector, useDispatch } from "react-redux";
import BookingSeat from "../BookingSeat";
import BookingCountDown from "../BookingCountDown";
import BookingSeatChoosing from "../BookingSeatChoosing";
import { rpsBooking } from "../../redux/action/bookingAction/actions";
import { Button } from "@material-ui/core";
import screen from "../../Assets/Images/screen.png";
import { renderStyleColorBooking } from "../../Helper/Function/customTheater";

const BookingMain = () => {
  const dispatch = useDispatch();

  const { isLight } = useSelector((state) => state.themeReducer);
  const { bookingList } = useSelector((state) => state.bookingReducer);

  const { thongTinPhim } = bookingList;
  const { diaChi, hinhAnh, tenRap, tenCumRap } = thongTinPhim
    ? thongTinPhim
    : "";
  const seatsChoosing = bookingList.danhSachGhe?.filter(
    (item) => item.dangChon
  );

  return bookingList.danhSachGhe ? (
    <>
      <div
        className={`${
          !isLight && "bg-gray-900 text-white"
        } bookingMain transition`}
      >
        <div className="title">
          <div className="title__address">
            <div className="title__address__img">
              <img src={hinhAnh} alt="" />
            </div>
            <div className="title__address__info">
              <span style={renderStyleColorBooking(tenCumRap)}>
                {tenCumRap}
              </span>
              <p>
                {diaChi} - {tenRap}
              </p>
            </div>
          </div>
          <div className="title__timer">
            <p>Thời gian giữ ghế</p>
            <BookingCountDown />
          </div>
        </div>
        <div className="screen__img">
          <img src={screen} alt="screen" />
        </div>
        <BookingSeat />
      </div>
      <footer className="booking__footer">
        <div className="booking__footer__content">
          <div className="footer__seat">
            {seatsChoosing?.length > 0 ? (
              <span>GHẾ&nbsp;</span>
            ) : (
              <span>VUI LÒNG CHỌN GHẾ</span>
            )}
            <BookingSeatChoosing />
          </div>
          <div className="footer__button">
            <Button
              onClick={() => dispatch(rpsBooking(true))}
              disabled={seatsChoosing?.length ? false : true}
              style={
                seatsChoosing?.length
                  ? { backgroundColor: "#28a745" }
                  : { backgroundColor: "#74e48e" }
              }
            >
              TIẾP TỤC
            </Button>
          </div>
        </div>
      </footer>
    </>
  ) : (
    ""
  );
};
export default BookingMain;
