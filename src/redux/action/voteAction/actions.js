import Axios from "axios";
import * as actions from "./actionTypes";

export const getApiVote = () => async (dispatch) => {
  try {
    const res = await Axios.get(
      "https://5fb3d99eb6601200168f7f86.mockapi.io/voteFilm"
    );
    if (res.status === 200 || res.status == 201) {
      await dispatch(getListVote(res.data));
    }
  } catch (err) {
    console.log(err);
  }
};

const getListVote = (data) => {
  return {
    type: actions.GET_API_VOTE,
    payload: data,
  };
};
