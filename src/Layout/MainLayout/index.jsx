import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

const MainLayout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default MainLayout;
