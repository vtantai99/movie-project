import React from "react";

const QuantityTable = ({ totalCount, quantity, setQuantity }) => {
  return (
    totalCount > 5 && (
      <div className="flex items-center">
        <span>Hiển thị</span>
        <select
          className="cursor-pointer rounded p-1 mx-2 text-white bg-blue-500 outline-none"
          onChange={(e) => setQuantity(e.target.value)}
        >
          <option value="5">5</option>
          {totalCount >= 10 && (
            <option value={10} selected={quantity === 10 && true}>
              10
            </option>
          )}
          {totalCount >= 20 && (
            <option value={20} selected={quantity === 20 && true}>
              20
            </option>
          )}
          {totalCount >= 30 && (
            <option value={30} selected={quantity === 30 && true}>
              30
            </option>
          )}
        </select>
        <span>của {totalCount}</span>
      </div>
    )
  );
};

export default QuantityTable;
