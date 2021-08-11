import React, { useState } from "react";
import { useSelector } from "react-redux";
import AdminHeader from "../../Components/AdminHeader";
import AdminSideBar from "../../Components/AdminSideBar";

const AdminLayout = (props) => {
  const { isLight } = useSelector((state) => state.themeReducer);
  const { user } = useSelector((state) => state.userReducer);

  const [sideBarActive, setSideBarActive] = useState(false);

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
