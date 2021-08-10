import React from "react";
import { useSelector } from "react-redux";

const Pagination = ({ page, setPage, totalCount, quantity }) => {
  const { isLight } = useSelector((state) => state.themeReducer);

  const listPages = [];
  for (let i = 1; i <= Math.ceil(totalCount / quantity); i++) {
    listPages.push(i);
  }

  return (
    totalCount >= 5 && (
      <div className="flex md:justify-end">
        <button
          className={`${page === 1 && "opacity-50 pointer-events-none"} 
          ${isLight ? "border-solid" : "border-gray-700"}
           px-2 py-2 border-t border-b border-l border-r rounded-tl rounded-bl transition`}
          onClick={() => setPage(page - 1)}
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
        </button>
        {listPages.map((item, index) => (
          <button
            key={index}
            className={`${
              item === page &&
              "bg-blue-500 border-blue-500 text-white pointer-events-none"
            } ${
              isLight
                ? "border-solid hover:bg-gray-100"
                : "border-gray-700 hover:bg-gray-700"
            } px-3 py-2 border-r border-t border-b transition`}
            onClick={() => setPage(item)}
          >
            {item}
          </button>
        ))}
        <button
          className={`${
            page === Math.ceil(totalCount / quantity) &&
            "opacity-50 pointer-events-none"
          } ${
            isLight
              ? "border-solid hover:bg-gray-100"
              : "border-gray-700 hover:bg-gray-700"
          } px-2 py-2 border-r border-t border-b 
            rounded-tr rounded-br transition`}
          onClick={() => setPage(page + 1)}
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
        </button>
      </div>
    )
  );
};

export default Pagination;
