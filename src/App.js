import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Detail from "./Pages/Detail";
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import LoadingDemo from "./Components/LoadingDemo";
import Booking from "./Pages/Booking";
import PageNotFound from "./Pages/PageNotFound";
import InfoUser from "./Pages/InfoUser";
import Admin from "./Pages/Admin";
import Header from "./Components/Header";

function App() {
  return (
    <Provider store={store}>
      <LoadingDemo />
      <Router>
        <Switch>
          <Route path="/detail/:movieId">
            <Header />
            <Detail />
          </Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signUp" component={SignUp}></Route>
          <Route path="/booking/:bookingId" component={Booking}></Route>
          <Route path="/info" component={InfoUser}></Route>
          <Route path="/admin" component={Admin}></Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
          <Route component={PageNotFound}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}
export default App;
