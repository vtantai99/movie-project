import React from "react";
import { useSelector } from "react-redux";
import logo from "../../Assets/Images/logo.png";
const Footer = () => {
  const { darkMode } = useSelector((state) => state.commonReducer);
  return (
    <footer className={darkMode ? "footer Dark" : "footer"}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-2">
            <div className="footer__logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="footer__des">
              <p className="footer__des--title">
                TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
              </p>
              <span>
                Giấy chứng nhận đăng ký kinh doanh số: 0101659783, đăng ký thay
                đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu
                tư Thành phố Hồ Chí Minh cấp.
              </span>
              <span>Số Điện Thoại (Hotline): 1900 545 436</span>
              <span>
                * Đây là trang web đc clone bởi Võ Tấn Tài & Lưu Minh Đức với
                mục đích học tập.
              </span>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <p className="footer__contact__title">CONTACT</p>
            <div className="footer__contact__icon">
              <a
                target="_blank"
                // href="https://www.facebook.com/tix.vn/"
                className="footer__contact__icon--fb"
                style={{
                  color: "#34495e",
                }}
              >
                <i class="fab fa-facebook-square"></i>
              </a>
              <a
                target="_blank"
                // href="https://zalo.me/tixdatve"
                className="footer__contact__icon--git"
                style={{
                  color: "#d35400",
                }}
              >
                <i class="fab fa-gitlab"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
