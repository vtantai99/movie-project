import { Fragment } from "react";
import "./App.scss";
import OwlCarouselComponent from "./Components/Carousel";
import Header from "./Components/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <OwlCarouselComponent />
    </Fragment>
  );
}

export default App;
