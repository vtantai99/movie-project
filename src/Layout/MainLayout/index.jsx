import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import ScrollToTop from "../../Components/ScrollToTop";

const MainLayout = (props) => {
  return (
    <>
      <Header />
      <ScrollToTop />
      {props.children}
      <Footer />
    </>
  );
};

export default MainLayout;
