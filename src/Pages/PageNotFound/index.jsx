import React, { useEffect } from "react";
import "../../Assets/Styles/SCSS/Pages/pageNotFound.scss";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const PageNotFound = () => {
  const history = useHistory();
  const [seconds, setSeconds] = useState(10);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        history.push("/");
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });
  return (
    <section className="page__error">
      <div className="page__error__content">
        <p style={{ color: "#777", fontStyle: "italic" }}>
          // 404 page not found.
        </p>
        <p>
          <span style={{ color: "#d65562" }}>if</span> (
          <span style={{ color: "#4ca8ef" }}>!</span>
          <span style={{ color: "#bdbdbd" }}>found</span>)
          <span style={{ marginLeft: "10px" }}>&#123;</span>
        </p>
        <p style={{ paddingLeft: "30px" }}>
          <span style={{ color: "#4ca8ef" }}>throw</span>(
          <span style={{ color: "#a6a61f" }}>
            "Go home in {seconds >= 10 ? seconds : "0" + seconds}s..."
          </span>
          );
        </p>
        <span style={{ marginLeft: "5px" }}>&#125;</span>
        <p>
          //{" "}
          <a href="/" style={{ fontStyle: "italic" }}>
            Go home now!
          </a>
        </p>
      </div>
    </section>
  );
};

export default PageNotFound;
