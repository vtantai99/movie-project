import React, { useState, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  iconSwitch,
  iconDown,
  iconUp,
  iconDelete,
  iconUpdate,
} from "../../Helper/IconSVG/iconAdmin";
import { Tooltip } from "@material-ui/core";
import { convertToPassWord } from "../../Helper/Function/convertPass";
import {
  deleteUser,
  changeModalUser,
} from "../../redux/action/userAction/actions";
import swal from "sweetalert";
import Pagination from "../Pagination";
import QuantityTable from "../QuantityTable";

const AdminUserTable = ({ sort, setSort, searchList, searchTerm }) => {
  const dispatch = useDispatch();
  const { isLight } = useSelector((state) => state.themeReducer);
  const { user } = useSelector((state) => state.userReducer);

  const [page, setPage] = useState(1);
  const [quantity, setQuantity] = useState(5);

  const indexOfLastPost = page * quantity;
  const indexOfFirstPost = indexOfLastPost - quantity;
  const currentPost = searchList.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    setPage(1);
  }, [searchTerm, quantity]);

  const handleUpdate = async (user) => {
    await dispatch(changeModalUser({ statusModal: true, infoUser: user }));
  };

  const handleDeleteUser = (taiKhoan) => {
    swal({
      title: "Bạn có thực sự muốn xoá người dùng này ?",
      icon: "info",
      buttons: {
        cancel: "Huỷ bỏ",
        confirm: "Đồng ý",
      },
    }).then((confirm) => {
      confirm && dispatch(deleteUser(user, taiKhoan));
    });
  };

  const handleSortTypeUser = () => {
    setPage(1);
    setSort({
      name: "maLoaiNguoiDung",
      method: sort?.method === "asc" ? "dsc" : "asc",
    });
  };

  const renderListInfo = () => {
    return searchList.length > 0
      ? currentPost.map((item, index) => (
          <tr
            key={index}
            className={`${
              isLight
                ? "hover:bg-gray-50 border-solid"
                : "hover:bg-gray-700 border-gray-700"
            } border-b`}
          >
            <td
              className={`${
                searchTerm && "bg-gray-400"
              } px-6 py-4 text-left text-sm`}
            >
              {item.taiKhoan}
            </td>
            <td className={`text-left text-sm`}>{item.hoTen}</td>
            <td className="text-left text-sm">{item.email}</td>
            <td className="text-left text-sm">{item.soDt}</td>
            <td className="text-left text-sm">
              {convertToPassWord(item.matKhau)}
            </td>
            <td className="text-left text-sm">{item.maLoaiNguoiDung}</td>
            <td>
              <Tooltip title="Cập nhật" placement="top-center">
                <button
                  className="mr-2 text-green-500"
                  onClick={() => {
                    handleUpdate(item);
                  }}
                >
                  {iconUpdate}
                </button>
              </Tooltip>
              <Tooltip title="Xoá người dùng" placement="top-center">
                <button
                  className="text-red-500"
                  onClick={() => {
                    handleDeleteUser(item.taiKhoan);
                  }}
                >
                  {iconDelete}
                </button>
              </Tooltip>
            </td>
          </tr>
        ))
      : "Tài khoản không đúng";
  };

  return (
    <Fragment>
      <table className="w-full">
        <thead className={`${isLight ? "bg-gray-200" : "bg-gray-700"}`}>
          <tr>
            <th
              className={`
          ${
            sort?.name === "taiKhoan" &&
            "hover:bg-gray-600 bg-gray-600 text-white"
          }
          px-6 py-3 text-left text-sm cursor-pointer hover:bg-gray-500 hover:text-white transition`}
              onClick={() =>
                setSort({
                  name: "taiKhoan",
                  method: sort?.method === "dsc" ? "asc" : "dsc",
                })
              }
            >
              <div className="flex">
                <span className="mr-2">Tài khoản</span>
                {sort?.name === "taiKhoan" ? (
                  <span>{sort?.method === "asc" ? iconDown : iconUp}</span>
                ) : (
                  iconSwitch
                )}
              </div>
            </th>
            <th
              className={`
               ${
                 sort?.name === "hoTen" &&
                 "bg-gray-600 text-white hover:bg-gray-600"
               }
               px-6 py-3 text-left text-sm cursor-pointer hover:bg-gray-500 hover:text-white transition`}
              onClick={() =>
                setSort({
                  name: "hoTen",
                  method: sort?.method === "asc" ? "dsc" : "asc",
                })
              }
            >
              <div className="flex">
                <span className="mr-2">Họ tên</span>
                {sort?.name === "hoTen" ? (
                  <span>{sort?.method === "asc" ? iconDown : iconUp}</span>
                ) : (
                  iconSwitch
                )}
              </div>
            </th>
            <th
              className={`
          ${
            sort?.name === "email" && "bg-gray-600 text-white hover:bg-gray-600"
          }
          px-6 py-3 text-left text-sm cursor-pointer hover:bg-gray-500 hover:text-white transition`}
              onClick={() =>
                setSort({
                  name: "email",
                  method: sort?.method === "asc" ? "dsc" : "asc",
                })
              }
            >
              <div className="flex">
                <span className="mr-2">Email</span>
                {sort?.name === "email" ? (
                  <span>{sort?.method === "asc" ? iconDown : iconUp}</span>
                ) : (
                  iconSwitch
                )}
              </div>
            </th>
            <th className="text-left text-sm">Sđt</th>
            <th className="text-left text-sm">Mật khẩu</th>
            <th
              className={`
              ${
                sort?.name === "maLoaiNguoiDung" &&
                "bg-gray-600 text-white hover:bg-gray-600"
              }
              px-6 py-3 text-left text-sm cursor-pointer hover:bg-gray-500 hover:text-white transition`}
              onClick={() => handleSortTypeUser()}
            >
              <div className="flex">
                <span className="mr-2">Thành viên</span>
                {sort?.name === "maLoaiNguoiDung" ? (
                  <span>{sort?.method === "asc" ? iconDown : iconUp}</span>
                ) : (
                  iconSwitch
                )}
              </div>
            </th>
            <th className="text-left text-sm">Chi tiết</th>
          </tr>
        </thead>
        <tbody>{renderListInfo()}</tbody>
      </table>
      <div className="flex justify-between items-center p-4">
        <QuantityTable
          totalCount={searchList.length}
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <Pagination
          page={page}
          setPage={setPage}
          totalCount={searchList.length}
          quantity={quantity}
        />
      </div>
    </Fragment>
  );
};

export default AdminUserTable;
