import { Button } from "@material-ui/core";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from "react";
import mobile from "./Images/mobile.png";
import "./apps.scss";

import images1 from "./Images/1.jpg";
import images2 from "./Images/2.jpg";
import images3 from "./Images/3.jpg";
import images4 from "./Images/4.jpg";
import images5 from "./Images/5.jpg";
import images6 from "./Images/6.jpg";
const Apps = () => {
  return (
    <section className="apps" id="apps">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 text-center text-lg-left ">
            <div className="apps__info">
              <p className="apps__info--title">Ứng dụng tiện lợi dành cho</p>
              <p className="apps__info--title">người yêu điện ảnh</p>
              <br />
              <p className="apps__info--subtitle">
                Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                và đổi quà hấp dẫn.
              </p>
              <br />
              <button className="apps__info--download">
                App miễn phí - Tải về ngay!
              </button>
              <p className="apps__info--textDown">
                TIX có hai phiên bản <a href="#!">iOS</a> &amp;
                <a href="#!"> Android</a>
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="apps__mobile">
              <img src={mobile} alt="" className="apps__mobile__img" />
              <div className="apps__mobile__carousel">
                <OwlCarousel
                  items={1}
                  autoplay
                  loop
                  dots={false}
                  className="owl-theme"
                  smartSpeed={600}
                  autoplayHoverPause
                >
                  <div className="apps__mobile__carousel--item">
                    <img src={images1} alt="" />
                  </div>
                  <div className="apps__mobile__carousel--item">
                    <img src={images2} alt="" />
                  </div>
                  <div className="apps__mobile__carousel--item">
                    <img src={images3} alt="" />
                  </div>
                  <div className="apps__mobile__carousel--item">
                    <img src={images4} alt="" />
                  </div>
                  <div className="apps__mobile__carousel--item">
                    <img src={images5} alt="" />
                  </div>
                  <div className="apps__mobile__carousel--item">
                    <img src={images6} alt="" />
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apps;
