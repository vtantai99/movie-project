import * as actionTypes from "../action/searchMovieAction/actionTypes";
import format from "date-format";

const initialState = {
  listFilm: [],
  listTheaterSelected: [],
  listTime: [],
  listHours: [],
  nameMovie: null,
  nameTheater: null,
  nameDate: null,
  code: null,
};
const searchMovieReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case actionTypes.FETCH_MOVIE_LIST: {
      return { ...state, listFilm: payload };
    }
    case actionTypes.FETCH_THEATER_LIST: {
      return {
        ...state,
        listTheaterSelected: payload,
        codeFilm: payload.maPhim,
      };
    }
    case actionTypes.FETCH_DATE: {
      const theaterList = payload;
      console.log(theaterList);
      const listDateEmpty = [];
      let lisDateFake = theaterList.map((item) => item.cumRapChieu);
      console.log(lisDateFake);
      for (let i = 0; i < lisDateFake.length; i++) {
        for (let j = 0; j < lisDateFake[i].length; j++) {
          listDateEmpty.push(lisDateFake[i][j]);
        }
      }
      console.log(listDateEmpty);
      const date = listDateEmpty.filter(
        (item) => item.tenCumRap === state.nameTheater
      )[0].lichChieuPhim; // chua hieu doan nay lam
      return { ...state, listTime: date };
    }
    case actionTypes.GET_HOURS_LIST: {
      let listTimeRedux = [...state.listTime];
      const { nameDate } = state;
      console.log(nameDate);
      const hourList = listTimeRedux.filter(
        (item) =>
          format("dd/MM/yyyy", new Date(item.ngayChieuGioChieu)) === nameDate
      );
      console.log(hourList);
      return { ...state, listHours: hourList };
    }
    case actionTypes.ADD_NAME_THEATER: {
      return { ...state, nameTheater: payload };
    }
    case actionTypes.ADD_NAME_MOVIE: {
      return { ...state, nameMovie: payload };
    }
    case actionTypes.ADD_NAME_DATE: {
      return { ...state, nameDate: payload };
    }
    case actionTypes.ADD_CODE: {
      return { ...state, code: +payload };
    }
    case actionTypes.START_LOADING: {
      return { ...state, isLoading: true };
    }
    case actionTypes.STOP_LOADING: {
      return { ...state, isLoading: false };
    }
    case actionTypes.REFRESH_FILM: {
      return {
        ...state,
        listTheaterSelected: [],
        listTime: [],
        listHours: [],
        nameMovie: null,
        nameTheater: null,
        nameDate: null,
        code: null,
      };
    }
    case actionTypes.REFRESH_THEATER: {
      return {
        ...state,
        listTime: [],
        listHours: [],
        nameDate: null,
        code: null,
      };
    }
    case actionTypes.REFRESH_DATE: {
      return { ...state, listHours: [], code: null };
    }
    default:
      return state;
  }
};
export default searchMovieReducer;
