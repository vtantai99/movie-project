import * as actions from "../action/userAction/actionTypes";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")),
  error: "",
  info: "",
};
const userReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case actions.LOG_IN: {
      return { ...state, user: payload };
    }
    case actions.LOG_OUT: {
      return { ...state, user: payload };
    }
    case actions.INFO_USER: {
      return { ...state, info: payload };
    }
    case actions.HIDE_ERROR:
      return { ...state, error: payload };
    case actions.SHOW_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
export default userReducer;
