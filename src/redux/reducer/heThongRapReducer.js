import * as actions from "../../redux/action/heThongRapAction/actionTypes";

const intialState = {
  rap: "BHDStar",
  theaterList: [],
  theaterDetail: [],
};

export default function heThongRapReducer(state = intialState, action) {
  let { type, payload } = action;
  switch (type) {
    case actions.SWITCH_RAP:
      return { ...state, rap: payload };
    case actions.FETCH_THEATER_LIST_API:
      return { ...state, theaterList: payload };

    case actions.FETCH_THEATER_DETAIL:
      return { ...state, theaterDetail: payload };
    default:
      return state;
  }
}
