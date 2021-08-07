import * as actions from "../action/themeAction/actionTypes";

const initialState = {
  isLight: true,
};

export default function themeReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case actions.SWITCH_THEME:
      return { ...state, isLight: payload };
    default:
      return state;
  }
}
