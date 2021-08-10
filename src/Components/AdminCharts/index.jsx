import React from "react";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import format from "date-format";
import { Button } from "@material-ui/core";

const AdminCharts = () => {
  const { listInfo } = useSelector((state) => state.adminReducer);
  const { isLight } = useSelector((state) => state.themeReducer);

  const [timeShow, setTimeShow] = useState(null);

  const newListInfo = [];
  listInfo.forEach((item) =>
    item.thongTinDatVe.forEach((el) => newListInfo.push(el))
  );

  //// Xử lý list vé 7 ngày trước
  //Tạo list 7 ngày trước ngày hiện tại
  const listPastDates = [...Array(timeShow || 7)].map((item, index) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - index);
    return { ngayDat: currentDate, listMoney: [] };
  });

  // Lấy list có vé đặt 7 ngày trước
  const listPastTicket = newListInfo.filter((item) => {
    let ngayDatVe = new Date(item.ngayDat);
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - (timeShow || 7));
    return ngayDatVe.getTime() > currentDate.getTime();
  });

  // so sánh item của 2 array nếu trùng ngày thì push giá vé vào listMoney của listPastDates
  if (listPastTicket) {
    for (let i = 0; i < listPastTicket.length; i++) {
      for (let j = 0; j < listPastDates.length; j++) {
        if (
          new Date(listPastTicket[i].ngayDat).getDate() ===
          new Date(listPastDates[j].ngayDat).getDate()
        ) {
          listPastDates[j].listMoney.push(listPastTicket[i].giaVe);
        }
      }
    }
  }

  return (
    <div
      className={`${
        isLight ? "bg-white" : "bg-gray-800 text-white"
      } col-start-5 col-end-9 row-span-2 p-3 shadow-md rounded-md transition`}
    >
      <div className="flex">
        <Button
          className="mr-2"
          onClick={() => setTimeShow(7)}
          style={
            timeShow === 7 || !timeShow
              ? {
                  background: "#fa5238",
                  color: "white",
                  border: "1px solid #fa5238",
                }
              : {
                  background: "white",
                  color: "#fa5238",
                  border: "1px solid #fa5238",
                }
          }
        >
          7 ngày
        </Button>
        <Button
          onClick={() => setTimeShow(30)}
          style={
            timeShow === 30
              ? {
                  background: "#fa5238",
                  color: "white",
                  border: "1px solid #fa5238",
                }
              : {
                  background: "white",
                  color: "#fa5238",
                  border: "1px solid #fa5238",
                  marginRight: "5px",
                }
          }
        >
          30 ngày
        </Button>
      </div>
      {listInfo && (
        <Bar
          data={{
            labels: listPastDates
              .sort(
                (a, b) =>
                  new Date(a.ngayDat).getTime() - new Date(b.ngayDat).getTime()
              )
              .map((item) => format("dd/MM", new Date(item.ngayDat))),

            datasets: [
              {
                label: "Tổng thu nhập",
                data: listPastDates
                  .sort(
                    (a, b) =>
                      new Date(a.ngayDat).getTime() -
                      new Date(b.ngayDat).getTime()
                  )
                  .map((item) =>
                    item.listMoney.reduce((sum, item) => (sum += item), 0)
                  ),
                backgroundColor: [
                  "rgba(255, 99, 132, 0.6)",
                  "rgba(54, 162, 235, 0.6)",
                  "rgba(255, 206, 86, 0.6)",
                  "rgba(75, 192, 192, 0.6)",
                  "rgba(153, 102, 255, 0.6)",
                  "rgba(255, 159, 64, 0.6)",
                  "rgba(54, 176, 64, 0.6)",
                ],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                display: true,
                text: `Doanh thu ${timeShow || 7} ngày qua`,
              },
              legend: {
                display: true,
                position: "bottom",
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default AdminCharts;
