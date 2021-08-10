import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminHeader from "../../Components/AdminHeader";
import AdminSideBar from "../../Components/AdminSideBar";
import { fetchListUser } from "../../redux/action/adminAction/actions";
import { fetchTheaterListDetail } from "../../redux/action/heThongRapAction/actions";
import { getMovieListRequest } from "../../redux/action/movieListAction/action";
import { GET_SHOWING_LIST } from "../../redux/action/movieListAction/actionTypes";

const AdminLayout = (props) => {
  const dispatch = useDispatch();

  const { isLight } = useSelector((state) => state.themeReducer);
  const { user } = useSelector((state) => state.userReducer);

  const [sideBarActive, setSideBarActive] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await Promise.all([
        user && dispatch(fetchListUser()),
        dispatch(getMovieListRequest("GP09", GET_SHOWING_LIST)),
        dispatch(fetchTheaterListDetail()),
      ]);
    }
    fetchData();
  }, [dispatch, user]);

  // Nếu người dùng k phải quản trị thì ẩn layout, ko hiện gì cả. chỉ hiện swal
  if (user?.maLoaiNguoiDung !== "QuanTri") {
    return <>{props.children}</>;
  }
  return (
    <div
      className={`min-h-screen w-screen transition ${
        isLight ? "bg-gray-100 text-gray-600" : "bg-gray-900 text-gray-100"
      }`}
    >
      <AdminSideBar
        sideBarActive={sideBarActive}
        setSideBarActive={setSideBarActive}
      />
      <div className={`${sideBarActive ? "ml-60" : "ml-28"} p-4`}>
        <AdminHeader />
        {props.children}
      </div>
    </div>
  );
};

export default AdminLayout;
