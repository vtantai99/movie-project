import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AdminMovieList from "../AdminMovieList";
import AdminSideBar from "../../Components/AdminSideBar";
import AdminUser from "../AdminUser";
import AdminDashBoard from "../AdminDashBoard";
import AddMovie from "../AddMovie";
import AdminHeader from "../../Components/AdminHeader";
import { useDispatch, useSelector } from "react-redux";

const Admin = () => {
  const dispatch = useDispatch();
  const themeReducer = useSelector((state) => state.themeReducer);
  const { isLight } = themeReducer;
  const [sideBarActive, setSideBarActive] = useState(false);

  // useEffect(() => {
  //   dispatch(fetchListUser());
  //   dispatch(getMovieListRequest("GP09", GET_SHOWING_LIST));
  //   dispatch(fetchTheaterListDetail());
  // }, []);

  return (
    <div
      className={`min-h-screen w-screen ${
        isLight ? "bg-gray-100 text-gray-600" : "bg-gray-900 text-gray-100"
      }`}
    >
      <AdminSideBar
        sideBarActive={sideBarActive}
        setSideBarActive={setSideBarActive}
      />
      <div className={`${sideBarActive ? "ml-60" : "ml-28"} p-4`}>
        <AdminHeader />
      </div>
    </div>
  );
};

export default Admin;
