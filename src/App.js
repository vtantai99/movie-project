import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./Pages/Detail";
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import LoadingDemo from "./Components/LoadingDemo";
import Booking from "./Pages/Booking";
import PageNotFound from "./Pages/PageNotFound";
import InfoPage from "./Pages/InfoPage";
import Admin from "./Pages/Admin";

function App() {
  return (
    <Provider store={store}>
      <LoadingDemo />
      <Router>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/signUp" component={SignUp}></Route>
          <Route path="/info" component={InfoPage}></Route>
          <Route path="/admin" component={Admin}></Route>
          <Route path="/detail/:movieId" component={Detail}></Route>
          <Route path="/booking/:bookingId" component={Booking}></Route>
          <Route path="/" component={Home}></Route>
          <Route path="" component={PageNotFound}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}
export default App;
