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

const Admin = () => {
  const [sideBarActive, setSideBarActive] = useState(false);
  return (
    <div className="h-screen w-screen bg-gray-100 text-gray-500">
      <div className={`${sideBarActive ? "pl-60" : "pl-32"}`}>
        <Router>
          <AdminSideBar
            sideBarActive={sideBarActive}
            setSideBarActive={setSideBarActive}
          />
          <Switch>
            <Route exact path="/admin/dashboard">
              <AdminDashBoard />
            </Route>
            <Route exact path="/admin/addMovie">
              <AddMovie />
            </Route>
            <Route exact path="/admin/movie">
              <AdminMovie />
            </Route>
            <Route exact path="/admin/">
              <Redirect to="/admin/dashboard"></Redirect>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default Admin;
