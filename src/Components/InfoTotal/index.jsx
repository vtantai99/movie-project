import React from "react";
import CountUp from "react-countup";
import { useSelector } from "react-redux";
import { Col } from "react-bootstrap";

const InfoTotal = () => {
  const { info } = useSelector((state) => state.userReducer);

  const totalPrice = info.thongTinDatVe?.reduce(
    (sum, item) => (sum += item.giaVe * item.danhSachGhe.length),
    0
  );

  const totalFilm = [
    ...new Set(info.thongTinDatVe?.map((item) => item.tenPhim)), // new Set(xoa phan tu trung nhau trong mang)
  ].length;

  const totalSeat = info.thongTinDatVe?.reduce(
    (sum, item) => (sum += item.danhSachGhe.length),
    0
  );

  const listTotal = [
    {
      title: "TỔNG TIỀN ĐÃ CHI",
      icon: "fas fa-dollar-sign",
      quantity: totalPrice,
      name: "",
    },
    {
      title: "TỔNG PHIM ĐÃ ĐẶT",
      icon: "fas fa-film",
      quantity: totalFilm,
      name: "Phim",
    },
    {
      title: "TỔNG GHẾ ĐÃ ĐẶT",
      icon: "fas fa-chair",
      quantity: totalSeat,
      name: "Ghế",
    },
  ];

  const renderListTotal = () => {
    return listTotal.map((item, index) => (
      <Col xs={12} md={4} key={index}>
        <div className="card info__total">
          <div className="info__total__item">
            <i className={item.icon}></i>
            <div className="info__total__item--content">
              <p>{item.title}</p>
              <span>
                <CountUp end={item.quantity} duration={2} separator="." />
                &nbsp;{item.name}
              </span>
            </div>
          </div>
        </div>
      </Col>
    ));
  };
  return <>{renderListTotal()}</>;
};

export default InfoTotal;
