import { Fragment } from "react";
import "./App.scss";
import SearchMovie from "./Components/SearchMovie";
import OwlCarouselComponent from "./Components/Carousel";
import Header from "./Components/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <OwlCarouselComponent />
      <div class="container">
        <SearchMovie />
      </div>
    </Fragment>
  );
}

export default App;
