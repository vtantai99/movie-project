import React from "react";
import "./showTime.scss";
const Showtimes = () => {
  return (
    <div className="showTime">
      <ul className="nav nav-tabs navCenter">
        <li className="nav-item">
          <a className="nav-link active" data-toggle="tab" href="#dangChieu">
            Đang Chiếu
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#sapChieu">
            Sắp Chiếu
          </a>
        </li>
      </ul>
      {/* <!-- Tab panes --> */}
      <div className="tab-content">
        <div className="tab-pane container active dang__chieu" id="dangChieu">
          Dang Chieu
        </div>
        <div className="tab-pane container fade" id="sapChieu">
          Sap Chieu
        </div>
      </div>
    </div>
  );
};

export default Showtimes;
