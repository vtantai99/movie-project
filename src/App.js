import { Fragment } from "react";
import "./App.scss";
import Booking from "./Components/Booking";
import OwlCarouselComponent from "./Components/Carousel";
import Header from "./Components/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <OwlCarouselComponent />
      <Booking />
    </Fragment>
  );
}

export default App;
