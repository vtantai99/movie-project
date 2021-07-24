import React from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDateCurrent } from "../../redux/action/movieDetailAction/actions";
import { formatWeekDate } from "../../Helper/Function/formatWeekDate";
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

  const setNewLisTime = [...new Set(newListTime.map((item) => item))];

  const checkDate = (date) => {
    const index = setNewLisTime.indexOf(date);
    if (index !== -1) {
      return true;
    } else {
      return false;
    }
  };

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
