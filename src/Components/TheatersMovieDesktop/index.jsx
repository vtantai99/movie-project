import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import HourButton from "../HourButton";
const TheatersMovieDesktop = (props) => {
  const { codeTheater } = useSelector((state) => state.heThongRapReducer);
  // console.log(props.movieDetail.danhSachPhim);
  const filterDate = props.movieDetail.danhSachPhim.map((item) => {
    const lichChieuTheoNgay = item.lstLichChieuTheoPhim.filter(
      (item) => new Date(item.ngayChieuGioChieu).getDate() === 1
    );
    return {
      lichChieuTheoNgay,
      maPhim: item.maPhim,
      tenPhim: item.tenPhim,
      hinhAnh: item.hinhAnh,
      codeTheater: codeTheater,
    };
  });
  const newList = filterDate.filter((item) => item.lichChieuTheoNgay.length);
  const renderMovieDetail = () => {
    if (newList.length) {
      return newList?.map((item, index) => (
        <div className="movie__item" key={index}>
          <div
            className="movie__item__main"
            data-toggle="collapse"
            data-target={`#boy-${item.maPhim}`}
            role="button"
          >
            <img
              className="movie__item__main--img"
              src={item.hinhAnh}
              alt={item.tenPhim}
            />
            <div className="movie__item__main--info">
              <span className="info__name">
                <i class="fas fa-film"></i>&nbsp;
                {item.tenPhim}
              </span>
              <span className="info__name__des">120 phút - TIX 9.0</span>
            </div>
          </div>
          <div
            className="movie__item__time row collapse show"
            id={`boy-${item.maPhim}`}
          >
            <p className="col-12">2D Digital</p>
            <div className="col-12">
              <HourButton lichChieuTheoNgay={item.lichChieuTheoNgay} />
            </div>
          </div>
        </div>
      ));
    } else
      return (
        <div className="movie__item__note alert alert-danger">
          Hôm nay không có suất chiếu, xem vào ngày khác nhé!
        </div>
      );
  };
  return <Fragment>{renderMovieDetail()}</Fragment>;
};

export default TheatersMovieDesktop;
