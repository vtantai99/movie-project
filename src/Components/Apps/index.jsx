import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from "react";
import mobile from "../../Assets/Images/mobile.png";
import app1 from "../../Assets/Images/app1.jpg";
import app2 from "../../Assets/Images/app2.jpg";
import app3 from "../../Assets/Images/app3.jpg";
import app4 from "../../Assets/Images/app4.jpg";
import app5 from "../../Assets/Images/app5.jpg";
import app6 from "../../Assets/Images/app6.jpg";
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
                    <img src={app1} alt="app" />
                  </div>
                  <div className="apps__mobile__carousel--item">
                    <img src={app2} alt="app" />
                  </div>
                  <div className="apps__mobile__carousel--item">
                    <img src={app3} alt="app" />
                  </div>
                  <div className="apps__mobile__carousel--item">
                    <img src={app4} alt="app" />
                  </div>
                  <div className="apps__mobile__carousel--item">
                    <img src={app5} alt="app" />
                  </div>
                  <div className="apps__mobile__carousel--item">
                    <img src={app6} alt="app" />
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
