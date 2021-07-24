import React, { useState } from "react";
import { useSelector } from "react-redux";
import { formatNumber } from "../../Helper/Function/formatNumber";
import Pagination from "../Pagination";
const AdminUserLoyal = () => {
  const { listInfo } = useSelector((state) => state.adminReducer);
  const [page, setPage] = useState(1);
  const [postPerPage, setIPostPerPage] = useState(5);
  // Thay đổi page
  const handleChangePage = (number) => {
    setPage(number);
  };

  //   Sort mảng listInfo giảm dần theo số tiền mua vé
  const sortDecreaseListInfo = listInfo
    .sort(
      (a, b) =>
        b.thongTinDatVe.reduce(
          (sum, item) => (sum += item.giaVe * item.danhSachGhe.length),
          0
        ) -
        a.thongTinDatVe.reduce(
          (sum, item) => (sum += item.giaVe * item.danhSachGhe.length),
          0
        )
    )
    .slice(0, 10);
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = sortDecreaseListInfo.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  //Render 10 người dùng mua vé nhiều nhất
  const renderUserLoyal = () => {
    return currentPost.map((item, index) => (
      <tr key={index}>
        <td className="p-1">
          {item.taiKhoan === "" ? "Không xác định" : item.taiKhoan}
        </td>
        <td>
          {item.thongTinDatVe.reduce(
            (sum, item) => (sum += item.danhSachGhe.length),
            0
          )}
        </td>
        <td>
          {formatNumber(
            item.thongTinDatVe.reduce(
              (sum, item) => (sum += item.giaVe * item.danhSachGhe.length),
              0
            )
          )}
        </td>
      </tr>
    ));
  };
  return (
    <div className="col-span-3 row-start-3 row-end-5 bg-white p-4 shadow-md rounded-md">
      <p className="mb-2 text-blue-500 text-lg font-bold">Top 10 khách hàng </p>
      <table className="w-100">
        <thead className="text-black bg-gray-100">
          <tr>
            <th>Tài khoản</th>
            <th>Tổng vé</th>
            <th>Tổng tiền</th>
          </tr>
        </thead>
        <tbody>{renderUserLoyal()}</tbody>
      </table>
      <Pagination
        page={page}
        postPerPage={postPerPage}
        totalPost={sortDecreaseListInfo.length}
        handleChangePage={handleChangePage}
      />
    </div>
  );
};

export default AdminUserLoyal;
