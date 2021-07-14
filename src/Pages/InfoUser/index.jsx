import React from "react";
import "../../Assets/Styles/SCSS/Pages/infoUser.scss";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../Components/Header";
import { useEffect } from "react";
import { getInfoUser } from "../../redux/action/userAction/actions";
import { Row, Col } from "react-bootstrap";
import format from "date-format";
import CountUp from "react-countup";
const InfoUser = () => {
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.userReducer);

  const totalPrice = info.thongTinDatVe?.reduce(
    (sum, item) => (sum += item.giaVe * item.danhSachGhe.length),
    0
  );

  const totalFilm = [
    ...new Set(info.thongTinDatVe?.map((item) => item.tenPhim)),
  ].length;

  const totalSeat = info.thongTinDatVe?.reduce(
    (sum, item) => (sum += item.danhSachGhe.length),
    0
  );
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    dispatch(getInfoUser({ taiKhoan: user.taiKhoan }));
  }, []);

  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const convertToPassWord = (string) => {
    let pass = "";
    for (let item of string) {
      pass += "*";
    }
    return pass;
  };
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
  const renderListTicket = () => {
    return info?.thongTinDatVe.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.tenPhim}</td>
          <td>{format("hh:mm:ss-dd/MM/yyyy", new Date(item.ngayDat))}</td>
          <td>{item.maVe}</td>
          <td>
            {item.danhSachGhe.map((item, index) =>
              index === 0
                ? getTenDay(item.tenGhe)
                : `,${getTenDay(item.tenGhe)}`
            )}
          </td>
          <td>{formatNumber(item.giaVe * item.danhSachGhe.length)}</td>
        </tr>
      );
    });
  };
  return (
    info && (
      <section className="info">
        <Header />
        <Row className="m-0" style={{ padding: "20px" }}>
          <Col sm={12} md={3}>
            <div className="card">
              <p>Thông tin cá nhân</p>
              <div className="info__item">
                <p>Họ tên</p>
                <span>{info.hoTen}</span>
              </div>
              <div className="info__item">
                <p>Email</p>
                <span>{info.email}</span>
              </div>
              <div className="info__item">
                <p>Số điện thoại</p>
                <span>{info.soDT}</span>
              </div>
              <div className="info__item passWord">
                <p>Mật khẩu</p>
                <span>{convertToPassWord(info.matKhau)}</span>
              </div>
            </div>
          </Col>
          <Col sm={12} md={9}>
            <div className="card">
              <p>Lịch sử đặt vé</p>
              <table>
                <thead>
                  <tr>
                    <th>Tên phim</th>
                    <th>Ngày đặt vé</th>
                    <th>Mã vé</th>
                    <th>Ghế</th>
                    <th>Giá</th>
                  </tr>
                </thead>
                <tbody>{renderListTicket()}</tbody>
              </table>
            </div>
            <Row style={{ marginTop: "30px" }}>
              <Col xs={12} md={4}>
                <div className="card">
                  <div className="total__item">
                    <div>
                      <p>Tổng tiền đã chi</p>
                      <span>
                        <CountUp end={totalPrice} duration={2} separator="." />
                        &nbsp;VND
                      </span>
                    </div>
                    <i className="fas fa-dollar-sign"></i>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="card">
                  <div className="total__item">
                    <div>
                      <p>Tổng số lượng phim</p>
                      <span>
                        <CountUp end={totalFilm} duration={2} />
                        &nbsp;
                      </span>
                    </div>
                    <i className="fas fa-video"></i>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="card">
                  <div className="total__item">
                    <div>
                      <p>Tổng ghế đã đặt</p>
                      <span>
                        <CountUp end={totalSeat} duration={2} separator="." />
                        &nbsp;ghế
                      </span>
                    </div>
                    <i className="fas fa-chair"></i>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    )
  );
};

export default InfoUser;
