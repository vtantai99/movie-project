import React, { useState } from "react";
import { useSelector } from "react-redux";
import format from "date-format";
import { formatNumber } from "../../Helper/Function/formatNumber";
import Pagination from "../Pagination";
import ModalTicket from "../ModalTicket";

const AdminHistory = () => {
  const { listInfo } = useSelector((state) => state.adminReducer);
  const { isLight } = useSelector((state) => state.themeReducer);

  // filter theo ngay mua ve, chi hien thi nguoi dung mua ve ngay hien tai
  const newListInfo = [];
  for (let user of listInfo) {
    let taiKhoan = user.taiKhoan;
    for (let item of user.thongTinDatVe) {
      if (
        new Date(item.ngayDat).getDate() === new Date().getDate() &&
        new Date(item.ngayDat).getMonth() === new Date().getMonth()
      ) {
        newListInfo.push({ ...item, taiKhoan });
      }
    }
  }

  newListInfo.sort(
    (a, b) => new Date(b.ngayDat).getTime() - new Date(a.ngayDat).getTime()
  );

  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleOnModal = (value) => {
    setModalData(value);
    setShowModal(true);
  };
  const handleOffModal = () => {
    setShowModal(false);
  };

  const indexOfLastPost = page * 5;
  const indexOfFirstPost = indexOfLastPost - 5;
  const currentPost = newListInfo.slice(indexOfFirstPost, indexOfLastPost);

  const renderTicketToday = () => {
    return currentPost.map((item, index) => (
      <>
        <tr
          key={index}
          onClick={() => handleOnModal(item)}
          className={`${
            isLight
              ? "hover:bg-gray-50 border-solid"
              : "hover:bg-gray-700 border-gray-700"
          } border-b group text-opacity-100 cursor-pointer relative
         border-b border-solid transition`}
        >
          <td className="p-2">{item.maVe}</td>
          <td>{item.taiKhoan}</td>
          <td>{formatNumber(item.giaVe * item.danhSachGhe.length)}</td>
          <td>{format("hh:mm:ss", new Date(item.ngayDat))}</td>
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
      </>
    ));
  };

  return (
    <div
      className={`${
        isLight ? "bg-white" : "bg-gray-800 text-white"
      } col-start-4 col-end-9 row-start-3 row-end-5 p-3 shadow-md rounded-md transition`}
    >
      <p className="mb-2 text-lg font-bold">Giao dịch hôm nay</p>
      {newListInfo.length ? (
        <table className="w-100">
          <thead className={`${isLight ? "bg-gray-100" : "bg-gray-900"}`}>
            <tr>
              <th className="p-2">Mã vé</th>
              <th>Tài khoản</th>
              <th>Tổng tiền</th>
              <th>Thời gian</th>
            </tr>
          </thead>
          <tbody>{renderTicketToday()}</tbody>
        </table>
      ) : (
        <p>
          Chưa bán được vé nào
          <i className="far fa-sad-tear ml-2"></i>
        </p>
      )}
      <ModalTicket
        modalData={modalData}
        showModal={showModal}
        handleOffModal={handleOffModal}
      />
      <Pagination
        page={page}
        quantity={5}
        totalCount={newListInfo.length}
        setPage={setPage}
      />
    </div>
  );
};

export default AdminHistory;
