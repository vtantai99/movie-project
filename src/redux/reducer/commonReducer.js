import * as actions from "../action/commonAction/actionTypes";
const initalState = {
  isLoading: false,
};

export default function commonReducer(state = initalState, action) {
  switch (action.type) {
    case actions.START_LOADING:
      return { ...state, isLoading: action.payload };
    case actions.STOP_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}
