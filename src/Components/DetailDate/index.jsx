import React from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDateCurrent } from "../../redux/action/movieDetailAction/actions";
const DetailDate = () => {
  const dispatch = useDispatch();
  const { dateShow, codeTheater } = useSelector(
    (state) => state.movieDetailReducer
  );
  const { lichChieu } = useSelector(
    (state) => state.movieDetailReducer.movieDetail
  );
  const newListTime = lichChieu
    ?.filter(
      (item) => item.thongTinRap.maHeThongRap === codeTheater // Nếu giống mã rạp thì giữ lại, khác thì delete
    )
    .map((item) => new Date(item.ngayChieuGioChieu).getDate()); // Lay ngay (number)
  const currentDate = new Date();
  const dates = [currentDate];
  // in ra 10 ngày kể từ ngày hiện tại
  for (let i = 0; i < 10; i++) {
    const newDate = new Date();
    newDate.setDate(currentDate.getDate() + i + 1);
    dates.push(newDate);
  }
  // Xoa nhung gio chieu trung nhau
  const removeDuplicateDate = newListTime.filter(
    (item, index) => newListTime.indexOf(item) === index
  );
  const checkDate = (date) => {
    const index = removeDuplicateDate.indexOf(date);
    if (index !== -1) {
      return true;
    } else {
      return false;
    }
  };
  const formatWeekDate = (weekDate) => {
    if (window.innerWidth >= 768) {
      switch (weekDate) {
        case 0:
          return "Chủ Nhật";
        case 1:
          return "Thứ 2";
        case 2:
          return "Thứ 3";
        case 3:
          return "Thứ 4";
        case 4:
          return "Thứ 5";
        case 5:
          return "Thứ 6";
        case 6:
          return "Thứ 7";
        default:
          return null;
      }
    } else {
      switch (weekDate) {
        case 0:
          return "CN";
        case 1:
          return "T2";
        case 2:
          return "T3";
        case 3:
          return "T4";
        case 4:
          return "T5";
        case 5:
          return "T6";
        case 6:
          return "T7";
        default:
          return null;
      }
    }
  };
  // console.log(dates.getDate());
  const renderDates = () => {
    // Hàm này render ra thứ của ngày
    return dates.map((item, index) => (
      <div
        key={index}
        className={`list__dates__item ${
          item.getDate() === dateShow ? "active" : null
        } ${checkDate(item.getDate()) ? "run__animation" : ""}`}
        data-toggle="tab"
        role="tab"
        aria-selected="true"
        onClick={() => dispatch(getDateCurrent(item.getDate()))}
      >
        <p className="weekDay">{formatWeekDate(item.getDay())}</p>
        <p className="date">{item.getDate()}</p>
      </div>
    ));
  };
  return (
    <Fragment>
      <div className="list__dates">{renderDates()}</div>
    </Fragment>
  );
};

export default DetailDate;
