import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: `smooth` });
  };
  return (
    <div
      className="scroll"
      onClick={() => backToTop()}
      style={
        visible
          ? { bottom: "5%", right: "1%", opacity: 1 }
          : { bottom: "5%", right: "0%", opacity: 0 }
      }
    >
      UP
      <i className="fas fa-long-arrow-alt-right"></i>
    </div>
  );
};
export default ScrollToTop;
