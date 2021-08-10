import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteMovie,
  modalMovieRequest,
} from "../../redux/action/movieAdminAction/actions";
import { Tooltip } from "@material-ui/core";
import swal from "sweetalert";
import format from "date-format";
import {
  iconUp,
  iconDown,
  iconSwitch,
  iconDelete,
  iconUpdate,
} from "../../Helper/IconSVG/iconAdmin";
import { getMovieTrailer } from "../../redux/action/movieDetailAction/actions";
import AdminMovieModal from "../AdminMovieModal";
import { Fragment } from "react";
import QuantityTable from "../QuantityTable";
import Pagination from "../Pagination";
import { useEffect } from "react";

const AdminMovieTable = ({ searchList, sort, setSort }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userReducer);
  const { isLight } = useSelector((state) => state.themeReducer);
  const { searchTerm } = useSelector((state) => state.movieAdminReducer);

  const [page, setPage] = useState(1);
  const [quantity, setQuantity] = useState(5);

  const indexOfLastPost = page * quantity;
  const indexOfFirstPost = indexOfLastPost - quantity;
  const currentPost = searchList.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    searchTerm && setPage(1);
  }, [searchTerm]);

  const handleUpdateFilm = async (data) => {
    await dispatch(modalMovieRequest({ statusModal: true, infoMovie: data }));
  };

  const onDeleteMovie = (maPhim) => {
    console.log(maPhim);
    swal({
      title: "Bạn có thực sự muốn xoá phim này?",
      icon: "info",
      buttons: {
        cancel: "Huỷ bỏ",
        confirm: "Đồng ý",
      },
    }).then(async (res) => {
      res && (await dispatch(deleteMovie(maPhim, user)));
    });
  };

  return (
    <Fragment>
      <table className="w-full">
        <thead
          className={`sticky top-0 ${isLight ? "bg-gray-200" : "bg-gray-700"}`}
        >
          <tr>
            <th
              onClick={() =>
                setSort({
                  name: "ten",
                  method: sort?.method === "asc" ? "desc" : "asc",
                })
              }
              className={`
            ${
              sort?.name === "ten" && "hover:bg-gray-600 bg-gray-600 text-white"
            }
            px-6 py-3 text-left text-sm cursor-pointer hover:bg-gray-500 hover:text-white transition`}
            >
              <div className="flex items-center">
                <span className="mr-2">Tên phim</span>
                {sort?.name === "ten" ? (
                  <span>{sort?.method === "asc" ? iconDown : iconUp}</span>
                ) : (
                  iconSwitch
                )}
              </div>
            </th>
            <th className={`px-6 py-3 text-left text-sm`}>
              <div className="flex items-center">
                <span>Hình ảnh</span>
              </div>
            </th>
            <th className={`px-6 py-3 text-left text-sm`}>
              <div className="flex items-center">
                <span>Trailer</span>
              </div>
            </th>
            <th
              onClick={() =>
                setSort({
                  name: "danhGia",
                  method: sort?.method === "asc" ? "desc" : "asc",
                })
              }
              className={`
            ${
              sort?.name === "danhGia" &&
              "hover:bg-gray-600 bg-gray-600 text-white"
            }
            px-6 py-3 text-left text-sm cursor-pointer hover:bg-gray-500 hover:text-white transition`}
            >
              <div className="flex items-center">
                <span>Đánh giá</span>
                {sort?.name === "danhGia" ? (
                  <span>{sort?.method === "asc" ? iconDown : iconUp}</span>
                ) : (
                  iconSwitch
                )}
              </div>
            </th>
            <th
              onClick={() =>
                setSort({
                  name: "moTa",
                  method: sort?.method === "asc" ? "desc" : "asc",
                })
              }
              className={`
            ${
              sort?.name === "moTa" &&
              "hover:bg-gray-600 bg-gray-600 text-white"
            }
            px-6 py-3 text-left text-sm cursor-pointer hover:bg-gray-500 hover:text-white transition`}
            >
              <div className="flex items-center">
                <span>Mô tả</span>
                {sort?.name === "moTa" ? (
                  <span>{sort?.method === "asc" ? iconDown : iconUp}</span>
                ) : (
                  iconSwitch
                )}
              </div>
            </th>
            <th
              onClick={() =>
                setSort({
                  name: "ngay",
                  method: sort?.method === "asc" ? "desc" : "asc",
                })
              }
              className={`
            ${
              sort?.name === "ngay" &&
              "hover:bg-gray-600 bg-gray-600 text-white"
            }
            px-6 py-3 text-left text-sm cursor-pointer hover:bg-gray-500 hover:text-white transition`}
            >
              <div className="flex items-center">
                <span>Ngày khởi chiếu</span>
                {sort?.name === "ngay" ? (
                  <span>{sort?.method === "asc" ? iconDown : iconUp}</span>
                ) : (
                  iconSwitch
                )}
              </div>
            </th>
            <th className="px-6 py-3 text-left text-sm">Chi tiết</th>
          </tr>
        </thead>
        <tbody>
          {currentPost?.map((item, index) => (
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
                } px-6 py-3 text-left text-sm`}
                // className="px-6 py-3 text-left text-sm"
              >
                {item.tenPhim}
              </td>
              <td className="px-6 py-3 text-left text-sm">
                <img
                  className="w-20 h-20 rounded-sm object-cover"
                  src={item.hinhAnh}
                  alt="imageFilm"
                />
              </td>
              <td className="px-6 py-3 text-left text-sm">
                <i
                  onClick={() => dispatch(getMovieTrailer(item.trailer))}
                  className="fab fa-youtube text-5xl text-red-500 cursor-pointer transition"
                />
              </td>
              <td className="px-6 py-3 text-left text-sm">{item.danhGia}</td>
              <td
                className="px-6 py-3  text-left text-sm max-w-xs overflow-hidden
            whitespace-nowrap overflow-ellipsis"
              >
                {item.moTa}
              </td>
              <td className="px-6 py-3  text-left text-sm">
                {format("dd/MM/yyyy", new Date(item.ngayKhoiChieu))}
              </td>
              <td className="px-6 py-3 text-left text-sm">
                <div className="flex items-center">
                  <Tooltip title="Cập nhật" placement="top-center">
                    <button
                      onClick={() => handleUpdateFilm(item)}
                      className="mr-2 text-green-500"
                    >
                      {iconUpdate}
                    </button>
                  </Tooltip>
                  <Tooltip title="Xoá phim" placement="top-center">
                    <button
                      onClick={() => onDeleteMovie(item.maPhim)}
                      className="text-red-500"
                    >
                      {iconDelete}
                    </button>
                  </Tooltip>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
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
      <AdminMovieModal />
    </Fragment>
  );
};

export default AdminMovieTable;
