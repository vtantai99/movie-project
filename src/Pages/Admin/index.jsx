import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AdminSideBar from "../../Components/AdminSideBar";
import AdminDashBoard from "../../Components/AdminDashBoard";
import AdminMovie from "../../Components/AdminMovie";

const Admin = () => {
  return (
    <div className="h-screen w-screen bg-gray-100 text-gray-600">
      <Router>
        <AdminSideBar />
        <Switch>
          <Route path="/admin/dashboard" component={AdminDashBoard}></Route>
          <Route path="/admin/movie" component={AdminMovie}></Route>
          <Route path="/admin">
            <Redirect to="/admin/dashboard"></Redirect>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Admin;
