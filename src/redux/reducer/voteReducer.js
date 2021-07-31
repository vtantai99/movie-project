import * as actions from "../action/voteAction/actionTypes";

const initialState = {
  listVote: [],
};
const voteReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case actions.GET_API_VOTE: {
      return { ...state, listVote: payload };
    }
    default:
      return state;
  }
};
export default voteReducer;
