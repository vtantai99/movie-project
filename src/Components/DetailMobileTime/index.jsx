import React from "react";
import { useSelector } from "react-redux";
import format from "date-format";
import DetailTimeItem from "../DetailTimeItem";
import {
  renderStyleColor,
  renderImage,
} from "../../Helper/Function/customTheater";
const DetailTimeMobile = ({ maHeThongRap, tenHeThongRap }) => {
  const { dateShow } = useSelector((state) => state.movieDetailReducer);
  const { lichChieu } = useSelector(
    (state) => state.movieDetailReducer.movieDetail
  );
  // làm gọn tên cụm rạp
  const cutStr = (string) => {
    return string.substring(string.indexOf("-"));
  };
  // Lọc giờ chiếu  với ngày hiện tại
  const filterTheater = lichChieu.filter(
    (item) => item.thongTinRap.tenHeThongRap === tenHeThongRap
  );
  // Lọc giờ chiếu  với ngày hiện tại
  const filterDates = filterTheater.filter(
    (item) => new Date(item.ngayChieuGioChieu).getDate() === dateShow // Nếu giống ngày thì giữ lại, khác thì delete
  );
  const nameTheater = filterDates.map((item) => item.thongTinRap.tenCumRap); // in ra tất cả tên cụm rạp

  const filterNameTheater = nameTheater.filter(
    (item, index) => nameTheater.indexOf(item) === index // Những cụm rạp nào trùng nhau thì xoá
  );
  const lastList = filterNameTheater.map((item, index) => {
    // check cụm rạp sau khi filter với list filterDates ban dau, giong ten cum rap thi add time
    const showTime = [];
    for (let i = 0; i < filterDates.length; i++) {
      if (item === filterDates[i].thongTinRap.tenCumRap) {
        showTime.push({
          gioChieu: format("hh:mm", new Date(filterDates[i].ngayChieuGioChieu)),
          maLichChieu: filterDates[i].maLichChieu,
        });
      }
    }
    return { tenCumRap: item, showTime, id: index + 1 };
  });
  const listTimeMobile = (listTime) => {
    return listTime.map((item, index) => (
      <DetailTimeItem key={index} timeItem={item} />
    ));
  };
  // Hàm hiển thị giờ chiếu và cụm rạp
  const renderTest = () => {
    if (filterTheater.length) {
      if (lastList.length) {
        return lastList.map((item, index) => (
          <div key={index} className="time__mobile__item">
            <div
              className="item__theater"
              data-toggle="collapse"
              data-target={`#boy-${index}`}
              aria-expanded="false"
              role="button"
            >
              <img src={renderImage(maHeThongRap)} alt="rap" />
              <div className="item__theater__info">
                <span style={renderStyleColor(maHeThongRap)}>
                  {maHeThongRap}&nbsp;
                </span>
                <span>{cutStr(item.tenCumRap)}</span>
              </div>
            </div>
            <div className="item__hour collapse show" id={`boy-${index}`}>
              <p>2D Digital</p>
              <div className="item__hour__time">
                {listTimeMobile(item.showTime)}
              </div>
            </div>
          </div>
        ));
      } else {
        return (
          <div className="time__mobile__item">
            <div className="alert alert-danger" style={{ fontSize: "14px" }}>
              Hôm nay không có suất chiếu!
            </div>
          </div>
        );
      }
    } else {
      return (
        <div className="time__mobile__item">
          <div className="alert alert-info">
            Hiện không có lịch chiếu phim này trên hệ thống rạp {tenHeThongRap}
          </div>
        </div>
      );
    }
  };
  return (
    <div className="time__mobile collapse" id={maHeThongRap}>
      {renderTest()}
    </div>
  );
};
export default DetailTimeMobile;
