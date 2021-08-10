import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { iconDark, iconLight } from "../../Helper/IconSVG/iconTheme";
import { switchTheme } from "../../redux/action/themeAction/actions";

const SwitchTheme = () => {
  const dispatch = useDispatch();

  const getTheme = () => {
    // Xét state ở hàm này, nếu khi component render k có "theme" thì light === false
    return JSON.parse(localStorage.getItem("theme")) || false;
  };

  const [isLight, setIsLight] = useState(getTheme()); //gán giá trị state theo hàm getTheme()

  useEffect(() => {
    //  Khi component render, xét theme nếu local chưa có, có rồi xét tiếp =))
    localStorage.setItem("theme", JSON.stringify(isLight));
    // lấy ra giá trị của local theme
    const themeLocal = JSON.parse(localStorage.getItem("theme"));
    //dispatch lên redux
    dispatch(switchTheme(themeLocal));
  }, [isLight, dispatch]);

  return (
    <div
      onClick={() => setIsLight(!isLight)}
      className={`w-14 h-6 p-1 shadow-xl  ${
        isLight ? "bg-white" : "bg-gray-700"
      } cursor-pointer relative flex flex-row justify-between items-center rounded-2xl`}
    >
      <div
        className={`w-6 h-5 left-0.5 ${
          !isLight ? "translate-x-7" : "translate-x-0"
        } absolute cursor-pointer transition-all 
        top-1/2 transform -translate-y-1/2 bg-blue-500 rounded-full`}
      ></div>
      <div>{!isLight && iconDark}</div>
      <div>{isLight && iconLight}</div>
    </div>
  );
};

export default SwitchTheme;
