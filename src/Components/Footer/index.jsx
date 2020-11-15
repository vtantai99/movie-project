import React from "react";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-1">
            <div className="footer__logo">
              <img
                src="https://tix.vn/app/assets/img/icons/web-logo.png"
                alt="logo"
              />
            </div>
          </div>
          <div className="col-xs-12 col-md-7">
            <div className="footer__des">
              <p className="footer__des--title">
                MOVIE BOOKING – Sản phẩm của Võ Tấn Tài &amp; Lưu Minh Đức
              </p>
              <span>Position: Front-end developer</span>
              <span>
                Địa chỉ: 183 Nam Hòa, quận 9, phường Tăng Nhơn Phú A, quận 9,
                TPHCM
              </span>
              <span>
                Số điện thoại: 0854855669
                <br />
                Email:
                <a
                  href="mailto:tantaivo74@gmail.com"
                  style={{ color: "#FB4226" }}
                >
                  tantaivo74@gmail.com
                </a>
              </span>
            </div>
          </div>
          <div className="col-xs-12 col-md-4">
            <p className="footer__contact__title">CONTACT</p>
            <div className="footer__contact__icon">
              <a
                target="_blank"
                href="https://www.facebook.com/tix.vn/"
                className="footer__contact__icon--fb"
                style={{
                  color: "#34495e",
                }}
              >
                <i class="fab fa-facebook-square"></i>
              </a>
              <a
                target="_blank"
                href="https://zalo.me/tixdatve"
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
