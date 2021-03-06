import React, { Fragment, useState } from "react";
import { Button } from "@material-ui/core";
import image1 from "./Images/1.png";
import image2 from "./Images/2.jpg";
import image3 from "./Images/3.png";
import image4 from "./Images/4.png";
import image5 from "./Images/5.png";
import image6 from "./Images/6.png";
import image7 from "./Images/7.png";
import image8 from "./Images/8.png";
import image9 from "./Images/9.png";
import image10 from "./Images/10.png";
import image11 from "./Images/11.png";
import image12 from "./Images/12.jpg";
import image13 from "./Images/13.png";
import image14 from "./Images/14.png";
import image15 from "./Images/15.png";
import image16 from "./Images/16.png";

import review1 from "./Images/2-1.png";
import review2 from "./Images/2-2.png";
import review3 from "./Images/2-3.png";
import review4 from "./Images/2-4.png";
import review5 from "./Images/2-5.png";
import review6 from "./Images/2-6.jpg";
import review7 from "./Images/2-7.jpg";
import review8 from "./Images/2-8.jpg";
import review9 from "./Images/2-9.jpg";
import review10 from "./Images/2-10.jpg";
import review11 from "./Images/2-11.jpg";
import review12 from "./Images/2-12.jpg";
import review13 from "./Images/2-13.jpg";
import review14 from "./Images/2-14.jpg";
import review15 from "./Images/2-15.jpg";
import review16 from "./Images/2-16.jpg";

import pro1 from "./Images/pro1.jpg";
import pro2 from "./Images/pro2.jpg";
import pro3 from "./Images/pro3.png";
import pro4 from "./Images/pro4.jpg";
import pro5 from "./Images/pro5.png";
import pro6 from "./Images/pro6.jpg";
import pro7 from "./Images/pro7.jpg";
import pro8 from "./Images/pro8.jpg";
import pro9 from "./Images/pro9.jpg";
import pro10 from "./Images/pro10.jpg";
import pro11 from "./Images/pro11.jpg";
import pro12 from "./Images/pro12.jpg";
import pro13 from "./Images/pro13.jpg";
import pro14 from "./Images/pro14.jpg";
import pro15 from "./Images/pro15.jpg";
import pro16 from "./Images/pro16.jpg";

import { useSelector } from "react-redux";

const News = () => {
  const [active, setActive] = useState(false);
  const { darkMode } = useSelector((state) => state.commonReducer);
  const handleChangeActive = () => {
    setActive(!active);
  };

  return (
    <section className={darkMode ? "news Dark" : "news"} id="news">
      <ul className="nav nav-tabs navCenter">
        <li className="nav-item">
          <a className="nav-link active" data-toggle="tab" href="#dienAnh">
            ??i???n ???nh 24h
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link review" data-toggle="tab" href="#review">
            Review
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link promotion" data-toggle="tab" href="#promotion">
            Khuy???n m??i
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane active" id="dienAnh">
          <div className="news__item">
            <div className="news__item__img">
              <a
                href="https://tix.vn/goc-dien-anh/7957-tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={image1} alt="tin tuc" />
              </a>
            </div>
            <div className="news__item__info">
              <h3 className="news__item__info--title">
                <a
                  href="https://tix.vn/goc-dien-anh/7957-tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ti???c Tr??ng M??u ch??nh th???c c??n m???c 100 t??? ch??? sau 2 tu???n c??ng
                  chi???u
                </a>
              </h3>
              <p className="news__item__info--detail">
                Sau 2 tu???n ra m???t, Ti???c Tr??ng M??u ch??nh th???c gia nh???p c??u l???c b???
                phim ??i???n ???nh ?????t 100 t??? ?????ng doanh thu ph??ng v??. D??n ng??i sao
                ???b???c t?????? c???a phim c??ng l???n ?????u ti??n h???i t??? ?????y ????? trong m???t
                khung h??nh ????? ??n m???ng th??nh t??ch ???n t?????ng c???a t??c ph???m.
              </p>
            </div>
            <div className="news__item__social">
              <div className="news__item__social--item">
                <img
                  src="https://kdq-react-movie-app.surge.sh/images/like.png"
                  alt="like"
                />
                <span className="news__item__social--like__num">83</span>
              </div>
              <div className="news__item__social--item">
                <img
                  src="https://kdq-react-movie-app.surge.sh/images/comment.png"
                  alt="comment"
                />
                <span className="news__item__social--cmt__num">76</span>
              </div>
            </div>
          </div>
          <div className="news__item">
            <div className="news__item__img">
              <a
                href="https://tix.vn/goc-dien-anh/7956-ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={image2} alt="tin tuc" />
              </a>
            </div>
            <div className="news__item__info">
              <h3 className="news__item__info--title">
                <a
                  href="https://tix.vn/goc-dien-anh/7956-ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NG?? THANH V??N CH??NH TH???C KH???I ?????NG CU???C THI THI???T K??? TRANG
                  PH???C CHO SI??U ANH H??NG ?????U TI??N C???A VI???T NAM ??? VINAMAN
                </a>
              </h3>
              <p className="news__item__info--detail">
                Chi???u t???i ng??y 30-10-2020, Ng?? Thanh V??n v?? Studio68 ???? ch??nh
                th???c ph??t ?????ng cu???c thi thi???t k??? trang ph???c cho si??u anh h??ng
                VINAMAN v???i t???ng gi?? tr??? gi???i th?????ng l??n ?????n 60 tri???u ?????ng.
              </p>
            </div>
            <div className="news__item__social">
              <div className="news__item__social--item">
                <img
                  src="https://kdq-react-movie-app.surge.sh/images/like.png"
                  alt="like"
                />
                <span className="news__item__social--like__num">18</span>
              </div>
              <div className="news__item__social--item">
                <img
                  src="https://kdq-react-movie-app.surge.sh/images/comment.png"
                  alt="comment"
                />
                <span className="news__item__social--cmt__num">20</span>
              </div>
            </div>
          </div>
          <div className="news__item">
            <div className="news__item__img">
              <a
                href="https://tix.vn/goc-dien-anh/7953-antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={image3} alt="tin tuc" />
              </a>
            </div>
            <div className="news__item__info">
              <h3 className="news__item__info--title">
                <a
                  href="https://tix.vn/goc-dien-anh/7953-antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [ANTEBELLUM] - 4 l?? do kh??ng th??? b??? l??? si??u ph???m kinh d???
                  Antebellum: B???y Th???c T???i Kinh Ho??ng
                </a>
              </h3>
              <p className="news__item__info--detail">
                Kh??ng ??i theo l???i m??n m??u me, h?? d???a m?? ?????u t?? khai th??c nh???ng
                m???ng t???i c???a x?? h???i tr??n n???n m???t c??u chuy???n kinh d???, c?? s??? tham
                gia c???a nh?? s???n xu???t ???? l??m n??n th??nh c??ng c???a lo???t t??c ph???m ???n
                t?????ng ???Get Out???, ???Us??? hay ???BlacKkKlansman???, v?? c??n nhi???u l?? do
                kh??c khi???n ng?????i y??u phim kh??ng th??? b??? l??? Ante
              </p>
            </div>
            <div className="news__item__social">
              <div className="news__item__social--item">
                <img
                  src="https://kdq-react-movie-app.surge.sh/images/like.png"
                  alt="like"
                />
                <span className="news__item__social--like__num">39</span>
              </div>
              <div className="news__item__social--item">
                <img
                  src="https://kdq-react-movie-app.surge.sh/images/comment.png"
                  alt="comment"
                />
                <span className="news__item__social--cmt__num">28</span>
              </div>
            </div>
          </div>
          <div className="news__item">
            <div className="news__item__img">
              <a
                href="https://tix.vn/goc-dien-anh/7905-batman-vs-joker-ai-tot-ai-xau"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={image4} alt="tin tuc" />
              </a>
            </div>
            <div className="news__item__info">
              <h3 className="news__item__info--title">
                <a
                  href="https://tix.vn/goc-dien-anh/7905-batman-vs-joker-ai-tot-ai-xau"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Batman vs. Joker: Ai t???t ai x???u?
                </a>
              </h3>
              <p className="news__item__info--detail">
                Ng?????i ta n??i Batman c?? m???t gi??n ph???n di???n hay nh???t trong gi???i
                truy???n tranh c??ng nh?? ??i???n ???nh, nh??ng m??nh bi???t ch???c ch???n khi
                nghe c??u ???? ng?????i ta ch??? ngh?? ?????n m???t ng?????i, The Joker - Ho??ng
                t??? h??? c???a gi???i t???i ph???m.
              </p>
            </div>
            <div className="news__item__social">
              <div className="news__item__social--item">
                <img
                  src="https://kdq-react-movie-app.surge.sh/images/like.png"
                  alt="like"
                />
                <span className="news__item__social--like__num">46</span>
              </div>
              <div className="news__item__social--item">
                <img
                  src="https://kdq-react-movie-app.surge.sh/images/comment.png"
                  alt="comment"
                />
                <span className="news__item__social--cmt__num">24</span>
              </div>
            </div>
          </div>
          <div className="news__item">
            <div className="news__item__img">
              <a
                href="https://tix.vn/goc-dien-anh/7951-da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={image5} alt="tin tuc" />
              </a>
            </div>
            <div className="news__item__info">
              <h3 className="news__item__info--title">
                <a
                  href="https://tix.vn/goc-dien-anh/7951-da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Da??n my?? nh??n trong th???? gi????i ??i????n a??nh cu??a qua??i ki????t Christopher
                  Nolan
                </a>
              </h3>
            </div>
          </div>
          <div className="news__item">
            <div className="news__item__img">
              <a
                href="https://tix.vn/goc-dien-anh/7950-truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={image6} alt="tin tuc" />
              </a>
            </div>
            <div className="news__item__info">
              <h3 className="news__item__info--title">
                <a
                  href="https://tix.vn/goc-dien-anh/7950-truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Truy C??ng Gi???t T???n - Cu???c t??i ng??? c???a hai '??ng ho??ng ph??ng v??'
                  x??? H??n
                </a>
              </h3>
            </div>
          </div>
          <div className="news__item">
            <div className="news__item__img">
              <a
                href="https://tix.vn/goc-dien-anh/7949-6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={image7} alt="tin tuc" />
              </a>
            </div>
            <div className="news__item__info">
              <h3 className="news__item__info--title">
                <a
                  href="https://tix.vn/goc-dien-anh/7949-6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  6 ??a??o di????n ti?? ???? l??m n??n th??nh c??ng c???a nh????ng bom t????n ??i??nh ??a??m
                  nh????t Hollywood
                </a>
              </h3>
            </div>
          </div>
          <div className="news__item">
            <div className="news__item__img">
              <a
                href="https://tix.vn/goc-dien-anh/7948-gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={image8} alt="tin tuc" />
              </a>
            </div>
            <div className="news__item__info">
              <h3 className="news__item__info--title">
                <a
                  href="https://tix.vn/goc-dien-anh/7948-gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  G??i Gi?? L???m Chi??u V ??? Nh???ng cu???c ?????i v????ng gi???
                </a>
              </h3>
            </div>
          </div>
          {active ? (
            <Fragment>
              <div className="news__item">
                <div className="news__item__img">
                  <a
                    href="https://tix.vn/goc-dien-anh/7945-kaity-nguyen-tro-thanh-my-nhan-moi-cua-vu-tru-gai-gia-lam-chieu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={image9} alt="tin tuc" />
                  </a>
                </div>
                <div className="news__item__info">
                  <h3 className="news__item__info--title">
                    <a
                      href="https://tix.vn/goc-dien-anh/7945-kaity-nguyen-tro-thanh-my-nhan-moi-cua-vu-tru-gai-gia-lam-chieu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Kaity Nguy???n tr??? th??nh m??? nh??n m???i c???a v?? tr??? G??i Gi?? L???m
                      Chi??u
                    </a>
                  </h3>
                  <p className="news__item__info--detail">
                    Sau khi ti???t l??? nh??n t??? ?????u ti??n l?? NSND L?? Khanh s??? ti???p
                    t???c tham gia ph???n ti???p theo c???a G??i gi?? l???m chi??u v???i m??i
                    t??c ???????c c???t ng???n ?????y m???nh m??? v?? nam t??nh. Kaity Nguy???n s???
                    l?? m??? nh??n ti???p theo n???i g??t hai ????n ch??? l?? Di???m My 9X v??
                    Ninh D????ng Lan Ng???c gia nh???p v?? tr??? ??i???n ???nh G??i Gi?? L???m
                    Chi??u.
                  </p>
                </div>
                <div className="news__item__social">
                  <div className="news__item__social--item">
                    <img
                      src="https://kdq-react-movie-app.surge.sh/images/like.png"
                      alt="like"
                    />
                    <span className="news__item__social--like__num">87</span>
                  </div>
                  <div className="news__item__social--item">
                    <img
                      src="https://kdq-react-movie-app.surge.sh/images/comment.png"
                      alt="comment"
                    />
                    <span className="news__item__social--cmt__num">33</span>
                  </div>
                </div>
              </div>
              <div className="news__item">
                <div className="news__item__img">
                  <a
                    href="https://tix.vn/goc-dien-anh/7944-5-ly-do-khien-ban-khong-the-bo-qua-bo-phim-cau-be-nguoi-go-pinocchio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={image10} alt="tin tuc" />
                  </a>
                </div>
                <div className="news__item__info">
                  <h3 className="news__item__info--title">
                    <a
                      href="https://tix.vn/goc-dien-anh/7944-5-ly-do-khien-ban-khong-the-bo-qua-bo-phim-cau-be-nguoi-go-pinocchio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      5 l?? do khi???n b???n kh??ng th??? b??? qua b??? phim C???u B?? Ng?????i G???
                      Pinocchio
                    </a>
                  </h3>
                  <p className="news__item__info--detail">
                    Kh??ng ch??? chuy???n t???i ???????c gi?? tr??? c???a t??c ph???m g???c, ???C???u B??
                    Ng?????i G??? Pinocchio??? c???a n??m 2020 c??n th??nh c??ng chinh ph???c
                    th??? h??? kh??n gi??? hi???n ?????i v???i m???t tr???i nghi???m ??i???n ???nh ?????y
                    s???c m??u nh??ng c??ng v?? c??ng m???i l???. C??ng ??i???m qua 5 l?? do
                    khi???n b??? phim ?????c bi???t ?????n v???y nh??!
                  </p>
                </div>
                <div className="news__item__social">
                  <div className="news__item__social--item">
                    <img
                      src="https://kdq-react-movie-app.surge.sh/images/like.png"
                      alt="like"
                    />
                    <span className="news__item__social--like__num">12</span>
                  </div>
                  <div className="news__item__social--item">
                    <img
                      src="https://kdq-react-movie-app.surge.sh/images/comment.png"
                      alt="comment"
                    />
                    <span className="news__item__social--cmt__num">6</span>
                  </div>
                </div>
              </div>
              <div className="news__item">
                <div className="news__item__img">
                  <a
                    href="https://tix.vn/goc-dien-anh/7943-tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={image11} alt="tin tuc" />
                  </a>
                </div>
                <div className="news__item__info">
                  <h3 className="news__item__info--title">
                    <a
                      href="https://tix.vn/goc-dien-anh/7943-tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      TENET c??ng b??? ng??y kh???i chi???u ch??nh th???c t???i Vi???t Nam
                    </a>
                  </h3>
                  <p className="news__item__info--detail">
                    ????m qua theo gi??? Vi???t Nam, h??ng phim Warner Bros. ????a ra
                    th??ng b??o ch??nh th???c v??? ng??y kh???i chi???u cho bom t???n TENET
                    t???i c??c th??? tr?????ng b??n ngo??i B???c M???, trong ???? c?? Vi???t Nam.
                  </p>
                </div>
                <div className="news__item__social">
                  <div className="news__item__social--item">
                    <img
                      src="https://kdq-react-movie-app.surge.sh/images/like.png"
                      alt="like"
                    />
                    <span className="news__item__social--like__num">22</span>
                  </div>
                  <div className="news__item__social--item">
                    <img
                      src="https://kdq-react-movie-app.surge.sh/images/comment.png"
                      alt="comment"
                    />
                    <span className="news__item__social--cmt__num">8</span>
                  </div>
                </div>
              </div>
              <div className="news__item">
                <div className="news__item__img">
                  <a
                    href="https://tix.vn/goc-dien-anh/7941-khi-phu-nu-khong-con-o-the-tron-chay-cua-nan-nhan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={image12} alt="tin tuc" />
                  </a>
                </div>
                <div className="news__item__info">
                  <h3 className="news__item__info--title">
                    <a
                      href="https://tix.vn/goc-dien-anh/7941-khi-phu-nu-khong-con-o-the-tron-chay-cua-nan-nhan"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Khi ph??? n??? kh??ng c??n ??? th??? tr???n ch???y c???a n???n nh??n
                    </a>
                  </h3>
                  <p className="news__item__info--detail">
                    L?? b??? phim t??m l?? li k??? v???i ch??? ????? t???i ph???m, B???ng Ch???ng V??
                    H??nh mang ?????n m???t g??c nh??n m???i v??? h??nh ???nh nh???ng ng?????i ph???
                    n??? th???i hi???n ?????i. ??i???u ???? ???????c th??? hi???n qua c??u chuy???n v???
                    hai ng?????i ph??? n??? c??ng h???p s???c ????? v???ch m???t t??n t???i ph???m c?? s???
                    th??ch b???nh ho???n v???i ph??? n???.
                  </p>
                </div>
                <div className="news__item__social">
                  <div className="news__item__social--item">
                    <img
                      src="https://kdq-react-movie-app.surge.sh/images/like.png"
                      alt="like"
                    />
                    <span className="news__item__social--like__num">6</span>
                  </div>
                  <div className="news__item__social--item">
                    <img
                      src="https://kdq-react-movie-app.surge.sh/images/comment.png"
                      alt="comment"
                    />
                    <span className="news__item__social--cmt__num">27</span>
                  </div>
                </div>
              </div>
              <div className="news__item">
                <div className="news__item__img">
                  <a
                    href="https://tix.vn/goc-dien-anh/7940-gerard-butler-cung-bo-cu-deadpool-tham-gia-greenland"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={image13} alt="tin tuc" />
                  </a>
                </div>
                <div className="news__item__info">
                  <h3 className="news__item__info--title">
                    <a
                      href="https://tix.vn/goc-dien-anh/7940-gerard-butler-cung-bo-cu-deadpool-tham-gia-greenland"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Gerard Butler c??ng b??? c?? Deadpool tham gia Greenland
                    </a>
                  </h3>
                </div>
              </div>
              <div className="news__item">
                <div className="news__item__img">
                  <a
                    href="https://tix.vn/goc-dien-anh/7939-dien-vien-dac-biet-cua-bang-chung-vo-hinh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={image14} alt="tin tuc" />
                  </a>
                </div>
                <div className="news__item__info">
                  <h3 className="news__item__info--title">
                    <a
                      href="https://tix.vn/goc-dien-anh/7939-dien-vien-dac-biet-cua-bang-chung-vo-hinh"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Di???n vi??n ?????c bi???t c???a B???ng Ch???ng V?? H??nh
                    </a>
                  </h3>
                </div>
              </div>
              <div className="news__item">
                <div className="news__item__img">
                  <a
                    href="https://tix.vn/goc-dien-anh/7938-pee-nak-2-van-kiep-thien-thu-di-tu-khong-het-nghiep"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={image15} alt="tin tuc" />
                  </a>
                </div>
                <div className="news__item__info">
                  <h3 className="news__item__info--title">
                    <a
                      href="https://tix.vn/goc-dien-anh/7938-pee-nak-2-van-kiep-thien-thu-di-tu-khong-het-nghiep"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pee Nak 2 - V???n ki???p thi??n thu, ??i tu kh??ng h???t nghi???p!
                    </a>
                  </h3>
                </div>
              </div>
              <div className="news__item">
                <div className="news__item__img">
                  <a
                    href="https://tix.vn/goc-dien-anh/7937-loat-phim-kinh-di-khong-the-bo-lo-trong-thang-7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={image16} alt="tin tuc" />
                  </a>
                </div>
                <div className="news__item__info">
                  <h3 className="news__item__info--title">
                    <a
                      href="https://tix.vn/goc-dien-anh/7937-loat-phim-kinh-di-khong-the-bo-lo-trong-thang-7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Lo???t phim kinh d??? kh??ng th??? b??? l??? trong th??ng 7!
                    </a>
                  </h3>
                </div>
              </div>
            </Fragment>
          ) : null}
          <div className="news__btn">
            <Button variant="contained" onClick={handleChangeActive}>
              {active ? "THU G???N" : "XEM TH??M"}
            </Button>
          </div>
        </div>
        <div className="tab-pane fade" id="review">
          <div className="news__item">
            <div className="news__item__img">
              <a
                href="https://tix.vn/review/7947-review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={review1} alt="tin tuc" />
              </a>
            </div>
            <div className="news__item__info">
              <h3 className="news__item__info--title">
                <a
                  href="https://tix.vn/review/7947-review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Review: T??n T??ch Qu??? ??m (Relic) - Ba th??? h??? v?? m???i li??n k???t
                </a>
              </h3>
              <p className="news__item__info--detail">
                ??i???m nh???n c???a phim kinh d??? n??m 2020 ch??nh l?? T??n T??ch Qu??? ??m
              </p>
            </div>
            <div className="news__item__social">
              <div className="news__item__social--item">
                <img
                  src="https://kdq-react-movie-app.surge.sh/images/like.png"
                  alt="like"
                />
                <span className="news__item__social--like__num">0</span>
              </div>
              <div className="news__item__social--item">
                <img
                  src="https://kdq-react-movie-app.surge.sh/images/comment.png"
                  alt="comment"
                />
                <span className="news__item__social--cmt__num">0</span>
              </div>
            </div>
          </div>
          <div className="news__item">
            <div className="news__item__img">
              <a
                href="https://tix.vn/review/7946-review-dinh-thu-oan-khuat-ghost-of-war"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={review2} alt="tin tuc" />
              </a>
            </div>
            <div className="news__item__info">
              <h3 className="news__item__info--title">
                <a
                  href="https://tix.vn/review/7946-review-dinh-thu-oan-khuat-ghost-of-war"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Review: Dinh Th??? Oan Khu???t (Ghost Of War)
                </a>
              </h3>
              <p className="news__item__info--detail">
                Tuy l?? m???t b??? phim c?? ch???t l?????ng t???t, nh??ng c?? v??? Dinh Th??? Oan
                Khu???t v???n ch??a ????? ????? ??em kh??n gi??? tr??? l???i ph??ng v??!
              </p>
            </div>
            <div className="news__item__social">
              <div className="news__item__social--item">
                <img
                  src="https://kdq-react-movie-app.surge.sh/images/like.png"
                  alt="like"
                />
                <span className="news__item__social--like__num">0</span>
              </div>
              <div className="news__item__social--item">
                <img
                  src="https://kdq-react-movie-app.surge.sh/images/comment.png"
                  alt="comment"
                />
                <span className="news__item__social--cmt__num">0</span>
              </div>
            </div>
          </div>
          <div className="news__item">
            <div className="news__item__img">
              <a
                href="https://tix.vn/review/7924-blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={review3} alt="tin tuc" />
              </a>
            </div>
            <div className="news__item__info">
              <h3 className="news__item__info--title">
                <a
                  href="https://tix.vn/review/7924-blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ???BlacKkKlansman??? - c???c n?????c l???nh ????? ng?????i M??? th???c t???nh
                </a>
              </h3>
              <p className="news__item__info--detail">
                T??c ph???m nh???n ????? c??? Phim truy???n xu???t s???c t???i Oscar 2019 c???a ?????o
                di???n Spike Lee l?? m???t l??t c???t n???a v??? n???n ph??n bi???t ch???ng t???c -
                n???i ??au g??y nh???c nh???i n?????c M??? cho t???i t???n h??m nay.
              </p>
            </div>
            <div className="news__item__social">
              <div className="news__item__social--item">
                <img
                  src="https://kdq-react-movie-app.surge.sh/images/like.png"
                  alt="like"
                />
                <span className="news__item__social--like__num">0</span>
              </div>
              <div className="news__item__social--item">
                <img
                  src="https://kdq-react-movie-app.surge.sh/images/comment.png"
                  alt="comment"
                />
                <span className="news__item__social--cmt__num">0</span>
              </div>
            </div>
          </div>
          <div className="news__item">
            <div className="news__item__img">
              <a
                href="https://tix.vn/review/7918-american-sniper-chinh-nghia-hay-phi-nghia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={review4} alt="tin tuc" />
              </a>
            </div>
            <div className="news__item__info">
              <h3 className="news__item__info--title">
                <a
                  href="https://tix.vn/review/7918-american-sniper-chinh-nghia-hay-phi-nghia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  American Sniper - Ch??nh ngh??a hay phi ngh??a?
                </a>
              </h3>
              <p className="news__item__info--detail">
                American Sniper kh???c h???a m???t tay s??ng b???n t???a ???huy???n tho???i??? c???a
                H???i qu??n M??? v???i 4 l???n tham chi???n ??? Trung ????ng. C??u chuy???n phim
                ch???m r??i ????a ng?????i xem qua t???ng th???i kh???c kh??c nhau c???a Kyle, t???
                th???a nh???, thi???u ni??n, r???i gia nh???p qu??n ?????i, r???i tham chi???n.
                T???ng kho???nh kh???c b???t ?????u nh??? nh??ng...
              </p>
            </div>
            <div className="news__item__social">
              <div className="news__item__social--item">
                <img
                  src="https://kdq-react-movie-app.surge.sh/images/like.png"
                  alt="like"
                />
                <span className="news__item__social--like__num">0</span>
              </div>
              <div className="news__item__social--item">
                <img
                  src="https://kdq-react-movie-app.surge.sh/images/comment.png"
                  alt="comment"
                />
                <span className="news__item__social--cmt__num">0</span>
              </div>
            </div>
          </div>
          <div className="news__item">
            <div className="news__item__img">
              <a
                href="https://tix.vn/review/7894-review-spider-man-into-the-spider-vesre"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={review5} alt="tin tuc" />
              </a>
            </div>
            <div className="news__item__info">
              <h3 className="news__item__info--title">
                <a
                  href="https://tix.vn/review/7894-review-spider-man-into-the-spider-vesre"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Review: Spider-Man: Into The Spider-Vesre
                </a>
              </h3>
            </div>
          </div>
          <div className="news__item">
            <div className="news__item__img">
              <a
                href="https://tix.vn/review/7886-covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={review6} alt="tin tuc" />
              </a>
            </div>
            <div className="news__item__info">
              <h3 className="news__item__info--title">
                <a
                  href="https://tix.vn/review/7886-covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  COVID-19 l?? b???n ch??nh th???c c???a MEV-1 phim contagion (2011)
                </a>
              </h3>
            </div>
          </div>
          <div className="news__item">
            <div className="news__item__img">
              <a
                href="https://tix.vn/review/7882-review-sieu-ve-si-so-vo-giai-cuu-tong-thong-chua-bao-gio-lay-loi-va-hai-huoc-den-the"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={review7} alt="tin tuc" />
              </a>
            </div>
            <div className="news__item__info">
              <h3 className="news__item__info--title">
                <a
                  href="https://tix.vn/review/7882-review-sieu-ve-si-so-vo-giai-cuu-tong-thong-chua-bao-gio-lay-loi-va-hai-huoc-den-the"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [Review] Si??u V??? S?? S??? V??? - Gi???i c???u T???ng th???ng ch??a bao gi???
                  l???y l???i v?? h??i h?????c ?????n th???
                </a>
              </h3>
            </div>
          </div>
          <div className="news__item">
            <div className="news__item__img">
              <a
                href="https://tix.vn/review/7881-review-bloodshot-mo-man-an-tuong-cho-vu-tru-sieu-anh-hung-valiant"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={review8} alt="tin tuc" />
              </a>
            </div>
            <div className="news__item__info">
              <h3 className="news__item__info--title">
                <a
                  href="https://tix.vn/review/7881-review-bloodshot-mo-man-an-tuong-cho-vu-tru-sieu-anh-hung-valiant"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [Review] Bloodshot - M??? m??n ???n t?????ng cho V?? tr??? Si??u anh h??ng
                  Valiant
                </a>
              </h3>
            </div>
          </div>
          {active ? (
            <Fragment>
              <div className="news__item">
                <div className="news__item__img">
                  <a
                    href="https://tix.vn/review/7876-review-nang-3-loi-hua-cua-cha-cau-chuyen-tinh-than-cam-dong-cua-kha-nhu-va-kieu-minh-tuan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={review9} alt="tin tuc" />
                  </a>
                </div>
                <div className="news__item__info">
                  <h3 className="news__item__info--title">
                    <a
                      href="https://tix.vn/review/7876-review-nang-3-loi-hua-cua-cha-cau-chuyen-tinh-than-cam-dong-cua-kha-nhu-va-kieu-minh-tuan"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [Review] N???ng 3: L???i H???a C???a Cha - C??u chuy???n t??nh th??n
                      c???m ?????ng c???a Kh??? Nh?? v?? Ki???u Minh Tu???n
                    </a>
                  </h3>
                  <p className="news__item__info--detail">
                    Nh?? hai ph???n phim tr?????c, N???ng 3 ti???p t???c mang ?????n c??u chuy???n
                    t??nh cha, m??? - con ?????y n?????c m???t c???a b??? ba nh??n v???t ch??nh.
                  </p>
                </div>
                <div className="news__item__social">
                  <div className="news__item__social--item">
                    <img
                      src="https://kdq-react-movie-app.surge.sh/images/like.png"
                      alt="like"
                    />
                    <span className="news__item__social--like__num">0</span>
                  </div>
                  <div className="news__item__social--item">
                    <img
                      src="https://kdq-react-movie-app.surge.sh/images/comment.png"
                      alt="comment"
                    />
                    <span className="news__item__social--cmt__num">0</span>
                  </div>
                </div>
              </div>
              <div className="news__item">
                <div className="news__item__img">
                  <a
                    href="https://tix.vn/review/7871-review-onward-khi-phep-thuat-manh-me-nhat-chinh-la-tinh-than"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={review10} alt="tin tuc" />
                  </a>
                </div>
                <div className="news__item__info">
                  <h3 className="news__item__info--title">
                    <a
                      href="https://tix.vn/review/7871-review-onward-khi-phep-thuat-manh-me-nhat-chinh-la-tinh-than"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [Review] Onward - Khi ph??p thu???t m???nh m??? nh???t ch??nh l??
                      t??nh th??n
                    </a>
                  </h3>
                  <p className="news__item__info--detail">
                    T??c ph???m m???i nh???t c???a Pixar ti???p t???c l?? c??u chuy???n h??i h?????c
                    v?? c???m x??c v??? t??nh c???m gia ????nh.
                  </p>
                </div>
                <div className="news__item__social">
                  <div className="news__item__social--item">
                    <img
                      src="https://kdq-react-movie-app.surge.sh/images/like.png"
                      alt="like"
                    />
                    <span className="news__item__social--like__num">0</span>
                  </div>
                  <div className="news__item__social--item">
                    <img
                      src="https://kdq-react-movie-app.surge.sh/images/comment.png"
                      alt="comment"
                    />
                    <span className="news__item__social--cmt__num">0</span>
                  </div>
                </div>
              </div>
              <div className="news__item">
                <div className="news__item__img">
                  <a
                    href="https://tix.vn/review/7868-review-ke-vo-hinh-con-gi-dang-so-hon-ke-giet-nguoi-benh-hoan-vo-hinh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={review11} alt="tin tuc" />
                  </a>
                </div>
                <div className="news__item__info">
                  <h3 className="news__item__info--title">
                    <a
                      href="https://tix.vn/review/7868-review-ke-vo-hinh-con-gi-dang-so-hon-ke-giet-nguoi-benh-hoan-vo-hinh"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [Review] K??? V?? H??nh - C??n g?? ????ng s??? h??n k??? gi???t ng?????i
                      b???nh ho???n v?? h??nh?
                    </a>
                  </h3>
                  <p className="news__item__info--detail">
                    Phi??n b???n hi???n ?????i c???a The Invisible Man l?? m???t trong nh???ng
                    phim kinh d??? xu???t s???c nh???t n??m nay.
                  </p>
                </div>
                <div className="news__item__social">
                  <div className="news__item__social--item">
                    <img
                      src="https://kdq-react-movie-app.surge.sh/images/like.png"
                      alt="like"
                    />
                    <span className="news__item__social--like__num">0</span>
                  </div>
                  <div className="news__item__social--item">
                    <img
                      src="https://kdq-react-movie-app.surge.sh/images/comment.png"
                      alt="comment"
                    />
                    <span className="news__item__social--cmt__num">0</span>
                  </div>
                </div>
              </div>
              <div className="news__item">
                <div className="news__item__img">
                  <a
                    href="https://tix.vn/review/7861-review-cau-be-ma-2-ban-trai-cua-be-beo-la-day-chu-dau-xa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={review12} alt="tin tuc" />
                  </a>
                </div>
                <div className="news__item__info">
                  <h3 className="news__item__info--title">
                    <a
                      href="https://tix.vn/review/7861-review-cau-be-ma-2-ban-trai-cua-be-beo-la-day-chu-dau-xa"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [Review] C???u B?? Ma 2 - B???n trai c???a 'b?? Beo' l?? ????y ch???
                      ????u xa
                    </a>
                  </h3>
                  <p className="news__item__info--detail">
                    Brahms: The Boy II c?? nh???ng m??n h?? d???a ???n t?????ng nh??ng c??i
                    k???t l???i kh??ng t????ng x???ng v???i ph???n m??? ?????u h???a h???n.
                  </p>
                </div>
                <div className="news__item__social">
                  <div className="news__item__social--item">
                    <img
                      src="https://kdq-react-movie-app.surge.sh/images/like.png"
                      alt="like"
                    />
                    <span className="news__item__social--like__num">0</span>
                  </div>
                  <div className="news__item__social--item">
                    <img
                      src="https://kdq-react-movie-app.surge.sh/images/comment.png"
                      alt="comment"
                    />
                    <span className="news__item__social--cmt__num">0</span>
                  </div>
                </div>
              </div>
              <div className="news__item">
                <div className="news__item__img">
                  <a
                    href="https://tix.vn/review/7859-review-nhim-sonic-cuoi-tha-ga-cung-chang-nhim-sieu-thanh-lay-loi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={review13} alt="tin tuc" />
                  </a>
                </div>
                <div className="news__item__info">
                  <h3 className="news__item__info--title">
                    <a
                      href="https://tix.vn/review/7859-review-nhim-sonic-cuoi-tha-ga-cung-chang-nhim-sieu-thanh-lay-loi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [Review] Nh??m Sonic - C?????i th??? ga c??ng ch??ng nh??m si??u
                      thanh l???y l???i
                    </a>
                  </h3>
                </div>
              </div>
              <div className="news__item">
                <div className="news__item__img">
                  <a
                    href="https://tix.vn/review/7858-review-thang-nam-hanh-phuc-ta-tung-co-buong-bo-chua-bao-gio-la-viec-de-dang"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={review14} alt="tin tuc" />
                  </a>
                </div>
                <div className="news__item__info">
                  <h3 className="news__item__info--title">
                    <a
                      href="https://tix.vn/review/7858-review-thang-nam-hanh-phuc-ta-tung-co-buong-bo-chua-bao-gio-la-viec-de-dang"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [Review] Th??ng N??m H???nh Ph??c Ta T???ng C?? - Bu??ng b??? ch??a
                      bao gi??? l?? vi???c d??? d??ng
                    </a>
                  </h3>
                </div>
              </div>
              <div className="news__item">
                <div className="news__item__img">
                  <a
                    href="https://tix.vn/review/7857-review-sac-dep-doi-tra-huong-giang-ke-chuyen-doi-minh-qua-phim-anh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={review15} alt="tin tuc" />
                  </a>
                </div>
                <div className="news__item__info">
                  <h3 className="news__item__info--title">
                    <a
                      href="https://tix.vn/review/7857-review-sac-dep-doi-tra-huong-giang-ke-chuyen-doi-minh-qua-phim-anh"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [Review] S???c ?????p D???i Tr?? - H????ng Giang k??? chuy???n ?????i m??nh
                      qua phim ???nh
                    </a>
                  </h3>
                </div>
              </div>
              <div className="news__item">
                <div className="news__item__img">
                  <a
                    href="https://tix.vn/review/7852-review-birds-of-prey-man-lot-xac-hoanh-trang-cua-harley-quinn-va-dc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={review16} alt="tin tuc" />
                  </a>
                </div>
                <div className="news__item__info">
                  <h3 className="news__item__info--title">
                    <a
                      href="https://tix.vn/review/7852-review-birds-of-prey-man-lot-xac-hoanh-trang-cua-harley-quinn-va-dc"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [Review] Birds of Prey - M??n l???t x??c ho??nh tr??ng c???a
                      Harley Quinn v?? DC
                    </a>
                  </h3>
                </div>
              </div>
            </Fragment>
          ) : null}
          <div className="news__btn">
            <Button variant="contained" onClick={handleChangeActive}>
              {active ? "THU G???N" : "XEM TH??M"}
            </Button>
          </div>
        </div>
        <div className="tab-pane fade" id="promotion">
          <div className="news__item">
            <div className="news__item__img">
              <a
                href="https://tix.vn/khuyen-mai/7958-bhd-59k-ve-ca-tuan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={pro1} alt="tin tuc" />
              </a>
            </div>
            <div className="news__item__info">
              <h3 className="news__item__info--title">
                <a
                  href="https://tix.vn/khuyen-mai/7958-bhd-59k-ve-ca-tuan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BHD 59K/V?? C??? TU???N !!!
                </a>
              </h3>
              <p className="news__item__info--detail">
                T???n h?????ng ??u ????i l??n ?????n 3 V?? BHD Star m???i tu???n ch??? v???i gi??
                59k/v?? khi mua v?? tr??n TIX ho???c M???c V?? Phim tr??n ZaloPay.
              </p>
            </div>
            <div className="news__item__social">
              <div className="news__item__social--item">
                <img
                  src="https://kdq-react-movie-app.surge.sh/images/like.png"
                  alt="like"
                />
                <span className="news__item__social--like__num">0</span>
              </div>
              <div className="news__item__social--item">
                <img
                  src="https://kdq-react-movie-app.surge.sh/images/comment.png"
                  alt="comment"
                />
                <span className="news__item__social--cmt__num">0</span>
              </div>
            </div>
          </div>
          <div className="news__item">
            <div className="news__item__img">
              <a
                href="https://tix.vn/khuyen-mai/7955-tix-1k-ve-ngai-chi-gia-ve"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={pro2} alt="tin tuc" />
              </a>
            </div>
            <div className="news__item__info">
              <h3 className="news__item__info--title">
                <a
                  href="https://tix.vn/khuyen-mai/7955-tix-1k-ve-ngai-chi-gia-ve"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TIX 1K/V?? NG???I CHI GI?? V??
                </a>
              </h3>
              <p className="news__item__info--detail">
                ?????ng gi?? 1k/v?? c??? tu???n t???t c??? c??c r???p tr??n TIX + Nh???n th??m 02
                voucher thanh to??n ZaloPay th??? ga
              </p>
            </div>
            <div className="news__item__social">
              <div className="news__item__social--item">
                <img
                  src="https://kdq-react-movie-app.surge.sh/images/like.png"
                  alt="like"
                />
                <span className="news__item__social--like__num">0</span>
              </div>
              <div className="news__item__social--item">
                <img
                  src="https://kdq-react-movie-app.surge.sh/images/comment.png"
                  alt="comment"
                />
                <span className="news__item__social--cmt__num">0</span>
              </div>
            </div>
          </div>
          <div className="news__item">
            <div className="news__item__img">
              <a
                href="https://tix.vn/khuyen-mai/7954-dong-gia-1k-ve-khi-mua-ve-qua-tix"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={pro3} alt="tin tuc" />
              </a>
            </div>
            <div className="news__item__info">
              <h3 className="news__item__info--title">
                <a
                  href="https://tix.vn/khuyen-mai/7954-dong-gia-1k-ve-khi-mua-ve-qua-tix"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ?????NG GI?? 1K/V?? KHI MUA V?? QUA TIX
                </a>
              </h3>
              <p className="news__item__info--detail">
                ?????NG GI?? 1K/V?? KHI MUA V?? QUA TIX H??nh tr??nh t??m R??m v?? Ph??c ch???
                v???i 1k c??? tu???n + nh???n th??m 02 voucher khi ?????t v?? qua TIX.
              </p>
            </div>
            <div className="news__item__social">
              <div className="news__item__social--item">
                <img
                  src="https://kdq-react-movie-app.surge.sh/images/like.png"
                  alt="like"
                />
                <span className="news__item__social--like__num">0</span>
              </div>
              <div className="news__item__social--item">
                <img
                  src="https://kdq-react-movie-app.surge.sh/images/comment.png"
                  alt="comment"
                />
                <span className="news__item__social--cmt__num">0</span>
              </div>
            </div>
          </div>
          <div className="news__item">
            <div className="news__item__img">
              <a
                href="https://tix.vn/khuyen-mai/7919-bhd-star-ve-chi-59-000d-ca-tuan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={pro4} alt="tin tuc" />
              </a>
            </div>
            <div className="news__item__info">
              <h3 className="news__item__info--title">
                <a
                  href="https://tix.vn/khuyen-mai/7919-bhd-star-ve-chi-59-000d-ca-tuan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BHD STAR V?? CH??? 59.000?? C??? TU???N!
                </a>
              </h3>
              <p className="news__item__info--detail">
                T???n h?????ng ??u ????i l??n ?????n 3 V?? BHD Star m???i tu???n ch??? v???i gi??
                59k/v?? khi mua v?? tr??n TIX v?? thanh to??n b???ng ZaloPay ho???c M???c
                V?? Phim tr??n ZaloPay.
              </p>
            </div>
            <div className="news__item__social">
              <div className="news__item__social--item">
                <img
                  src="https://kdq-react-movie-app.surge.sh/images/like.png"
                  alt="like"
                />
                <span className="news__item__social--like__num">0</span>
              </div>
              <div className="news__item__social--item">
                <img
                  src="https://kdq-react-movie-app.surge.sh/images/comment.png"
                  alt="comment"
                />
                <span className="news__item__social--cmt__num">0</span>
              </div>
            </div>
          </div>
          <div className="news__item">
            <div className="news__item__img">
              <a
                href="https://tix.vn/khuyen-mai/7908-beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={pro5} alt="tin tuc" />
              </a>
            </div>
            <div className="news__item__info">
              <h3 className="news__item__info--title">
                <a
                  href="https://tix.vn/khuyen-mai/7908-beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Beta Cineplex tr??? l???i v???i h??ng lo???t ??u ????i l???n
                </a>
              </h3>
            </div>
          </div>
          <div className="news__item">
            <div className="news__item__img">
              <a
                href="https://tix.vn/khuyen-mai/7806-123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={pro6} alt="tin tuc" />
              </a>
            </div>
            <div className="news__item__info">
              <h3 className="news__item__info--title">
                <a
                  href="https://tix.vn/khuyen-mai/7806-123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [123Phim] Th??? 6 Kh??ng ??en T???i - ??u ????i hu??? di???t 11k/v?? Anh
                  Trai Y??u Qu??i
                </a>
              </h3>
            </div>
          </div>
          <div className="news__item">
            <div className="news__item__img">
              <a
                href="https://tix.vn/khuyen-mai/7801-123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={pro7} alt="tin tuc" />
              </a>
            </div>
            <div className="news__item__info">
              <h3 className="news__item__info--title">
                <a
                  href="https://tix.vn/khuyen-mai/7801-123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [123Phim] NH???P M?? 'PSM30K' - Gi???m ngay 30k khi ?????t v?? Ph??p S??
                  M??: Ai Ch???t Gi?? Tay
                </a>
              </h3>
            </div>
          </div>
          <div className="news__item">
            <div className="news__item__img">
              <a
                href="https://tix.vn/khuyen-mai/7792-mega-gs-mot-doa-hoa-thay-ngan-loi-yeu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={pro8} alt="tin tuc" />
              </a>
            </div>
            <div className="news__item__info">
              <h3 className="news__item__info--title">
                <a
                  href="https://tix.vn/khuyen-mai/7792-mega-gs-mot-doa-hoa-thay-ngan-loi-yeu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [Mega GS] M???t ??o?? hoa thay ng??n l???i y??u
                </a>
              </h3>
            </div>
          </div>
          {active ? (
            <Fragment>
              <div className="news__item">
                <div className="news__item__img">
                  <a
                    href="https://tix.vn/khuyen-mai/7790-123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={pro9} alt="tin tuc" />
                  </a>
                </div>
                <div className="news__item__info">
                  <h3 className="news__item__info--title">
                    <a
                      href="https://tix.vn/khuyen-mai/7790-123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [123Phim] NH???P M?? 'BKT' - Gi???m ngay 20k khi ?????t v?? B???c Kim
                      Thang
                    </a>
                  </h3>
                  <p className="news__item__info--detail">
                    123Phim ?????ng h??nh c??ng phim Vi???t - Gi???m ngay 20k m???i giao
                    d???ch khi ?????t v?? B???c Kim Thang tr??n ???ng d???ng 123Phim.
                  </p>
                </div>
                <div className="news__item__social">
                  <div className="news__item__social--item">
                    <img
                      src="https://kdq-react-movie-app.surge.sh/images/like.png"
                      alt="like"
                    />
                    <span className="news__item__social--like__num">0</span>
                  </div>
                  <div className="news__item__social--item">
                    <img
                      src="https://kdq-react-movie-app.surge.sh/images/comment.png"
                      alt="comment"
                    />
                    <span className="news__item__social--cmt__num">0</span>
                  </div>
                </div>
              </div>
              <div className="news__item">
                <div className="news__item__img">
                  <a
                    href="https://tix.vn/khuyen-mai/7774-sinh-nhat-mega-gs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={pro10} alt="tin tuc" />
                  </a>
                </div>
                <div className="news__item__info">
                  <h3 className="news__item__info--title">
                    <a
                      href="https://tix.vn/khuyen-mai/7774-sinh-nhat-mega-gs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Sinh Nh???t Mega GS
                    </a>
                  </h3>
                  <p className="news__item__info--detail">
                    ?????n h???n l???i l??n, v???y l?? m???t n??m n???a ???? tr??i qua v?? ch??ng ta
                    l???i ?????n th??ng 8, th??ng sinh nh???t c???a Mega GS Cinemas.
                  </p>
                </div>
                <div className="news__item__social">
                  <div className="news__item__social--item">
                    <img
                      src="https://kdq-react-movie-app.surge.sh/images/like.png"
                      alt="like"
                    />
                    <span className="news__item__social--like__num">0</span>
                  </div>
                  <div className="news__item__social--item">
                    <img
                      src="https://kdq-react-movie-app.surge.sh/images/comment.png"
                      alt="comment"
                    />
                    <span className="news__item__social--cmt__num">0</span>
                  </div>
                </div>
              </div>
              <div className="news__item">
                <div className="news__item__img">
                  <a
                    href="https://tix.vn/khuyen-mai/7741-123phim-tixshop-tro-lai-qua-xin-hon-xua"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={pro11} alt="tin tuc" />
                  </a>
                </div>
                <div className="news__item__info">
                  <h3 className="news__item__info--title">
                    <a
                      href="https://tix.vn/khuyen-mai/7741-123phim-tixshop-tro-lai-qua-xin-hon-xua"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [123Phim] TixShop tr??? l???i, qu?? ???x???n??? h??n x??a
                    </a>
                  </h3>
                  <p className="news__item__info--detail">
                    Nhi???u Tix l??m g??, ????? ti??u v??o TixShop ch??? c??n ch??? chi.
                  </p>
                </div>
                <div className="news__item__social">
                  <div className="news__item__social--item">
                    <img
                      src="https://kdq-react-movie-app.surge.sh/images/like.png"
                      alt="like"
                    />
                    <span className="news__item__social--like__num">0</span>
                  </div>
                  <div className="news__item__social--item">
                    <img
                      src="https://kdq-react-movie-app.surge.sh/images/comment.png"
                      alt="comment"
                    />
                    <span className="news__item__social--cmt__num">0</span>
                  </div>
                </div>
              </div>
              <div className="news__item">
                <div className="news__item__img">
                  <a
                    href="https://tix.vn/khuyen-mai/7732-galaxy-trang-thi-xem-phim-hay-say-qua-tang"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={pro12} alt="tin tuc" />
                  </a>
                </div>
                <div className="news__item__info">
                  <h3 className="news__item__info--title">
                    <a
                      href="https://tix.vn/khuyen-mai/7732-galaxy-trang-thi-xem-phim-hay-say-qua-tang"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [Galaxy Tr??ng Thi] Xem Phim Hay, Say Qu?? T???ng
                    </a>
                  </h3>
                  <p className="news__item__info--detail">
                    Nh??n d???p khai tr????ng Galaxy Tr??ng Thi, Galaxy Cinema d??nh
                    t???ng c??c Stars H?? N???i lo???t ph???n qu?? si??u h???p d???n.
                  </p>
                </div>
                <div className="news__item__social">
                  <div className="news__item__social--item">
                    <img
                      src="https://kdq-react-movie-app.surge.sh/images/like.png"
                      alt="like"
                    />
                    <span className="news__item__social--like__num">0</span>
                  </div>
                  <div className="news__item__social--item">
                    <img
                      src="https://kdq-react-movie-app.surge.sh/images/comment.png"
                      alt="comment"
                    />
                    <span className="news__item__social--cmt__num">0</span>
                  </div>
                </div>
              </div>
              <div className="news__item">
                <div className="news__item__img">
                  <a
                    href="https://tix.vn/khuyen-mai/7727-mua-2-ve-cinestar-qua-zalopay-chi-1-000d-ve"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={pro13} alt="tin tuc" />
                  </a>
                </div>
                <div className="news__item__info">
                  <h3 className="news__item__info--title">
                    <a
                      href="https://tix.vn/khuyen-mai/7727-mua-2-ve-cinestar-qua-zalopay-chi-1-000d-ve"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Mua 2 V?? Cinestar Qua ZaloPay Ch??? 1.000??/v??
                    </a>
                  </h3>
                </div>
              </div>
              <div className="news__item">
                <div className="news__item__img">
                  <a
                    href="https://tix.vn/khuyen-mai/7723-123phim-ban-la-fan-cung-marvel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={pro14} alt="tin tuc" />
                  </a>
                </div>
                <div className="news__item__info">
                  <h3 className="news__item__info--title">
                    <a
                      href="https://tix.vn/khuyen-mai/7723-123phim-ban-la-fan-cung-marvel"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [123Phim] B???n L?? Fan C???ng Marvel?
                    </a>
                  </h3>
                </div>
              </div>
              <div className="news__item">
                <div className="news__item__img">
                  <a
                    href="https://tix.vn/khuyen-mai/7722-galaxy-trang-thi-trai-nghiem-bom-tan-cang-dong-cang-vui"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={pro15} alt="tin tuc" />
                  </a>
                </div>
                <div className="news__item__info">
                  <h3 className="news__item__info--title">
                    <a
                      href="https://tix.vn/khuyen-mai/7722-galaxy-trang-thi-trai-nghiem-bom-tan-cang-dong-cang-vui"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [Galaxy Tr??ng Thi] Tr???i Nghi???m Bom T???n C??ng ????ng C??ng Vui
                    </a>
                  </h3>
                </div>
              </div>
              <div className="news__item">
                <div className="news__item__img">
                  <a
                    href="https://tix.vn/khuyen-mai/7716-mua-ve-bhd-star-tren-123phim-bang-zalopay-1-000d-ve"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={pro16} alt="tin tuc" />
                  </a>
                </div>
                <div className="news__item__info">
                  <h3 className="news__item__info--title">
                    <a
                      href="https://tix.vn/khuyen-mai/7716-mua-ve-bhd-star-tren-123phim-bang-zalopay-1-000d-ve"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Mua V?? BHD Star Tr??n 123Phim B???ng ZaloPay: 1.000??/v??
                    </a>
                  </h3>
                </div>
              </div>
            </Fragment>
          ) : null}
          <div className="news__btn">
            <Button variant="contained" onClick={handleChangeActive}>
              {active ? "THU G???N" : "XEM TH??M"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
