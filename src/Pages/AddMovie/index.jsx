import React from "react";
import { useForm } from "react-hook-form";

const AddMovie = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h3 className="text-2xl uppercase pt-10">Edit movie</h3>
      <form
        className="mt-10 md:w-2/3"
        onSubmit={handleSubmit((data) => submit(data))}
      >
        {/* GRID */}
        <div className="grid grid-cols-2 gap-10 mb-3">
          {/* MA NHOM */}
          <div className="flex flex-col justify-start items-start">
            <label className="m-0">Mã nhóm</label>
            <input
              className={`p-3 shadow-sm bg-white w-full focus:outline-none rounded-sm ${
                errors?.maNhom && "border-2 border-solid border-red-500"
              }`}
              placeholder="Mã nhóm"
              type="text"
              value="GP09"
              disabled
              {...register("maNhom", { required: true })}
            />
          </div>
          {/* TRAILER */}

          <div className="flex flex-col justify-start items-start">
            <label className="m-0">Trailer</label>
            <input
              className={`p-3 shadow-sm  md:w-full focus:outline-none rounded-sm ${
                errors?.trailer && "border-2 border-solid border-red-500"
              }`}
              placeholder="Trailer"
              type="text"
              {...register("trailer", { required: true })}
            />
            {errors?.trailer && (
              <small className="text-sm text-red-500">
                Trailer không được bỏ trống
              </small>
            )}
          </div>

          {/* MO TA */}
          <div className="flex flex-col justify-start items-start">
            <label className="m-0">Mô tả</label>
            <textarea
              rows="3"
              className={`p-3 shadow-sm  md:w-full focus:outline-none rounded-sm ${
                errors?.tenPhim && "border-2 border-solid border-red-500"
              }`}
              placeholder="Mô tả"
              type="text"
              {...register("moTa", { required: true })}
            />
            {errors?.moTa && (
              <small className="text-sm text-red-500">
                Mô tả không được bỏ trống
              </small>
            )}
          </div>

          {/* TEN PHIM */}
          <div className="flex flex-col justify-start items-start">
            <label className="m-0">Tên phim</label>
            <input
              className={`p-3 shadow-sm  md:w-full focus:outline-none rounded-sm ${
                errors?.tenPhim && "border-2 border-solid border-red-500"
              }`}
              placeholder="Tên phim"
              type="text"
              {...register("tenPhim", { required: true })}
            />
            {errors?.tenPhim && (
              <small className="text-sm text-red-500">
                Tên phim không được bỏ trống
              </small>
            )}
          </div>
        </div>

        {/* GRID */}

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
