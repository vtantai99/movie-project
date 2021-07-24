import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import AdminMovieTable from "../../Components/AdminTableMovie";
import "./index.scss";

const AdminMovieList = () => {
  const movieReducer = useSelector((state) => state.movieReducer);
  const { movieList } = movieReducer;

  const themeReducer = useSelector((state) => state.themeReducer);
  const { isLight } = themeReducer;

  const [list, setList] = useState([]);

  const [tableList, setTableList] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [length, setLength] = useState(30);

  const [numOfPag, setNumOfPage] = useState(1);

  useEffect(() => {
    setList(movieList);
  }, [movieList]);

  useEffect(() => {
    setNumOfPage(Math.ceil(list.length / length));
  }, [length, list]);

  useEffect(() => {
    setCurrentPage(1);
  }, [length]);

  useEffect(() => {
    if (currentPage === 1) {
      setTableList([...list].slice(0, length));
    } else if (currentPage === numOfPag) {
      const start = length * (currentPage - 1) + 1;
      setTableList([...list].slice(start));
    } else {
      const start = length * (currentPage - 1) + 1;
      const end = start + length;
      setTableList([...list].slice(start, end));
    }
  }, [list, currentPage, length]);

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
      <div className="flex flex-col mt-10">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow-sm table-wrapper overflow-auto relative">
              <AdminMovieTable list={tableList} />
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

      {movieList?.length > 0 && renderTable()}
    </div>
  );
};

export default AdminMovieList;
