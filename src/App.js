import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Guards
import BookingRoute from "./Guards/BookingRoute";
import InfoRoute from "./Guards/InfoRoute";
import AdminRoute from "./Guards/AdminRoute";

//Layout
import AdminLayout from "./Layout/AdminLayout";
import MainLayout from "./Layout/MainLayout";

//Pages
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import InfoPage from "./Pages/InfoPage";
import Booking from "./Pages/Booking";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import AdminDashBoard from "./Pages/AdminDashBoard";
import AdminUser from "./Pages/AdminUser";
import AdminTicket from "./Pages/AdminTicket";
import AdminMovieList from "./Pages/AdminMovieList";
import PageNotFound from "./Pages/PageNotFound";

//Components
import LoadingDemo from "./Components/LoadingDemo";
import Trailer from "./Components/Trailer";

function App() {
  return (
    <Router>
      <LoadingDemo />
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
            "/admin/ticket",
          ]}
        >
          <AdminLayout>
            <AdminRoute
              path="/admin/dashboard"
              exact
              component={AdminDashBoard}
            />
            <AdminRoute path="/admin/user" exact component={AdminUser} />
            <AdminRoute
              path="/admin/movieList"
              exact
              component={AdminMovieList}
            />
            <AdminRoute exact path="/admin/ticket" component={AdminTicket} />
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
