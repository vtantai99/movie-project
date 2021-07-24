import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import {
  minusQuantityCombo,
  plusQuantityCombo,
} from "../../redux/action/bookingAction/actions";
import { formatNumber } from "../../Helper/Function/formatNumber";
const BookingFood = () => {
  const dispatch = useDispatch();
  const { statusFood, foodList } = useSelector((state) => state.bookingReducer);
  const { darkMode } = useSelector((state) => state.commonReducer);

  return (
    <div
      className={darkMode ? "combo Dark" : "combo"}
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
        <div className="title">MENU</div>
        {foodList?.map((item, index) => (
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
                onClick={() => dispatch(minusQuantityCombo(item.id))}
                disabled={item.quantity === 0 ? true : false}
              >
                -
              </Button>

              <span className="number mx-2">{item.quantity}</span>
              <Button
                variant="contained"
                onClick={() => dispatch(plusQuantityCombo(item.id))}
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
