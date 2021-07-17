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
<<<<<<< HEAD
=======
import Header from "./Components/Header";
import { useEffect } from "react";
>>>>>>> origin/addMovie

function App() {
  useEffect(() => {
    console.log(window.location.href);
  }, [window.location.href])
  return (
    <Provider store={store}>
      <LoadingDemo />
      <Router>
        <Switch>
<<<<<<< HEAD
          <Route path="/login" exact component={Login}></Route>
          <Route path="/signUp" exact component={SignUp}></Route>
          <Route path="/info" exact component={InfoPage}></Route>
          <Route path="/admin" exact component={Admin}></Route>
          <Route path="/detail/:movieId" exact component={Detail}></Route>
          <Route path="/booking/:bookingId" exact component={Booking}></Route>
          <Route path="/" exact component={Home}></Route>
          <Route path="" component={PageNotFound}></Route>
=======
          <Route path="/detail/:movieId">
            <Header />
            <Detail />
          </Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signUp" component={SignUp}></Route>
          <Route path="/booking/:bookingId" component={Booking}></Route>
          <Route path="/info" component={InfoUser}></Route>
          <Route  path="/admin" component={Admin}></Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
          <Route component={PageNotFound}></Route>
>>>>>>> origin/addMovie
        </Switch>
      </Router>
    </Provider>
  );
}
export default App;
