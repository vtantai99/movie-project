import React from "react";
import { useSelector } from "react-redux";
import DetailMainInfo from "../DetailMainInfo";
import DetailMainShowTime from "../DetailMainShowTime";
import DetailMainComment from "../DetailMainComment";
const DetailMain = () => {
  const movieDetailReducer = useSelector((state) => state.movieDetailReducer);
  const { movieDetail } = movieDetailReducer;
  return (
    <div className="detailMain">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" data-toggle="tab" href="#showTimes">
            Lịch chiếu
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link review" data-toggle="tab" href="#info">
            Thông tin
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link promotion" data-toggle="tab" href="#comment">
            Đánh giá
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane active" id="showTimes">
          <DetailMainShowTime />
        </div>
        <div className="tab-pane fade" id="info">
          <DetailMainInfo movieDetail={movieDetail} />
        </div>
        <div className="tab-pane fade" id="comment">
          <DetailMainComment />
        </div>
      </div>
    </div>
  );
};

export default DetailMain;
