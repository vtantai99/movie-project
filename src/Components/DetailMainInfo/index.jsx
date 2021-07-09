import React from "react";
import format from "date-format";
const MovieDetailInfo = ({ movieDetail }) => {
  return (
    <section className="main__info">
      <div className="container row">
        <div className="col-12 col-md-6 main__info__detail">
          <div className="main__info__detail__item">
            <div className="item__title">Ngày khởi chiếu</div>
            <div className="item__content">
              {format("dd/MM/yyyy", new Date(movieDetail.ngayKhoiChieu))}
            </div>
          </div>
          <div className="main__info__detail__item">
            <div className="item__title">Đạo diễn</div>
            <div className="item__content">Tan Tai</div>
          </div>
          <div className="main__info__detail__item">
            <div className="item__title">Diễn viên</div>
            <div className="item__content">Minh Duc</div>
          </div>
          <div className="main__info__detail__item">
            <div className="item__title">Thể loại</div>
            <div className="item__content">Vietsub</div>
          </div>
          <div className="main__info__detail__item">
            <div className="item__title">Định dạng</div>
            <div className="item__content">2D/Digital</div>
          </div>
          <div className="main__info__detail__item">
            <div className="item__title">Ngôn ngữ</div>
            <div className="item__content">Vietnamese</div>
          </div>
        </div>
        <div className="col-12 col-md-6 main__info__content">
          <div className="main__info__content__item">Nội dung</div>
          <div className="main__info__content__item">{movieDetail.moTa}</div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetailInfo;
