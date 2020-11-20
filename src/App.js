import "./App.scss";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./Pages/Detail";
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Loading from "./Components/Loading";
import Booking from "./Pages/Booking";
function App() {
  return (
    <Provider store={store}>
      <Loading></Loading>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/detail/:movieId">
            <Detail />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signUp">
            <SignUp />
          </Route>
          <Route exact path="/booking/:bookingId">
            <Booking />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
