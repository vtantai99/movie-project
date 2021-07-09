import * as actions from "./actionTypes";

export const startLoading = () => {
  return {
    type: actions.START_LOADING,
    payload: true,
  };
};
export const stopLoading = () => {
  return {
    type: actions.STOP_LOADING,
    payload: false,
  };
};
export const addDarkMode = (value) => {
  return {
    type: actions.DARK_MODE,
    payload: value,
  };
};
