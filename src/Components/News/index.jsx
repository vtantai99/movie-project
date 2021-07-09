import React, { Fragment, useEffect, useState } from "react";
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
          <a className="nav-link active" data-toggle="tab" href="#24h">
            Điện ảnh 24h
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link review" data-toggle="tab" href="#review">
            Review
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link promotion" data-toggle="tab" href="#promotion">
            Khuyến mãi
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane active" id="24h">
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
                  Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công
                  chiếu
                </a>
              </h3>
              <p className="news__item__info--detail">
                Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu lạc bộ
                phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. Dàn ngôi sao
                “bạc tỷ” của phim cũng lần đầu tiên hội tụ đầy đủ trong một
                khung hình để ăn mừng thành tích ấn tượng của tác phẩm.
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
                  NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG
                  PHỤC CHO SIÊU ANH HÙNG ĐẦU TIÊN CỦA VIỆT NAM – VINAMAN
                </a>
              </h3>
              <p className="news__item__info--detail">
                Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68 đã chính
                thức phát động cuộc thi thiết kế trang phục cho siêu anh hùng
                VINAMAN với tổng giá trị giải thưởng lên đến 60 triệu đồng.
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
                  [ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị
                  Antebellum: Bẫy Thực Tại Kinh Hoàng
                </a>
              </h3>
              <p className="news__item__info--detail">
                Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác những
                mảng tối của xã hội trên nền một câu chuyện kinh dị, có sự tham
                gia của nhà sản xuất đã làm nên thành công của loạt tác phẩm ấn
                tượng “Get Out”, “Us” hay “BlacKkKlansman”, và còn nhiều lý do
                khác khiến người yêu phim không thể bỏ lỡ Ante
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
                  Batman vs. Joker: Ai tốt ai xấu?
                </a>
              </h3>
              <p className="news__item__info--detail">
                Người ta nói Batman có một giàn phản diện hay nhất trong giới
                truyện tranh cũng như điện ảnh, nhưng mình biết chắc chắn khi
                nghe câu đó người ta chỉ nghĩ đến một người, The Joker - Hoàng
                tử hề của giới tội phạm.
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
                  Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher
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
                  Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng vé'
                  xứ Hàn
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
                  6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình đám
                  nhất Hollywood
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
                  Gái Già Lắm Chiêu V – Những cuộc đời vương giả
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
                      Kaity Nguyễn trở thành mỹ nhân mới của vũ trụ Gái Già Lắm
                      Chiêu
                    </a>
                  </h3>
                  <p className="news__item__info--detail">
                    Sau khi tiết lộ nhân tố đầu tiên là NSND Lê Khanh sẽ tiếp
                    tục tham gia phần tiếp theo của Gái già lắm chiêu với mái
                    tóc được cắt ngắn đầy mạnh mẽ và nam tính. Kaity Nguyễn sẽ
                    là mỹ nhân tiếp theo nối gót hai đàn chị là Diễm My 9X và
                    Ninh Dương Lan Ngọc gia nhập vũ trụ điện ảnh Gái Già Lắm
                    Chiêu.
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
                      5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người Gỗ
                      Pinocchio
                    </a>
                  </h3>
                  <p className="news__item__info--detail">
                    Không chỉ chuyển tải được giá trị của tác phẩm gốc, “Cậu Bé
                    Người Gỗ Pinocchio” của năm 2020 còn thành công chinh phục
                    thế hệ khán giả hiện đại với một trải nghiệm điện ảnh đầy
                    sắc màu nhưng cũng vô cùng mới lạ. Cùng điểm qua 5 lý do
                    khiến bộ phim đặc biệt đến vậy nhé!
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
                      TENET công bố ngày khởi chiếu chính thức tại Việt Nam
                    </a>
                  </h3>
                  <p className="news__item__info--detail">
                    Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra
                    thông báo chính thức về ngày khởi chiếu cho bom tấn TENET
                    tại các thị trường bên ngoài Bắc Mỹ, trong đó có Việt Nam.
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
                      Khi phụ nữ không còn ở thế trốn chạy của nạn nhân
                    </a>
                  </h3>
                  <p className="news__item__info--detail">
                    Là bộ phim tâm lý li kỳ với chủ đề tội phạm, Bằng Chứng Vô
                    Hình mang đến một góc nhìn mới về hình ảnh những người phụ
                    nữ thời hiện đại. Điều đó được thể hiện qua câu chuyện về
                    hai người phụ nữ cùng hợp sức để vạch mặt tên tội phạm có sở
                    thích bệnh hoạn với phụ nữ.
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
                      Gerard Butler cùng bồ cũ Deadpool tham gia Greenland
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
                      Diễn viên đặc biệt của Bằng Chứng Vô Hình
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
                      Pee Nak 2 - Vạn kiếp thiên thu, đi tu không hết nghiệp!
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
                      Loạt phim kinh dị không thể bỏ lỡ trong tháng 7!
                    </a>
                  </h3>
                </div>
              </div>
            </Fragment>
          ) : null}
          <div className="news__btn">
            <Button variant="contained" onClick={handleChangeActive}>
              {active ? "THU GỌN" : "XEM THÊM"}
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
                  Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết
                </a>
              </h3>
              <p className="news__item__info--detail">
                Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám
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
                  Review: Dinh Thự Oan Khuất (Ghost Of War)
                </a>
              </h3>
              <p className="news__item__info--detail">
                Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự Oan
                Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé!
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
                  ‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh
                </a>
              </h3>
              <p className="news__item__info--detail">
                Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019 của đạo
                diễn Spike Lee là một lát cắt nữa về nạn phân biệt chủng tộc -
                nỗi đau gây nhức nhối nước Mỹ cho tới tận hôm nay.
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
                  American Sniper - Chính nghĩa hay phi nghĩa?
                </a>
              </h3>
              <p className="news__item__info--detail">
                American Sniper khắc họa một tay súng bắn tỉa “huyền thoại” của
                Hải quân Mỹ với 4 lần tham chiến ở Trung Đông. Câu chuyện phim
                chậm rãi đưa người xem qua từng thời khắc khác nhau của Kyle, từ
                thửa nhỏ, thiếu niên, rồi gia nhập quân đội, rồi tham chiến.
                Từng khoảnh khắc bắt đầu nhẹ nhàng...
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
                  COVID-19 là bản chính thức của MEV-1 phim contagion (2011)
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
                  [Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống chưa bao giờ
                  lầy lội và hài hước đến thế
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
                  [Review] Bloodshot - Mở màn ấn tượng cho Vũ trụ Siêu anh hùng
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
                      [Review] Nắng 3: Lời Hứa Của Cha - Câu chuyện tình thân
                      cảm động của Khả Như và Kiều Minh Tuấn
                    </a>
                  </h3>
                  <p className="news__item__info--detail">
                    Như hai phần phim trước, Nắng 3 tiếp tục mang đến câu chuyện
                    tình cha, mẹ - con đầy nước mắt của bộ ba nhân vật chính.
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
                      [Review] Onward - Khi phép thuật mạnh mẽ nhất chính là
                      tình thân
                    </a>
                  </h3>
                  <p className="news__item__info--detail">
                    Tác phẩm mới nhất của Pixar tiếp tục là câu chuyện hài hước
                    và cảm xúc về tình cảm gia đình.
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
                      [Review] Kẻ Vô Hình - Còn gì đáng sợ hơn kẻ giết người
                      bệnh hoạn vô hình?
                    </a>
                  </h3>
                  <p className="news__item__info--detail">
                    Phiên bản hiện đại của The Invisible Man là một trong những
                    phim kinh dị xuất sắc nhất năm nay.
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
                      [Review] Cậu Bé Ma 2 - Bạn trai của 'bé Beo' là đây chứ
                      đâu xa
                    </a>
                  </h3>
                  <p className="news__item__info--detail">
                    Brahms: The Boy II có những màn hù dọa ấn tượng nhưng cái
                    kết lại không tương xứng với phần mở đầu hứa hẹn.
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
                      [Review] Nhím Sonic - Cười thả ga cùng chàng nhím siêu
                      thanh lầy lội
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
                      [Review] Tháng Năm Hạnh Phúc Ta Từng Có - Buông bỏ chưa
                      bao giờ là việc dễ dàng
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
                      [Review] Sắc Đẹp Dối Trá - Hương Giang kể chuyện đời mình
                      qua phim ảnh
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
                      [Review] Birds of Prey - Màn lột xác hoành tráng của
                      Harley Quinn và DC
                    </a>
                  </h3>
                </div>
              </div>
            </Fragment>
          ) : null}
          <div className="news__btn">
            <Button variant="contained" onClick={handleChangeActive}>
              {active ? "THU GỌN" : "XEM THÊM"}
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
                  BHD 59K/VÉ CẢ TUẦN !!!
                </a>
              </h3>
              <p className="news__item__info--detail">
                Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá
                59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.
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
                  TIX 1K/VÉ NGẠI CHI GIÁ VÉ
                </a>
              </h3>
              <p className="news__item__info--detail">
                Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02
                voucher thanh toán ZaloPay thả ga
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
                  ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX
                </a>
              </h3>
              <p className="news__item__info--detail">
                ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX Hành trình tìm Ròm và Phúc chỉ
                với 1k cả tuần + nhận thêm 02 voucher khi đặt vé qua TIX.
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
                  BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!
                </a>
              </h3>
              <p className="news__item__info--detail">
                Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá
                59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục
                Vé Phim trên ZaloPay.
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
                  Beta Cineplex trở lại với hàng loạt ưu đãi lớn
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
                  [123Phim] Thứ 6 Không Đen Tối - Ưu đãi huỷ diệt 11k/vé Anh
                  Trai Yêu Quái
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
                  [123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé Pháp Sư
                  Mù: Ai Chết Giơ Tay
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
                  [Mega GS] Một đoá hoa thay ngàn lời yêu
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
                      [123Phim] NHẬP MÃ 'BKT' - Giảm ngay 20k khi đặt vé Bắc Kim
                      Thang
                    </a>
                  </h3>
                  <p className="news__item__info--detail">
                    123Phim đồng hành cùng phim Việt - Giảm ngay 20k mỗi giao
                    dịch khi đặt vé Bắc Kim Thang trên ứng dụng 123Phim.
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
                      Sinh Nhật Mega GS
                    </a>
                  </h3>
                  <p className="news__item__info--detail">
                    Đến hẹn lại lên, vậy là một năm nữa đã trôi qua và chúng ta
                    lại đến tháng 8, tháng sinh nhật của Mega GS Cinemas.
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
                      [123Phim] TixShop trở lại, quà ‘xịn’ hơn xưa
                    </a>
                  </h3>
                  <p className="news__item__info--detail">
                    Nhiều Tix làm gì, để tiêu vào TixShop chứ còn chờ chi.
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
                      [Galaxy Tràng Thi] Xem Phim Hay, Say Quà Tặng
                    </a>
                  </h3>
                  <p className="news__item__info--detail">
                    Nhân dịp khai trương Galaxy Tràng Thi, Galaxy Cinema dành
                    tặng các Stars Hà Nội loạt phần quà siêu hấp dẫn.
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
                      Mua 2 Vé Cinestar Qua ZaloPay Chỉ 1.000đ/vé
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
                      [123Phim] Bạn Là Fan Cứng Marvel?
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
                      [Galaxy Tràng Thi] Trải Nghiệm Bom Tấn Càng Đông Càng Vui
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
                      Mua Vé BHD Star Trên 123Phim Bằng ZaloPay: 1.000đ/vé
                    </a>
                  </h3>
                </div>
              </div>
            </Fragment>
          ) : null}
          <div className="news__btn">
            <Button variant="contained" onClick={handleChangeActive}>
              {active ? "THU GỌN" : "XEM THÊM"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
