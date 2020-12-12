import React from "react";
import "./index.scss";

const MovieShowTimeDates = () => {
  const renderDates = () => {
    const currentDate = new Date();
    const dates = [currentDate];
    for (let i = 0; i < 10; i++) {
      const newDate = new Date();
      newDate.setDate(currentDate.getDate() + i + 1);
      dates.push(newDate);
    }
    return dates.map((el) => (
      <div className="singleDate">
        <span className="weekDay">{formatWeekDate(el.getDay())}</span>
        <span className="date">{el.getDate()}</span>
      </div>
    ));
  };

  const formatWeekDate = (weekDate) => {
    switch (weekDate) {
      case 0:
        return "Chu nhat";
      case 1:
        return "Thu hai";
      case 2:
        return "Thu ba";
      case 3:
        return "Thu tu";
      case 4:
        return "Thu nam";
      case 5:
        return "Thu sau";
      case 6:
        return "Thu bay";
    }
  };

  return <div className="movieShowTimesDates">{renderDates()}</div>;
};

export default MovieShowTimeDates;
