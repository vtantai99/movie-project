import axios from "axios";

export const getMovieListRequest = (codeFilm, type) => {
  return (dispatch) => {
    axios
      .get(
        `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${codeFilm}`
      )
      .then((res) => {
        dispatch(getMovieList(res.data, type));
      })
      .catch((err) => console.log(err));
  };
};
export const getMovieList = (movieList, type) => {
  return {
    type: type,
    payload: movieList,
  };
};
