import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import format from "date-format";
import Pagination from "../Pagination";
import { nameSeat } from "../../Helper/Function/nameSeat";
import ModalInfo from "../ModalInfo";

const InfoTable = () => {
  const { info } = useSelector((state) => state.userReducer);

  //sap xep thu tu ngay dat ve gan nhat
  info.thongTinDatVe.sort(
    (a, b) => new Date(b.ngayDat).getTime() - new Date(a.ngayDat).getTime()
  );
  const [page, setPage] = useState(1);
  const [postPerPage, setIPostPerPage] = useState(5);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});

  // Lấy số lượng item trên mỗi page
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = info.thongTinDatVe.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  // Thay đổi page
  const handleChangePage = (number) => {
    setPage(number);
  };
  const handleOnModal = (value) => {
    setModalData(value);
    setShowModal(true);
  };
  const handleOffModal = () => {
    setShowModal(false);
  };
  const renderListTicket = () => {
    return currentPost.map((item, index) => {
      return (
        <tr
          key={index}
          onClick={() => handleOnModal(item)}
          className="group text-opacity-100 cursor-pointer relative hover:bg-blue-400
          hover:text-white transition"
        >
          <td>{item.maVe}</td>
          <td>{item.tenPhim}</td>
          <td>{format("hh:mm:ss - dd/MM/yyyy", new Date(item.ngayDat))}</td>
          <td>
            {item.danhSachGhe.map((item, index) =>
              index === 0 ? nameSeat(item.tenGhe) : `, ${nameSeat(item.tenGhe)}`
            )}
          </td>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white absolute opacity-0 font-bold transform right-4 top-2/4  -translate-y-2/4 
            group-hover:opacity-100 transition"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
            />
          </svg>
        </tr>
      );
    });
  };
  return (
    <Fragment>
      <div className="card info__history">
        <p className="info__history__title">LỊCH SỬ ĐẶT VÉ</p>
        <div className="info__history__table">
          {info.thongTinDatVe.length ? (
            <table>
              <thead>
                <tr>
                  <th>Mã vé</th>
                  <th>Tên phim</th>
                  <th>Thời gian đặt vé</th>
                  <th>Ghế</th>
                </tr>
              </thead>
              <tbody>{renderListTicket()}</tbody>
            </table>
          ) : (
            <p>Hiện tại bạn chưa đặt vé.</p>
          )}
          <ModalInfo
            modalData={modalData}
            showModal={showModal}
            handleOffModal={handleOffModal}
          />
          <Pagination
            page={page}
            postPerPage={postPerPage}
            totalPost={info.thongTinDatVe.length}
            handleChangePage={handleChangePage}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default InfoTable;
