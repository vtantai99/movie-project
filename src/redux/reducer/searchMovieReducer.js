import * as actionTypes from "../action/searchMovieAction/actionTypes";
import format from "date-format";

const initialState = {
  isLoading: false,
  listFilm: [],
  listTheaterSelected: [],
  listTime: [],
  listDates: [],
  listHours: [],
  nameMovie: null,
  nameTheater: null,
  nameDate: null,
  nameHours: null,
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
    case actionTypes.FETCH_THEATER_SHOWTIME: {
      const theaterList = payload;
      const listDateEmpty = [];
      let lisDateFake = theaterList.map((item) => item.cumRapChieu);
      for (let i = 0; i < lisDateFake.length; i++) {
        // console.log(lisDateFake[i]);
        for (let j = 0; j < lisDateFake[i].length; j++) {
          //   console.log(lisDateFake[i][j]);
          listDateEmpty.push(lisDateFake[i][j]);
        }
      }
      //   console.log(listDateEmpty);
      const date = listDateEmpty.filter(
        (item) => item.tenCumRap === state.nameTheater
      )[0].lichChieuPhim;

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
    case actionTypes.ADD_NAME_HOURS: {
      return { ...state, nameHours: payload };
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
        nameTheater: null,
        nameDate: null,
        nameHours: null,
      };
    }
    case actionTypes.REFRESH_THEATER: {
      return {
        ...state,
        listTime: [],
        listHours: [],
        nameDate: null,
        nameHours: null,
      };
    }
    case actionTypes.REFRESH_DATE: {
      return { ...state, listHours: [], nameHours: null };
    }
    default:
      return state;
  }
};
export default searchMovieReducer;
