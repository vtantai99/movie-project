import React from "react";
import "../../Assets/Styles/SCSS/Pages/infoUser.scss";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../Components/Header";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getInfoUser } from "../../redux/action/userAction/actions";
import { Container, Row, Col, Nav, Tab, Table } from "react-bootstrap";
import format from "date-format";
const InfoUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.userReducer);
  console.log(params.account);
  useEffect(() => {
    dispatch(getInfoUser({ taiKhoan: params.account }));
  }, []);
  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  const renderListTicket = () => {
    return info?.thongTinDatVe.map((item, index) => {
      let listSeat = item.danhSachGhe;
      return (
        <tr style={{ fontStyle: "italic" }}>
          <td>{index + 1}</td>
          <td>{format("hh:mm:ss(dd/MM/yyyy)", new Date(item.ngayDat))}</td>
          <td>{item.tenPhim}</td>
          <td>{formatNumber(item.giaVe)}</td>
          <td>{item.danhSachGhe.map((item) => item.tenHeThongRap)}</td>
          <td>
            {item.danhSachGhe.map((item, index) =>
              index === 0 ? item.tenGhe : `,${item.tenGhe}`
            )}
          </td>
        </tr>
      );
    });
  };
  return (
    info && (
      <section className="info">
        <Header />
        <Container style={{ marginTop: "70px" }}>
          <Tab.Container defaultActiveKey="first">
            <Row>
              <Col sm={12} md={4}>
                <div className="info__sideBar">
                  <div className="info__sideBar__img">
                    <img
                      alt="Avatar"
                      src="https://cyberlearn-21.web.app/img/avatar.png"
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%,-50%)",
                        width: "80px",
                        height: "80px",
                      }}
                    />
                  </div>
                  <span>{info.hoTen}</span>
                </div>
                <Nav className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tài khoản</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Lịch sử đặt vé</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={12} md={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="info__content">
                      <div className="info__content__header">
                        <i class="fas fa-file-invoice"></i>
                        Tài khoản
                      </div>
                      <div className="info__content__item account">
                        <p>Tên đăng nhập</p>
                        <span>{info.taiKhoan}</span>
                      </div>
                      <div className="info__content__item">
                        <p type="password">Mật khẩu</p>
                        <span>{info.matKhau}</span>
                      </div>
                      <div className="info__content__item">
                        <p>Số điện thoại</p>
                        <span>{info.soDT}</span>
                      </div>
                      <div className="info__content__item">
                        <p>Email</p>
                        <span>{info.email}</span>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className="info__content">
                      <div className="info__content__header">
                        <i class="fas fa-history"></i>
                        Lịch sử đặt vé
                      </div>
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>STT</th>
                            <th>Thời gian đặt vé</th>
                            <th>Tên phim</th>
                            <th>Giá vé</th>
                            <th>Rạp</th>
                            <th>Ghế</th>
                          </tr>
                        </thead>
                        <tbody>{renderListTicket()}</tbody>
                      </Table>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </section>
    )
  );
};

export default InfoUser;
