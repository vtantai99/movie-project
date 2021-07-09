import React from "react";
import { useSelector } from "react-redux";
import DetailTimeItem from "../DetailTimeItem";
import theaterBhd from "../../Assets/Images/theaterBhd.jpg";
import theaterCgv from "../../Assets/Images/theaterCgv.jpg";
import theaterCineStar from "../../Assets/Images/theaterCineStar.jpg";
import theaterGalaxy from "../../Assets/Images/theaterGalaxy.png";
import theaterLotte from "../../Assets/Images/theaterLotte.jpg";
import theaterMega from "../../Assets/Images/theaterMega.jpeg";
import format from "date-format";
const DetailTime = () => {
  const { dateShow, codeTheater } = useSelector(
    (state) => state.movieDetailReducer
  );
  const { lichChieu } = useSelector(
    (state) => state.movieDetailReducer.movieDetail
  );
  // Thay đổi hình theo cụm rạm
  const renderImage = (nameTheater) => {
    switch (nameTheater) {
      case "BHDStar": {
        return theaterBhd;
      }
      case "CGV": {
        return theaterCgv;
      }
      case "CineStar": {
        return theaterCineStar;
      }
      case "Galaxy": {
        return theaterGalaxy;
      }
      case "LotteCinima": {
        return theaterLotte;
      }
      case "MegaGS": {
        return theaterMega;
      }
      default:
        return null;
    }
  };
  // Thay đổi màu theo cụm rạm
  const renderStyleColor = (nameTheater) => {
    switch (nameTheater) {
      case "BHDStar": {
        return { color: "#8bc541" };
      }
      case "CGV": {
        return { color: "#e71a0f" };
      }
      case "CineStar": {
        return { color: "#df0d7a" };
      }
      case "Galaxy": {
        return { color: "#f60" };
      }
      case "LotteCinima": {
        return { color: "#ca4137" };
      }
      case "MegaGS": {
        return { color: "#e5a813" };
      }
      default:
        return null;
    }
  };
  // làm gọn tên cụm rạp
  const cutStr = (string) => {
    return string.substring(string.indexOf("-"));
  };
  // Lọc cụm rạp theo mã rạp
  const filterTheater = lichChieu?.filter(
    (item) => item.thongTinRap.maHeThongRap === codeTheater // Nếu giống mã rạp thì giữ lại, khác thì delete
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
    return { showTime, tenCumRap: item, id: index + 1 };
  });
  console.log(lastList.showTime);
  const reSize = () => {
    if (window.innerWidth >= 768) return true;
    else return false;
  };
  const listTimeDetail = (listTime) => {
    return listTime.map((item, index) => (
      <DetailTimeItem key={index} timeItem={item} />
    ));
  };
  // Hàm hiển thị giờ chiếu và cụm rạp
  const renderShowTime = () => {
    if (filterTheater.length) {
      if (lastList.length)
        return lastList.map((item, index) => (
          <div key={index} className="list__time__item">
            <div
              className="item__theater"
              data-toggle="collapse"
              data-target={`#boy-${item.id}`}
              aria-expanded="false"
              role="button"
            >
              <img src={renderImage(codeTheater)} alt="rap" />
              <div className="item__theater__info">
                <span style={renderStyleColor(codeTheater)}>
                  <i class="fas fa-video"></i>&nbsp;
                  {codeTheater}&nbsp;
                </span>
                {cutStr(item.tenCumRap)}
              </div>
            </div>
            <div className="item__main collapse show" id={`boy-${item.id}`}>
              <p className="item__main__digital">2D Digital</p>
              <div className="item__main__time">
                {listTimeDetail(item.showTime)}
              </div>
            </div>
          </div>
        ));
      else
        return (
          <div className="tab-pane fade show active" role="tabpanel">
            <div className="alert alert-danger">
              Hôm nay không có suất chiếu, xem vào ngày khác nhé!
            </div>
          </div>
        );
    } else
      return (
        <div className="tab-pane fade show active" role="tabpanel">
          <div className="alert alert-info">
            Hiện không có lịch chiếu phim này trên hệ thống rạp {codeTheater}
          </div>
        </div>
      );
  };
  return (
    <div
      className={`list__time ${reSize() ? "" : "collapse"}`}
      id={codeTheater}
    >
      {renderShowTime()}
    </div>
  );
};

export default DetailTime;
