import React from "react";
import "../../Assets/Styles/SCSS/Pages/infoPage.scss";
import Header from "../../Components/Header";
import { useEffect } from "react";
import { getInfoUserRequest } from "../../redux/action/userAction/actions";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import InfoTotal from "../../Components/InfoTotal";
import InfoUser from "../../Components/InfoUser";
import InfoTable from "../../Components/InfoTable";

const InfoPage = () => {
  const dispatch = useDispatch();

  const { info } = useSelector((state) => state.userReducer);
  const { isLight } = useSelector((state) => state.themeReducer);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    dispatch(getInfoUserRequest({ taiKhoan: user.taiKhoan }));
  }, [dispatch]);

  return (
    info && (
      <section
        className={`${!isLight && "bg-gray-900 text-white"} info transition`}
      >
        <Header />
        <Row className="m-0" style={{ padding: "20px" }}>
          <Col xs={12} lg={3} className="mb-4">
            <InfoUser />
          </Col>
          <Col xs={12} lg={9} className="mb-4">
            <InfoTable />
            <Row className="mt-4">
              <InfoTotal />
            </Row>
          </Col>
        </Row>
      </section>
    )
  );
};

export default InfoPage;
