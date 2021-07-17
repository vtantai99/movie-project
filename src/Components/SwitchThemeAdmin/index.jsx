import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "../../redux/action/themeAction/actions";

const SwitchThemeAdmin = () => {
  const themeReducer = useSelector((state) => state.themeReducer);
  const { isLight } = themeReducer;
  const dispatch = useDispatch();
  //   ${isLight ? "left-0.5" : "right-0.5"}
  return (
    <div
      onClick={() => dispatch(switchTheme())}
      className={`w-14 p-1 shadow-xl h-6 ${
        isLight ? "bg-white" : "bg-gray-700"
      } cursor-pointer relative flex flex-row justify-between items-center rounded-2xl`}
    >
      <div
        className={`w-6 h-5 left-0.5 ${
          !isLight ? "translate-x-7" : "translate-x-0"
        } absolute cursor-pointer transition-all 
        top-1/2 transform -translate-y-1/2 bg-blue-500 rounded-full`}
      ></div>
      <div>
        {!isLight && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </div>
      <div>
        {isLight && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default SwitchThemeAdmin;
