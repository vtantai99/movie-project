import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { formatNumber } from "../../Helper/Function/formatNumber";

const BookingFood = ({ foodState, handleChangeQuantity }) => {
  const { statusFood } = useSelector((state) => state.bookingReducer);
  const { isLight } = useSelector((state) => state.themeReducer);

  return (
    <div
      className={`${!isLight && "bg-gray-800 text-white"} combo transition`}
      style={
        statusFood
          ? { left: "-100%" }
          : {
              left: "0",
              visibility: "hidden",
              opacity: "0",
            }
      }
    >
      <div className="combo__menu">
        <div
          className={`${
            isLight ? "bg-gray-200" : "bg-gray-900 text-white"
          } title transition`}
        >
          MENU
        </div>
        {foodState?.map((item, index) => (
          <div className="item" key={index}>
            <div className="item__main">
              <img src={item.img} alt="logo" />
              <div className="item__main__name">
                <p>
                  <i class="fas fa-info-circle"></i>&nbsp;
                  {item.name}
                </p>
                <span>{formatNumber(item.price)}</span>
              </div>
            </div>
            <div className="item__quality">
              <Button
                variant="contained"
                onClick={() => handleChangeQuantity("minus", item.id)}
                disabled={item.quantity === 0 ? true : false}
              >
                -
              </Button>
              <span className="number mx-2">{item.quantity}</span>
              <Button
                variant="contained"
                onClick={() => handleChangeQuantity("plus", item.id)}
                disabled={item.quantity === 10 ? true : false}
              >
                +
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingFood;
