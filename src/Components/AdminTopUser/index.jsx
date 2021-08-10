import React, { useState } from "react";
import { useSelector } from "react-redux";
import { formatNumber } from "../../Helper/Function/formatNumber";
import Pagination from "../Pagination";

const AdminTopUser = () => {
  const { listInfo } = useSelector((state) => state.adminReducer);
  const { isLight } = useSelector((state) => state.themeReducer);

  const [page, setPage] = useState(1);

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

  //Thêm key id
  const newListInfo = sortDecreaseListInfo.map((item, index) => ({
    ...item,
    id: index + 1,
  }));

  const indexOfLastPost = page * 5;
  const indexOfFirstPost = indexOfLastPost - 5;
  const currentPost = newListInfo.slice(indexOfFirstPost, indexOfLastPost);

  //Render 10 người dùng mua vé nhiều nhất
  const renderUserLoyal = () => {
    return currentPost.map((item, index) => (
      <tr
        key={index}
        className={`${
          isLight
            ? "hover:bg-gray-50 border-solid"
            : "hover:bg-gray-700 border-gray-700"
        } border-b`}
      >
        <td className="p-2">{item.id}</td>
        <td>{item.taiKhoan === "" ? "Không xác định" : item.taiKhoan}</td>
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
    <div
      className={`${
        isLight ? "bg-white" : "bg-gray-800 text-white"
      } col-span-3 row-start-3 row-end-5 p-3 shadow-md rounded-md transition`}
    >
      <p className="mb-2 text-lg font-bold">Top 10 khách hàng </p>
      <table className="w-100">
        <thead className={`${isLight ? "bg-gray-100" : "bg-gray-900"}`}>
          <tr>
            <th className="p-2">Top</th>
            <th>Tài khoản</th>
            <th>Tổng vé</th>
            <th>Tổng tiền</th>
          </tr>
        </thead>
        <tbody>{renderUserLoyal()}</tbody>
      </table>
      <div className="mt-3">
        <Pagination
          page={page}
          quantity={5}
          totalCount={sortDecreaseListInfo.length}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default AdminTopUser;
