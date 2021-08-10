import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@material-ui/core";
import {
  addMovie,
  modalMovieRequest,
  updateFilm,
} from "../../redux/action/movieAdminAction/actions";
import format from "date-format";
import { useState } from "react";

const AdminMovieModal = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, errors, setValue, watch } = useForm({
    mode: "onTouched",
  });

  const { user } = useSelector((state) => state.userReducer);
  const { isLight } = useSelector((state) => state.themeReducer);
  const { modalMovie } = useSelector((state) => state.movieAdminReducer);
  const { statusModal, infoMovie } = modalMovie;

  const [imageFile, setImageFile] = useState(null);

  const watchImage = watch("upImage"); // theo dõi value của upImage(file lấy ảnh)

  useEffect(() => {
    if (watchImage && watchImage.length > 0) {
      const image = watchImage[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        setImageFile(e.target.result);
      };
    }
  }, [watchImage]);

  useEffect(() => {
    if (infoMovie) {
      setValue("tenPhim", infoMovie.tenPhim);
      setValue("trailer", infoMovie.trailer);
      setValue("danhGia", infoMovie.danhGia);
      setValue(
        "ngayKhoiChieu",
        format(`yyyy-MM-dd`, new Date(infoMovie.ngayKhoiChieu))
      );
      setValue("moTa", infoMovie.moTa);
    }
  }, [infoMovie, setValue]);

  const handleOffModal = async () => {
    await setImageFile(null);
    await dispatch(modalMovieRequest({ statusModal: false }));
  };

  // console.log(infoMovie);

  const onSubmit = (data) => {
    const movieUpdate = {
      maPhim: infoMovie?.maPhim || "",
      tenPhim: data.tenPhim,
      biDanh: infoMovie?.biDanh || "",
      trailer: data.trailer,
      hinhAnh: data.upImage[0] || infoMovie?.hinhAnh,
      moTa: data.moTa,
      maNhom: "GP09",
      ngayKhoiChieu: format(`dd-MM-yyyy`, new Date(data.ngayKhoiChieu)),
      danhGia: +data.danhGia,
    };
    console.log(movieUpdate);
    const formData = new FormData();
    for (const key in movieUpdate) {
      formData.append(key, movieUpdate[key]);
      console.log(formData.get(key));
    }
    if (infoMovie) {
      dispatch(updateFilm(formData, user));
    } else {
      dispatch(addMovie(formData));
    }
  };

  return (
    <Modal
      className={`${isLight ? "text-gray-600" : "text-white"}`}
      show={statusModal}
      size="lg"
      centered
      onHide={() => handleOffModal()}
    >
      <Modal.Header
        className={`${!isLight && "bg-gray-700"} font-medium text-xl`}
        closeButton
      >
        {infoMovie ? "CẬP NHẬT PHIM" : "THÊM PHIM"}
      </Modal.Header>
      <Modal.Body className={`${isLight ? "bg-gray-100" : "bg-gray-800"}`}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 grid-rows-4 gap-3">
            <div className="col-span-1 row-span-4 relative">
              <img
                className="absolute w-100 h-100 top-0 object-contain rounded-sm"
                src={
                  imageFile ||
                  infoMovie?.hinhAnh ||
                  "https://www.persolvietnam.com/media/COMMON/images/no-image.png"
                }
                alt="imageMovie"
              />
            </div>
            <div className="col-start-2 col-end-3 row-span-1 flex flex-col">
              <label className="cursor-pointer font-medium" htmlFor="tenPhim">
                Tên phim
              </label>
              <input
                className={`${
                  !isLight && "bg-gray-700"
                } w-100 outline-none shadow-sm rounded-sm p-2`}
                id="tenPhim"
                name="tenPhim"
                type="text"
                ref={register(
                  !infoMovie && {
                    required: "Xin vui lòng điền thông tin",
                    minLength: {
                      value: 3,
                      message:
                        "Tên phim quá ngắn, bạn đã đảm bảo đúng tên phim",
                    },
                  }
                )}
              />
              <small className="text-red-500">
                {errors.tenPhim && errors.tenPhim.message}
              </small>
            </div>
            <div className="col-start-2 col-end-3 flex flex-col">
              <label className="cursor-pointer font-medium" htmlFor="upImage">
                Hình ảnh
              </label>
              <input
                className={`${
                  !isLight && "bg-gray-700"
                } w-100 outline-none shadow-sm rounded-sm p-2`}
                accept=".jpg, .png"
                id="upImage"
                name="upImage"
                type="file"
                ref={register(
                  !infoMovie && {
                    required: "Xin vui lòng tải lên ảnh",
                  }
                )}
              />
              <small className="text-red-500">
                {errors.upImage && errors.upImage.message}
              </small>
            </div>
            <div className="col-start-2 col-end-3 flex flex-col">
              <label className="cursor-pointer font-medium" htmlFor="trailer">
                Trailer
              </label>
              <input
                className={`${
                  !isLight && "bg-gray-700"
                } w-100 outline-none shadow-sm rounded-sm p-2`}
                id="trailer"
                name="trailer"
                type="text"
                ref={register(
                  !infoMovie && {
                    required: "Xin vui lòng nhập thông tin",
                    pattern: {
                      value:
                        /https?:\/\/w{0,3}\w*?\.(\w*?\.)?\w{2,3}\S*|www\.(\w*?\.)?\w*?\.\w{2,3}\S*|(\w*?\.)?\w*?\.\w{2,3}\S*/,
                      message: "Đây không phải là link trailer phim",
                    },
                  }
                )}
              />
              <small className="text-red-500">
                {errors.trailer && errors.trailer.message}
              </small>
            </div>

            <div className="col-start-2 col-end-3 flex flex-col">
              <label
                className="cursor-pointer  font-medium"
                htmlFor="ngayKhoiChieu"
              >
                Ngày khởi chiếu
              </label>
              <TextField
                className={`${
                  !isLight && "bg-gray-700"
                } w-100 outline-none shadow-sm rounded-sm p-2`}
                id="ngayKhoiChieu"
                name="ngayKhoiChieu"
                type="date"
                inputRef={register(
                  !infoMovie && {
                    required: "Xin vui lòng điền thông tin",
                  }
                )}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <small className="text-red-500">
                {errors.ngayKhoiChieu && errors.ngayKhoiChieu.message}
              </small>
            </div>
            {infoMovie && (
              <div className="col-span-2 flex flex-col">
                <label className="cursor-pointer font-medium" htmlFor="danhGia">
                  Đánh giá
                </label>
                <input
                  className={`${
                    !isLight && "bg-gray-700"
                  } w-100 outline-none shadow-sm rounded-sm p-2`}
                  id="danhGia"
                  name="danhGia"
                  type="number"
                  min="1"
                  max="10"
                  ref={register(
                    !infoMovie && {
                      required: "Xin vui lòng điền thông tin",
                    }
                  )}
                />
                <small className="text-red-500">
                  {errors.danhGia && errors.danhGia.message}
                </small>
              </div>
            )}

            <div className="col-span-2 flex flex-col">
              <label className="cursor-pointer font-medium" htmlFor="moTa">
                Mô tả
              </label>
              <textarea
                className={`${
                  !isLight && "bg-gray-700"
                } w-100 outline-none shadow-sm rounded-sm p-2`}
                name="moTa"
                id="moTa"
                rows="4"
                ref={register(
                  !infoMovie && {
                    required: "Xin vui lòng điền thông tin",
                    minLength: {
                      value: 100,
                      message: "Mô tả quá ngắn, bắt buộc trên 100 ký tự nhé",
                    },
                  }
                )}
              ></textarea>
              <small className="text-red-500">
                {errors.moTa && errors.moTa.message}
              </small>
            </div>
            <div className="col-span-2 flex justify-center">
              {infoMovie ? (
                <Button
                  type="submit"
                  style={{
                    background: "#007be8",
                    color: "#fff",
                  }}
                >
                  Cập nhật phim
                </Button>
              ) : (
                <Button
                  type="submit"
                  style={{
                    background: "#007be8",
                    color: "#fff",
                  }}
                >
                  Thêm phim
                </Button>
              )}
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AdminMovieModal;
