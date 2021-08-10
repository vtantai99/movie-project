import * as actions from "../../redux/action/heThongRapAction/actionTypes";

const initialState = {
  rap: "BHDStar",
  theaterList: [],
  theaterDetail: [],
  theaterDetailAdmin: [],
  codeTheater: "bhd-star-cineplex-pham-hung",
};

export default function heThongRapReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case actions.SWITCH_RAP:
      return { ...state, rap: payload };
    case actions.FETCH_THEATER_LOGO:
      return { ...state, theaterList: payload };
    case actions.FETCH_THEATER_LIST_DETAIL:
      return { ...state, theaterDetail: payload };
    case actions.GET_CODE_THEATER:
      return { ...state, codeTheater: payload };
    case actions.REFRESH_CODE_THEATER:
      return { ...state, codeTheater: payload };
    default:
      return state;
  }
}
