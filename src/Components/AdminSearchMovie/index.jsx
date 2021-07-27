import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchTerm } from "../../redux/action/movieAction/actions";

const AdminSearchMovie = () => {
  const themeReducer = useSelector((state) => state.themeReducer);
  const { isLight } = themeReducer;
  const { searchTerm } = useSelector((state) => state.movieReducer);
  const dispatch = useDispatch();
  return (
    <input
      value={searchTerm}
      onChange={(e) => dispatch(updateSearchTerm(e.target.value))}
      type="text"
      className={`p-3 rounded shadow-sm md:w-56 focus:outline-none ${
        isLight ? "bg-white" : "bg-gray-800"
      }`}
      placeholder="Search movie"
    />
  );
};

export default AdminSearchMovie;
