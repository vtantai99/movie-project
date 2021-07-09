import React from "react";
import HourHomeMobile from "../HourHomeMobile";
const TheatersMovieMobile = ({ danhSachPhim }) => {
  const filterDate = danhSachPhim.danhSachPhimTheoRap.map((item) => {
    const lichChieuTheoPhim = item.lstLichChieuTheoPhim.filter(
      (item) =>
        new Date(item.ngayChieuGioChieu).getDate() === new Date().getDate()
    );
    return {
      lichChieuTheoPhim,
      maPhim: item.maPhim,
      tenPhim: item.tenPhim,
      hinhAnh: item.hinhAnh,
    };
  });
  const newList = filterDate.filter((item) => item.lichChieuTheoPhim.length);
  const renderMoviesMobile = () => {
    if (newList.length) {
      return newList.map((item, index) => (
        <div className="movie__item" key={index}>
          <div
            className="movie__item__main"
            data-toggle="collapse"
            data-target={`#boy-${item.maPhim}`}
            role="button"
          >
            <img src={item.hinhAnh} alt={item.tenPhim} />
            <div className="movie__item__main--info">
              <span className="info__name">
                <i class="fas fa-film"></i>&nbsp;
                {item.tenPhim}
              </span>
              <span className="info__name__des">120 phút - TIX 9.0</span>
            </div>
          </div>
          <div
            className="movie__item__hour collapse row"
            id={`boy-${item.maPhim}`}
          >
            <div className="col-12">
              <p>2D Digital</p>
            </div>
            <HourHomeMobile lichChieuTheoPhim={item.lichChieuTheoPhim} />
          </div>
        </div>
      ));
    } else
      return (
        <div
          className="alert alert-danger"
          style={{ fontSize: "13px", marginBottom: 0 }}
        >
          Hôm nay không có suất chiếu, xem vào ngày khác nhé!
        </div>
      );
  };
  return (
    <div className="item__collapse collapse" id={danhSachPhim.maCumRap}>
      {renderMoviesMobile()}
    </div>
  );
};

export default TheatersMovieMobile;
