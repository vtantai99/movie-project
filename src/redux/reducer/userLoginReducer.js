import * as actions from "../action/userLoginAction/actionTypes";

const initalState = {
  user: JSON.parse(localStorage.getItem('user')),
  isLogged: false,
  error: "",
};

export default function userLoginReducer(state = initalState, action) {
  switch (action.type) {
    case actions.LOGIN: {
      const { user, isLogged } = action.payload;
      return { ...state, user, isLogged };
    }
    case actions.SHOW_ERROR:
    case actions.HIDE_ERROR:
      return { ...state, error: action.payload };
      case actions.CHECK_USER: return {...state, user:action.payload}
    default:
      return state;
  }
}
