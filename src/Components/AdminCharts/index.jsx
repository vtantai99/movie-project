import React from "react";
import { useSelector } from "react-redux";

const AdminCharts = () => {
  const { listInfo } = useSelector((state) => state.adminReducer);
  const { isLight } = useSelector((state) => state.themeReducer);

  const newListInfo = [];
  listInfo.forEach((item) =>
    item.thongTinDatVe.forEach((el) => newListInfo.push(el))
  );

  // const newList = [...newListInfo].filter((item) => {
  //   let ngayDatVe = new Date(item.ngayDat);
  //   let currentDate = new Date("July 2 2021");
  //   currentDate.setDate(currentDate.getDate() - 7);
  //   if (ngayDatVe.getTime() > currentDate.getTime()) {
  //     return item;
  //   }
  // });

  return (
    <div
      className={`${
        isLight ? "bg-white" : "bg-gray-800 text-white"
      } col-start-5 col-end-9 row-span-2 p-3 shadow-md rounded-md transition`}
    >
      <p className="mb-2 text-lg font-bold">
        Doanh thu tháng {new Date().getMonth() + 1}
      </p>
    </div>
  );
};

export default AdminCharts;
