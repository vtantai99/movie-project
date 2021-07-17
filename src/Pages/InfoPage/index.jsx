import React from "react";
import "../../Assets/Styles/SCSS/Pages/infoUser.scss";
import Header from "../../Components/Header";
import { useEffect } from "react";
import {
  getInfoUserRequest,
  updateUserRequest,
} from "../../redux/action/userAction/actions";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import InfoTotal from "../../Components/InfoTotal";
import InfoUser from "../../Components/InfoUser";
import InfoTable from "../../Components/InfoTable";

const InfoPage = () => {
  const dispatch = useDispatch();

  const { info } = useSelector((state) => state.userReducer);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    dispatch(getInfoUserRequest({ taiKhoan: user.taiKhoan }));
  }, [dispatch]);

  return (
    info && (
      <section className="info">
        <Header />
        <Row className="m-0" style={{ padding: "20px" }}>
          <Col sm={12} md={3}>
            <InfoUser />
          </Col>
          <Col sm={12} md={9}>
            <InfoTable />
            <Row style={{ marginTop: "30px" }}>
              <InfoTotal />
            </Row>
          </Col>
        </Row>
      </section>
    )
  );
};

export default InfoPage;
