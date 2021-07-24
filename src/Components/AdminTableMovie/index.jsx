import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteMovie,
  selectMovie,
} from "../../redux/action/movieAction/actions";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";

const AdminMovieTable = ({ list }) => {
  const userReducer = useSelector((state) => state.userReducer);
  const { user } = userReducer;

  const themeReducer = useSelector((state) => state.themeReducer);
  const { isLight } = themeReducer;

  const dispatch = useDispatch();

  const onDeleteMovie = (maPhim) => {
    swal({
      title: "Ban co chac muon xoa phim nay?",
      icon: "info",
      buttons: {
        cancel: "Cancel",
        confirm: "Ok",
      },
    }).then(() => {
      dispatch(deleteMovie(maPhim, user));
    });
  };

  return (
    <table
      className={`min-w-full divide-y relative ${
        isLight ? "divide-gray-100" : "divide-gray-700"
      }`}
    >
      <thead
        className={`sticky top-0 ${isLight ? "bg-gray-200" : "bg-gray-700"}`}
      >
        <tr>
          <th
            scope="col"
            className=" px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
          >
            Tên phim
          </th>

          <th
            scope="col"
            className=" px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
          >
            Mã nhóm
          </th>
          <th
            scope="col"
            className=" px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
          >
            Đánh giá
          </th>
          <th
            scope="col"
            className=" px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
          >
            Ngày khởi chiếu
          </th>

          <th scope="col" className=" px-6 py-3">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody
        className={`divide-y  ${
          isLight ? "bg-white divide-gray-100" : "bg-gray-800 divide-gray-700"
        }`}
      >
        {list?.map((item, idx) => (
          <tr
            className={`${isLight ? "hover:bg-gray-50" : "hover:bg-gray-700"}`}
            key={idx}
          >
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm">{item.tenPhim}</div>
            </td>

            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm">{item.maNhom}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm">{item.danhGia}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm">{item.ngayKhoiChieu}</div>
            </td>

            <td className="px-6 py-4 text-sm font-medium">
              <div className="flex flex-row justify-end items-center">
                <NavLink
                  onClick={() => dispatch(selectMovie(item))}
                  to="/admin/addMovie"
                  className=""
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </NavLink>
                <button
                  onClick={() => onDeleteMovie(item.maPhim)}
                  className="ml-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdminMovieTable;
