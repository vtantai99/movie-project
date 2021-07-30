import { BeachAccessTwoTone } from "@material-ui/icons";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import AdminSearchMovie from "../../Components/AdminSearchMovie";

import AdminMovieTable from "../../Components/AdminTableMovie";
import "./index.scss";

const AdminMovieList = () => {
  const { searchTerm } = useSelector((state) => state.movieReducer);

  const { showingList } = useSelector((state) => state.movieListReducer);

  const themeReducer = useSelector((state) => state.themeReducer);

  const { isLight } = themeReducer;

  const [list, setList] = useState([]);

  const [searchedList, setSearchedList] = useState([]);

  const [tableList, setTableList] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [length, setLength] = useState(30);

  const [numOfPag, setNumOfPage] = useState(1);

  // SORT METHOD
  const [sortMethod, setSortMethod] = useState(null);

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
    setSearchedList(
      newArr.filter(
        (el) => el.tenPhim.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1
      )
    );
  };

  const sortDanhGia = (method) => {
    const newArr = [...list];

    if (method === "asc") {
      newArr.sort((a, b) => +a.danhGia - +b.danhGia);
    } else {
      newArr.sort((a, b) => +b.danhGia - +a.danhGia);
    }
    setSearchedList(
      newArr.filter(
        (el) => el.tenPhim.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1
      )
    );
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
    setSearchedList(
      newArr.filter(
        (el) => el.tenPhim.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1
      )
    );
  };

  const getTime = (date) => {
    const time = new Date(date);
    return time.getTime();
  };

  const sortNgay = (method) => {
    const newArr = [...list];
    if (method === "asc") {
      newArr.sort(
        (a, b) => getTime(a.ngayKhoiChieu) - getTime(b.ngayKhoiChieu)
      );
    } else {
      newArr.sort(
        (a, b) => getTime(b.ngayKhoiChieu) - getTime(a.ngayKhoiChieu)
      );
    }
    setSearchedList(
      newArr.filter(
        (el) => el.tenPhim.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1
      )
    );
  };

  const getFirstLetter = (string) => {
    return string.toLowerCase().charCodeAt(0);
  };

  // SORT METHOD

  useEffect(() => {
    setList(showingList);
  }, [showingList]);

  useEffect(() => {
    if (searchedList.length > length) {
      setNumOfPage(Math.ceil(searchedList.length / length));
    } else {
      setNumOfPage(1);
    }
  }, [length, searchedList]);

  useEffect(() => {
    setCurrentPage(1);
  }, [length, searchedList]);

  useEffect(() => {
    if (currentPage === 1) {
      setTableList([...searchedList].slice(0, length));
    } else if (currentPage === numOfPag) {
      const start = length * (currentPage - 1);
      setTableList([...searchedList].slice(start));
    } else {
      const start = length * (currentPage - 1);
      const end = start + length;
      setTableList([...searchedList].slice(start, end));
    }
  }, [searchedList, currentPage, length]);

  useEffect(() => {
    if (sortMethod) {
      const { name, method } = sortMethod;
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
      setSearchedList(
        [...list].filter(
          (el) =>
            el.tenPhim.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1
        )
      );
    }
  }, [searchTerm, list, sortMethod]);

  const renderPag = () => {
    const pagArr = [];
    for (let i = 1; i <= numOfPag; i++) {
      pagArr.push(i);
    }
    const handlePrev = () => {
      if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
    const handleNext = () => {
      if (currentPage < numOfPag) setCurrentPage(currentPage + 1);
    };

    return (
      <div className="flex font-medium flex-row justify-center items-center">
        <div
          onClick={handlePrev}
          className={`cursor-pointer hover:bg-gray-${
            isLight ? "100" : "700"
          } border-t border-b border-l rounded-l border-solid px-2 py-2 border-gray-${
            isLight ? "300" : "600"
          }`}
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
        {pagArr.map((el) => (
          <span
            onClick={() => setCurrentPage(el)}
            className={`${
              el === currentPage
                ? "bg-blue-500 text-white border-blue-500"
                : `hover:bg-gray-${isLight ? "100" : "700"}`
            } border-t border-b cursor-pointer border-r ${
              el === 1 && "border-l"
            } border-solid px-3 py-2 border-gray-${isLight ? "300" : "600"}`}
            key={el}
          >
            {el}
          </span>
        ))}
        <div
          onClick={handleNext}
          className={`cursor-pointer hover:bg-gray-${
            isLight ? "100" : "700"
          } border-t border-b border-r rounded-r border-solid px-2 py-2 border-gray-${
            isLight ? "300" : "600"
          }`}
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    );
  };

  const renderTable = () => {
    return (
      <div className="flex flex-col mt-3">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow-sm table-wrapper overflow-auto relative">
              <AdminMovieTable
                list={tableList}
                sortMethod={sortMethod}
                setSortMethod={setSortMethod}
              />
              <div
                className={`${
                  isLight ? "bg-white" : "bg-gray-800"
                } text-sm font-bold p-4 flex sticky bottom-0 flex-row justify-between items-center border-t border-solid border-gray-200`}
              >
                <div className="flex flex-row justify-start items-center">
                  <p>Show</p>
                  <select
                    value={length}
                    onChange={(e) => setLength(+e.target.value)}
                    className={`mx-3 focus:outline-none focus:ring-2 text-gray-700`}
                  >
                    <option value="30">30</option>
                    <option value="20">20</option>
                    <option value="10">10</option>
                  </select>
                  <p>of {list.length}</p>
                </div>
                {numOfPag > 0 && renderPag()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h3 className="text-2xl uppercase">Movie list</h3>
      <div className="flex mt-5 flex-row justify-start items-center">
        <AdminSearchMovie />
        <svg
          onClick={() => setSortMethod(null)}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-2 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      </div>
      {showingList?.length > 0 && renderTable()}
    </div>
  );
};

export default AdminMovieList;
