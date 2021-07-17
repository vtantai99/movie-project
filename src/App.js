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
          <Route path="/login" exact component={Login}></Route>
          <Route path="/signUp" exact component={SignUp}></Route>
          <Route path="/info" exact component={InfoPage}></Route>
          <Route path="/admin" exact component={Admin}></Route>
          <Route path="/detail/:movieId" exact component={Detail}></Route>
          <Route path="/booking/:bookingId" exact component={Booking}></Route>
          <Route path="/" exact component={Home}></Route>
          <Route path="" component={PageNotFound}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}
export default App;
