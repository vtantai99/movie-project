import React from "react";
import { useEffect } from "react";
import CountUp from "react-countup";
import { useSelector } from "react-redux";
import AdminCharts from "../../Components/AdminCharts";
import AdminHistory from "../../Components/AdminHistory";
import AdminTopUser from "../../Components/AdminTopUser";

const AdminDashBoard = () => {
  const { theaterDetail } = useSelector((state) => state.heThongRapReducer);
  const { listInfo } = useSelector((state) => state.adminReducer);
  const totalFilm = useSelector((state) => state.movieListReducer.showingList);
  const totalTheater = theaterDetail?.reduce(
    (sum, item) => (sum += item.lstCumRap.length),
    0
  );
  const totalPrice = listInfo?.reduce(
    (sum, item) =>
      (sum += item.thongTinDatVe.reduce(
        (sum, item) => (sum += item.giaVe * item.danhSachGhe.length),
        0
      )),
    0
  );
  const totalTicket = listInfo?.reduce(
    (sum, item) =>
      (sum += item.thongTinDatVe.reduce(
        (sum, item) => (sum += item.danhSachGhe.length),
        0
      )),
    0
  );
  useEffect(() => {
    // dispatch(getMovieListRequest("GP09", GET_SHOWING_LIST));
    // dispatch(fetchTheaterListDetail());
  }, []);

  const totalList = [
    {
      title: "Tổng doanh thu",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 text-blue-500 text-center "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      quantity: totalPrice,
      location: "col-span-2 row-span-1",
    },
    {
      title: "Tổng vé bán ra",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 text-blue-500 text-center "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
          />
        </svg>
      ),
      quantity: totalTicket,
      location: "col-span-2 row-span-1",
    },
    {
      title: "Phim đang chiếu",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 text-blue-500 text-center"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
          />
        </svg>
      ),
      quantity: totalFilm.length,
      location: "col-start-1 col-end-3 row-start-2 row-end-3",
    },
    {
      title: "Rạp đang hoạt động",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 text-blue-500 text-center"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      quantity: totalTheater,
      location: "col-start-3 col-end-5 row-start-2 row-end-3",
    },
  ];

  return (
    <div>
      <h3 className="text-blue-500 font-medium text-2xl mb-3">DASHBOARD</h3>
      <div className="grid grid-cols-8 grid-rows-4 gap-4">
        {totalList.map((item, index) => (
          <div
            className={`${item.location} bg-white p-3 shadow-md rounded-md
           flex justify-between items-center`}
            key={index}
          >
            {item.icon}
            <div className="text-center">
              <p className="text-blue-500 text-3xl font-bold">
                <CountUp end={item.quantity} duration={2} separator="." />
              </p>
              <span>{item.title}</span>
            </div>
          </div>
        ))}
        <AdminCharts />
        <AdminTopUser />
        <AdminHistory />
      </div>
    </div>
  );
};

export default AdminDashBoard;
