import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoadingDemo from "./Components/LoadingDemo";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import InfoPage from "./Pages/InfoPage";
import PageNotFound from "./Pages/PageNotFound";
import AdminLayout from "./Layout/AdminLayout";
import AdminDashBoard from "./Pages/AdminDashBoard";
import AdminUser from "./Pages/AdminUser";
import AddMovie from "./Pages/AddMovie";
import AdminMovieList from "./Pages/AdminMovieList";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import ScrollToTop from "./Components/ScrollToTop";
import Trailer from "./Components/Trailer";
import Booking from "./Pages/Booking";
import BookingRoute from "./Guards/BookingRoute";
import InfoRoute from "./Guards/InfoRoute";
import AdminRoute from "./Guards/AdminRoute";

function App() {
  return (
    <Router>
      <LoadingDemo />
      <ScrollToTop />
      <Trailer />
      <Switch>
        <Route exact path={["/", "/detail/:movieId", "/info"]}>
          <MainLayout>
            <Route path="/" exact component={Home} />
            <Route path="/detail/:movieId" exact component={Detail} />
            <InfoRoute path="/info" exact component={InfoPage} />
          </MainLayout>
        </Route>

        <BookingRoute exact path="/booking/:bookingId" component={Booking} />

        <Route
          exact
          path={[
            "/admin/dashboard",
            "/admin/user",
            "/admin/addMovie",
            "/admin/movieList",
          ]}
        >
          <AdminLayout>
            <AdminRoute
              path="/admin/dashboard"
              exact
              component={AdminDashBoard}
            />
            <AdminRoute path="/admin/user" exact component={AdminUser} />
            <AdminRoute path="/admin/addMovie" exact component={AddMovie} />
            <AdminRoute
              path="/admin/movieList"
              exact
              component={AdminMovieList}
            />
          </AdminLayout>
        </Route>

        <Route exact path={["/signIn", "/signUp"]}>
          <Route path="/signIn" exact component={SignIn} />
          <Route path="/signUp" exact component={SignUp} />
        </Route>

        <Route path="" component={PageNotFound} />
      </Switch>
    </Router>
  );
}
export default App;
