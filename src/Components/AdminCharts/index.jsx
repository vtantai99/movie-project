import React from "react";
import { useSelector } from "react-redux";

const AdminCharts = () => {
  const { listInfo } = useSelector((state) => state.adminReducer);

  const newListInfo = [];
  listInfo.forEach((item) =>
    item.thongTinDatVe.forEach((el) => newListInfo.push(el))
  );

  const newList = [...newListInfo].filter((item) => {
    let ngayDatVe = new Date(item.ngayDat);
    let currentDate = new Date("July 2 2021");
    // console.log(currentDate.getDate());
    currentDate.setDate(currentDate.getDate() - 7);
    if (ngayDatVe.getTime() > currentDate.getTime()) {
      return item;
    }
  });
  // console.log(newList);

  return (
    <div className="col-start-5 col-end-9 row-span-2 bg-white p-3 shadow-md rounded-md">
      <p className="mb-2 text-blue-500 text-lg font-bold">
        Doanh thu tháng {new Date().getMonth() + 1}
      </p>
    </div>
  );
};

export default AdminCharts;
