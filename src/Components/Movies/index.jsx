import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getMovieListRequest } from "../../redux/action/movieListAction/action";
const Movies = () => {
  const options = {
    responsive: {
      0: {
        items: 2,
      },

      600: {
        items: 2,
      },

      1000: {
        items: 4,
      },
    },
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieListRequest());
  }, []);
  const movieList = useSelector((state) => state.movieListReducer.movieList);
  //   console.log(movieList);
  const renderMovieList = () => {
    console.log(movieList);
    return movieList.map((movie, index) => (
      <div className="showing__item" key={index}>
        <div className="item__film">
          <div
            className="item__film__img"
            style={{
              background: `url(${movie.hinhAnh}) center center / cover no-repeat`,
              width: "100%",
              height: "300px",
              borderRadius: "5px",
            }}
          >
            <span className="item__film__img--vote">
              <p className="vote--number">{movie.danhGia}</p>
              <p className="vote--star">
                <img src="https://tix.vn/app/assets/img/icons/star1.png" />
                <img src="https://tix.vn/app/assets/img/icons/star1.png" />
                <img src="https://tix.vn/app/assets/img/icons/star1.png" />
                <img src="https://tix.vn/app/assets/img/icons/star1.2.png" />
              </p>
            </span>
            <div className="item__film__img--play">
              <a href="#">
                <img src="https://tix.vn/app/assets/img/icons/play-video.png" />
              </a>
            </div>
            <div className="item__film__img--overlay"></div>
          </div>
          <div className="item__film__info">
            <span className="item__film__info--icon">C18</span>
            <span className="item__film__info--name">{movie.tenPhim}</span>
            <Button className="item__film__info--btn">MUA VÉ</Button>
          </div>
        </div>
      </div>
    ));
  };
  return (
    <section className="showTime" id="showTimes">
      <ul className="nav nav-tabs navCenter">
        <li className="nav-item">
          <a
            className="nav-link showing active"
            data-toggle="tab"
            href="#showing"
          >
            Đang Chiếu
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link comingSoon"
            data-toggle="tab"
            href="#comingSoon"
          >
            Sắp Chiếu
          </a>
        </li>
      </ul>
      {/* <!-- Tab panes --> */}
      <div className="tab-content">
        <div className="tab-pane active showing" id="showing">
          <OwlCarousel
            items={4}
            autoplay
            loop
            className="owl-theme"
            nav
            dots={false}
            smartSpeed={600}
            autoplayHoverPause
            {...options}
          >
            {renderMovieList()}
          </OwlCarousel>
          {/* {renderMovieList()} */}
        </div>
        <div className="tab-pane fade comingSoon" id="comingSoon">
          <OwlCarousel
            items={1}
            // autoplay
            loop
            className="owl-theme"
            nav
            dots={false}
            smartSpeed={800}
            autoplayHoverPause
          >
            <div className="showing__item">
              <div className="row">
                <div className="col-md-3 col-6">
                  <div className="item__film">
                    <img
                      className="item__film__img"
                      src="https://s3img.vcdn.vn/mobile/123phim/2020/10/ky-nghi-nho-doi-golden-holiday-c16-16028181456988_215x318.png"
                    />
                    <div className="item__film__info">
                      <span className="item__film__info--icon">C18</span>
                      <span className="item__film__info--name">
                        Deliver Us From Evil
                      </span>
                      <p className="item__film__info--time">100 phút</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="item__film">
                    <img
                      className="item__film__img"
                      src="https://s3img.vcdn.vn/mobile/123phim/2020/10/ky-nghi-nho-doi-golden-holiday-c16-16028181456988_215x318.png"
                    />
                    <div className="item__film__info">
                      <span className="item__film__info--icon">C18</span>
                      <span className="item__film__info--name">
                        Deliver Us From Evil
                      </span>
                      <p className="item__film__info--time">100 phút</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="item__film">
                    <img
                      className="item__film__img"
                      src="https://s3img.vcdn.vn/mobile/123phim/2020/10/ky-nghi-nho-doi-golden-holiday-c16-16028181456988_215x318.png"
                    />
                    <div className="item__film__info">
                      <span className="item__film__info--icon">C18</span>
                      <span className="item__film__info--name">
                        Deliver Us From Evil
                      </span>
                      <p className="item__film__info--time">100 phút</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="item__film">
                    <img
                      className="item__film__img"
                      src="https://s3img.vcdn.vn/mobile/123phim/2020/10/ky-nghi-nho-doi-golden-holiday-c16-16028181456988_215x318.png"
                    />
                    <div className="item__film__info">
                      <span className="item__film__info--icon">C18</span>
                      <span className="item__film__info--name">
                        Deliver Us From Evil
                      </span>
                      <p className="item__film__info--time">100 phút</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="item__film">
                    <img
                      className="item__film__img"
                      src="https://s3img.vcdn.vn/mobile/123phim/2020/10/ky-nghi-nho-doi-golden-holiday-c16-16028181456988_215x318.png"
                    />
                    <div className="item__film__info">
                      <span className="item__film__info--icon">C18</span>
                      <span className="item__film__info--name">
                        Deliver Us From Evil
                      </span>
                      <p className="item__film__info--time">100 phút</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="item__film">
                    <img
                      className="item__film__img"
                      src="https://s3img.vcdn.vn/mobile/123phim/2020/10/ky-nghi-nho-doi-golden-holiday-c16-16028181456988_215x318.png"
                    />
                    <div className="item__film__info">
                      <span className="item__film__info--icon">C18</span>
                      <span className="item__film__info--name">
                        Deliver Us From Evil
                      </span>
                      <p className="item__film__info--time">100 phút</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="item__film">
                    <img
                      className="item__film__img"
                      src="https://s3img.vcdn.vn/mobile/123phim/2020/10/ky-nghi-nho-doi-golden-holiday-c16-16028181456988_215x318.png"
                    />
                    <div className="item__film__info">
                      <span className="item__film__info--icon">C18</span>
                      <span className="item__film__info--name">
                        Deliver Us From Evil
                      </span>
                      <p className="item__film__info--time">100 phút</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="item__film">
                    <img
                      className="item__film__img"
                      src="https://s3img.vcdn.vn/mobile/123phim/2020/10/ky-nghi-nho-doi-golden-holiday-c16-16028181456988_215x318.png"
                    />
                    <div className="item__film__info">
                      <span className="item__film__info--icon">C18</span>
                      <span className="item__film__info--name">
                        Deliver Us From Evil
                      </span>
                      <p className="item__film__info--time">100 phút</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="showing__item">
              <div className="row">
                <div className="col-md-3 col-6">Movie</div>
                <div className="col-md-3 col-6">Movie</div>
                <div className="col-md-3 col-6">Movie</div>
                <div className="col-md-3 col-6">Movie</div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default Movies;
