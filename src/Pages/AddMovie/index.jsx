import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addMovie, editMovie } from "../../redux/action/movieAction/actions";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const AddMovie = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
  } = useForm();

  const themeReducer = useSelector((state) => state.themeReducer);
  const { isLight } = themeReducer;

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      width: "100%",
      color: "red",
      backgroundColor: isLight ? "white" : "#3F3F46",
      padding: "10px",
      borderRadius: "5px",
    },
  }));

  const classes = useStyles();

  const history = useHistory();

  const dispatch = useDispatch();

  const [date, setDate] = useState("2021-12-20");

  const { user } = useSelector((state) => state.userReducer);

  const { selectedMovie } = useSelector((state) => state.movieReducer);

  const onSubmit = (data) => {
    const time = new Date(date);
    const newDate = `${time.getDate() < 10 ? "0" : ""}${time.getDate()}-${
      time.getMonth() < 10 ? "0" : ""
    }${time.getMonth()}-${time.getFullYear()}`;
    if (selectedMovie) {
      const { maPhim, biDanh, maNhom, danhGia } = selectedMovie;
      const { tenPhim, trailer, moTa } = data;
      const newObject = {
        maPhim,
        tenPhim,
        biDanh,
        trailer,
        hinhAnh: img,
        moTa,
        maNhom,
        ngayKhoiChieu: newDate,
        danhGia,
      };
      dispatch(editMovie(newObject, user, history));
    } else {
      const formData = new FormData();
      for (const property in data) {
        if (property === "hinhAnh") {
          if (selectedMovie) {
            formData.append(property, img);
          } else {
            formData.append(property, data[property][0]);
          }
        } else {
          formData.append(property, data[property]);
        }
      }
      formData.append("maNhom", "GP09");
      formData.append("ngayKhoiChieu", newDate);
      dispatch(addMovie(formData, history));
    }
  };

  const [img, setImg] = useState("");

  const watchImage = watch("hinhAnh");

  useEffect(() => {
    if (selectedMovie) {
      const { tenPhim, trailer, moTa, hinhAnh, ngayKhoiChieu } = selectedMovie;
      setValue("tenPhim", tenPhim);
      setValue("trailer", trailer);
      setValue("moTa", moTa);
      setImg(hinhAnh);
      const time = new Date(ngayKhoiChieu);
      setDate(
        `${time.getFullYear()}-${
          time.getMonth() < 10 ? "0" : ""
        }${time.getMonth()}-${time.getDate() < 10 ? "0" : ""}${time.getDate()}`
      );
    } else {
      setValue("tenPhim", "");
      setValue("trailer", "");
      setValue("moTa", "");
      setImg("");
    }
  }, [setValue, selectedMovie]);

  useEffect(() => {
    if (watchImage && watchImage.length > 0) {
      const image = watchImage[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(image);
      fileReader.onload = (event) => {
        setImg(event.target.result);
      };
    }
  }, [watchImage]);

  return (
    <div>
      <h3 className="text-2xl uppercase pt-10">Edit movie</h3>
      <form
        className="mt-10 md:w-2/3"
        onSubmit={handleSubmit((data) => onSubmit(data))}
      >
        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10 mb-3">
          {/* TEN PHIM */}
          <div className="flex flex-col justify-start items-start">
            <label className="m-0">Tên phim</label>
            <input
              name="tenPhim"
              ref={register({ required: true })}
              className={`p-3 shadow-sm  w-full focus:outline-none rounded-sm ${
                errors?.tenPhim && "border-2 border-solid border-red-500"
              } ${isLight ? "bg-white" : "bg-gray-800"}`}
              placeholder="Tên phim"
              type="text"
            />
            {errors?.tenPhim && (
              <small className="text-sm text-red-500">
                Tên phim không được bỏ trống
              </small>
            )}
          </div>
          <div className="flex flex-col justify-start items-start">
            <label className="m-0">Mã nhóm</label>
            <input
              ref={register({ required: true })}
              className={`p-3 shadow-sm  w-full focus:outline-none rounded-sm  ${
                isLight ? "bg-white" : "bg-gray-800"
              }`}
              value="GP09"
              disabled
              type="text"
            />
          </div>
          <div className="flex flex-col justify-start items-start">
            <label className="m-0">Trailer</label>
            <input
              className={`p-3 shadow-sm  w-full focus:outline-none rounded-sm ${
                errors?.trailer && "border-2 border-solid border-red-500"
              } ${isLight ? "bg-white" : "bg-gray-800"}`}
              placeholder="Trailer"
              type="text"
              name="trailer"
              ref={register({ required: true })}
            />
            {errors?.trailer && (
              <small className="text-sm text-red-500">
                Trailer không được bỏ trống
              </small>
            )}
          </div>
          <div className="flex flex-col justify-start items-start">
            <label className="m-0">Ngay khoi chieu</label>
            <TextField
              onChange={(e) => setDate(e.target.value)}
              id="date"
              type="date"
              value={date}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            {!date && (
              <small className="text-sm text-red-500">
                Ngay khoi chieu không được bỏ trống
              </small>
            )}
          </div>
          <div className="flex flex-col justify-start items-start">
            <label className="m-0">Mô tả</label>
            <textarea
              rows="3"
              className={`p-3 shadow-sm  w-full focus:outline-none rounded-sm ${
                errors?.tenPhim && "border-2 border-solid border-red-500"
              } ${isLight ? "bg-white" : "bg-gray-800"}`}
              placeholder="Mô tả"
              type="text"
              name="moTa"
              ref={register({ required: true })}
            />
            {errors?.moTa && (
              <small className="text-sm text-red-500">
                Mô tả không được bỏ trống
              </small>
            )}
          </div>
        </div>

        {/* GRID */}

        {/*IMAGE */}
        {!selectedMovie && (
          <div className="mb-5 mt-5 md:flex flex-row justify-start items-start">
            <div className="md:mr-5 flex flex-col justify-start items-start">
              <div className="overflow-hidden shadow-sm relative w-28 cursor-pointer">
                <button
                  className={`${isLight ? "bg-white" : "bg-gray-800"} ${
                    errors.images && "border-red-500"
                  } py-3 w-full text-sm rounded text-coolGray-400 cursor-pointer`}
                >
                  Image
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 inline-block w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </button>
                <input
                  accept="image/*"
                  name="hinhAnh"
                  ref={register({ required: selectedMovie ? false : true })}
                  className={`cursor-pointer absolute top-0 left-0 opacity-0 w-full h-full pin-r pin-t`}
                  type="file"
                />
              </div>
              <small className="text-red-500">
                {errors.image && errors.image.type === "required"
                  ? "Image can not be blank"
                  : ""}
              </small>
            </div>
            {img ? (
              <img src={img} />
            ) : (
              <div
                className={`h-36 w-28 flex justify-center items-center ${
                  isLight ? "bg-gray-200" : "bg-gray-800"
                }`}
              >
                No image
              </div>
            )}
          </div>
        )}
        <button
          type="submit"
          className="bg-pink-600 focus:outline-none hover:bg-pink-500 text-white rounded-sm px-4 py-2"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
