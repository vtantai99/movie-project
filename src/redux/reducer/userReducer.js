import * as actions from "../action/userAction/actionTypes";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")),
  listAllUser: [],
  info: "",
  modalUser: { statusModal: false },
  error: "",
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
    case actions.GET_ALL_USER: {
      return { ...state, listAllUser: payload };
    }
    case actions.CHANGE_PASS: {
      const newInfo = { ...state.info, matKhau: payload.matKhau };
      return { ...state, info: newInfo };
    }
    case actions.HIDE_ERROR:
      return { ...state, error: payload };
    case actions.SHOW_ERROR:
      return { ...state, error: payload };
    case actions.MODAL_USER: {
      return { ...state, modalUser: payload };
    }
    default:
      return state;
  }
};
export default userReducer;
