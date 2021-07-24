import * as actions from "../action/adminAction/actionTypes";

const initialState = {
  listUser: [],
  listInfo: [],
};

const adminReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case actions.GET_LIST_USER: {
      return { ...state, listUser: payload };
    }
    case "THEM_INFO": {
      let danhSachInfo = [...state.listInfo];
      if (payload.thongTinDatVe.length) {
        danhSachInfo.push(payload);
      }
      return { ...state, listInfo: danhSachInfo };
    }
    default:
      return state;
  }
};

export default adminReducer;
