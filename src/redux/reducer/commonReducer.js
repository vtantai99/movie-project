import * as actions from "../action/commonAction/actionTypes";
const initialState = {
  isLoading: false,
};

export default function commonReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case actions.START_LOADING:
      return { ...state, isLoading: payload };
    case actions.STOP_LOADING:
      return { ...state, isLoading: payload };

    default:
      return state;
  }
}
