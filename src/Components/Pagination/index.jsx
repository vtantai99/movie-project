import React, { Fragment } from "react";
import { Button } from "@material-ui/core";

const Pagination = ({ page, totalPost, postPerPage, handleChangePage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    totalPost > 5 && (
      <div className="flex justify-end mt-3">
        {pageNumbers.map((item, index) => (
          <button
            key={index}
            onClick={() => handleChangePage(item)}
            className={`mr-3 block w-8 h-8 rounded-full hover:bg-blue-400
          hover:text-white transition ${
            item === page ? "bg-blue-500 text-white hover:bg-blue-500" : ""
          }`}
          >
            {item}
          </button>
        ))}
      </div>
    )
  );
};

export default Pagination;
