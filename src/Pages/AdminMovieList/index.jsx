import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminMovieTable from "../../Components/AdminMovieTable";
import {
  modalMovieRequest,
  updateSearchTerm,
} from "../../redux/action/movieAdminAction/actions";
import { getFirstLetter } from "../../Helper/Function/chartCodeAt";
import { xoaDau } from "../../Helper/Function/xoaDau";
import { iconPlus, iconReset } from "../../Helper/IconSVG/iconAdmin";
import { Button } from "@material-ui/core";
import { getMovieListRequest } from "../../redux/action/movieListAction/action";
import { GET_SHOWING_LIST } from "../../redux/action/movieListAction/actionTypes";

const AdminMovieList = () => {
  const dispatch = useDispatch();

  const { searchTerm } = useSelector((state) => state.movieAdminReducer);
  const { showingList } = useSelector((state) => state.movieListReducer);
  const { isLight } = useSelector((state) => state.themeReducer);

  const [list, setList] = useState([]);
  const [searchList, setSearchList] = useState([]);

  // SORT METHOD
  const [sort, setSort] = useState(null);

  const sortMovie = (method) => {
    const newArr = [...list];
    if (method === "asc") {
      newArr.sort(
        (a, b) => getFirstLetter(a.tenPhim) - getFirstLetter(b.tenPhim)
      );
    } else {
      newArr.sort(
        (a, b) => getFirstLetter(b.tenPhim) - getFirstLetter(a.tenPhim)
      );
    }
    handleSearchList(newArr);
  };

  const sortDanhGia = (method) => {
    const newArr = [...list];

    if (method === "asc") {
      newArr.sort((a, b) => +a.danhGia - +b.danhGia);
    } else {
      newArr.sort((a, b) => +b.danhGia - +a.danhGia);
    }
    handleSearchList(newArr);
  };

  const sortMota = (method) => {
    const newArr = [...list];
    if (method === "asc") {
      newArr.sort(
        (a, b) =>
          getFirstLetter(a.moTa.split("")[0]) -
          getFirstLetter(b.moTa.split("")[0])
      );
    } else {
      newArr.sort(
        (a, b) =>
          getFirstLetter(b.moTa.split("")[0]) -
          getFirstLetter(a.moTa.split("")[0])
      );
    }
    handleSearchList(newArr);
  };

  const sortNgay = (method) => {
    const newArr = [...list];
    if (method === "asc") {
      newArr.sort(
        (a, b) =>
          new Date(a.ngayKhoiChieu).getTime() -
          new Date(b.ngayKhoiChieu).getTime()
      );
    } else {
      newArr.sort(
        (a, b) =>
          new Date(b.ngayKhoiChieu).getTime() -
          new Date(a.ngayKhoiChieu).getTime()
      );
    }
    handleSearchList(newArr);
  };

  const handleSearchList = (array) => {
    const newArray = [...array];
    setSearchList(
      newArray.filter(
        (item) =>
          xoaDau(item.tenPhim).toLowerCase().indexOf(searchTerm.toLowerCase()) >
          -1
      )
    );
  };

  // SORT METHOD

  useEffect(() => {
    dispatch(getMovieListRequest("GP09", GET_SHOWING_LIST));
  }, [dispatch]);

  useEffect(() => {
    setList(showingList);
  }, [showingList]);

  useEffect(() => {
    if (sort) {
      const { name, method } = sort;
      switch (name) {
        case "danhGia":
          sortDanhGia(method);
          break;
        case "moTa":
          sortMota(method);
          break;
        case "ngay":
          sortNgay(method);
          break;
        default:
          sortMovie(method);
      }
    } else {
      handleSearchList(list);
    }
  }, [searchTerm, list, sort]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleAddFilm = async (data) => {
    await dispatch(modalMovieRequest({ statusModal: true }));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <input
          value={searchTerm}
          onChange={(e) => dispatch(updateSearchTerm(e.target.value))}
          type="text"
          className={`p-3 rounded shadow-sm md:w-56 focus:outline-none ${
            isLight ? "bg-white" : "bg-gray-800"
          }`}
          placeholder="Search movie"
        />
        <Button
          onClick={() => setSort(null)}
          style={
            sort
              ? {
                  background: "#27ae60",
                  color: "#fff",
                }
              : {
                  background: "#ccc",
                  color: "#fff",
                }
          }
          disabled={sort ? false : true}
        >
          {iconReset}
          Reset sort
        </Button>
        <Button
          onClick={() => handleAddFilm()}
          style={{
            background: "#007be8",
            color: "#fff",
          }}
        >
          {iconPlus}
          Thêm phim
        </Button>
      </div>
      <div className={`${isLight ? "bg-white" : "bg-gray-800"} shadow-sm`}>
        <AdminMovieTable
          searchList={searchList}
          sort={sort}
          setSort={setSort}
        />
      </div>
    </div>
  );
};

export default AdminMovieList;
