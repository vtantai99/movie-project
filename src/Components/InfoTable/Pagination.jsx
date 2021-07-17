import React, { Fragment } from "react";
import { Button } from "@material-ui/core";

const Pagination = ({ page, totalPost, postPerPage, handleChangePage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((item, index) => (
        <button
          key={index}
          onClick={() => handleChangePage(item)}
          className={`pagination__button ${item === page ? "active" : ""}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
