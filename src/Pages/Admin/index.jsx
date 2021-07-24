import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AdminSideBar from "../../Components/AdminSideBar";
import AdminDashBoard from "../../Components/AdminDashBoard";
import AdminMovie from "../../Components/AdminMovie";
import AddMovie from "../AddMovie";
import AdminHeader from "../../Components/AdminHeader";
import { useDispatch, useSelector } from "react-redux";
import AdminUser from "../../Components/AdminUser";
import { useEffect } from "react";
import { fetchListUser } from "../../redux/action/adminAction/actions";

const Admin = () => {
  const dispatch = useDispatch();
  const themeReducer = useSelector((state) => state.themeReducer);
  const { isLight } = themeReducer;
  const [sideBarActive, setSideBarActive] = useState(false);

  useEffect(() => {
    dispatch(fetchListUser());
  }, []);
  return (
    <div
      className={`min-h-screen w-screen ${
        isLight ? "bg-gray-100 text-gray-600" : "bg-gray-900 text-gray-100"
      }`}
    >
      <div className={`${sideBarActive ? "ml-60" : "ml-28"} p-4`}>
        <AdminHeader />
        <AdminSideBar
          sideBarActive={sideBarActive}
          setSideBarActive={setSideBarActive}
        />
        <Route exact path="/admin/dashboard" component={AdminDashBoard} />
        <Route exact path="/admin/user" component={AdminUser} />
        <Route exact path="/admin/addMovie" component={AddMovie} />
        <Route exact path="/admin/movie" component={AdminMovie} />
        <Route exact path="/admin/">
          <Redirect to="/admin/dashboard" />
        </Route>
      </div>
    </div>
  );
};

export default Admin;
