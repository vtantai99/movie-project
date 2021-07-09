import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addDarkMode } from "../../redux/action/commonAction/actions";

const DarkMode = () => {
  const dispatch = useDispatch();
  const getTheme = () => {
    return JSON.parse(localStorage.getItem("theme")) || false;
  };
  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    const darkLocal = JSON.parse(localStorage.getItem("theme"));
    darkLocal ? dispatch(addDarkMode(true)) : dispatch(addDarkMode(false));
  }, [theme, dispatch]);

  return (
    <button
      className="dark__mode"
      onClick={() => setTheme(!theme)}
      style={theme ? { background: "#fa5238" } : null}
    >
      <span
        className="dark__mode__btn"
        style={
          theme
            ? { background: "#fff", left: "20px" }
            : { background: "#fa5238", left: 0 }
        }
      ></span>
    </button>
  );
};

export default DarkMode;
