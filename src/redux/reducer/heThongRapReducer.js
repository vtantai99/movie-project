import * as actions from "../../redux/action/heThongRapAction/actionTypes";

const intialState = {
  rap: "BHDStar",
  theaterList: [],
  theaterDetail: [],
  codeTheater: "bhd-star-cineplex-pham-hung",
  date: `${new Date().getDate()}/${new Date().getMonth() + 1}`,
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
    case actions.GET_CODE_THEATER:
      return { ...state, codeTheater: payload };
    default:
      return state;
  }
}
