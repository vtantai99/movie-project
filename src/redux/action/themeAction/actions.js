import * as actions from "./actionTypes";

export const switchTheme = (theme) => {
  return {
    type: actions.SWITCH_THEME,
    payload: theme,
  };
};
