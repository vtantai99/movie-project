import { Button } from "@material-ui/core";
import Axios from "axios";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getApiVote } from "../../redux/action/voteAction/actions";
import moment from "moment";
import "moment/locale/vi";
import swal from "sweetalert";
import { useHistory, useLocation } from "react-router-dom";

const MovieDetailReview = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const { user } = useSelector((state) => state.userReducer);
  const { listVote } = useSelector((state) => state.voteReducer);
  const { isLight } = useSelector((state) => state.themeReducer);

  const [modalShow, setModalShow] = useState(false);
  const [rating, setRating] = useState(null);
  const [hoverRating, setHoverRating] = useState(null);
  const [slice, setSlice] = useState(3);

  const { register, handleSubmit, errors } = useForm({
    mode: "onTouched",
  });

  listVote.sort(
    (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
  );

  const handleCheckValue = (ratingValue) => {
    if (ratingValue === rating) {
      setRating(null);
      setHoverRating(null);
    } else {
      setRating(ratingValue);
    }
  };

  const handleOffModal = () => {
    setModalShow(false);
    setRating(0);
  };

  const handleOnModal = () => {
    if (user) {
      setModalShow(true);
    } else {
      swal({
        title: "Bạn cần phải đăng nhập",
        icon: "error",
        buttons: {
          cancel: "Huỷ bỏ",
          confirm: "Đồng ý",
        },
      }).then((confirm) => {
        if (confirm) {
          history.push({
            pathname: "/signIn",
            state: location.pathname,
          });
        }
      });
    }
  };

  const addLike = (id, newData) => async (dispatch) => {
    console.log(id, newData);
    try {
      const res = await Axios.put(
        `https://5fb3d99eb6601200168f7f86.mockapi.io/voteFilm/${id}`,
        newData
      );
      if (res.status === 200 || res.status === 201) {
        await dispatch(getApiVote());
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddLike = (id, data) => {
    if (user) {
      const newLikes = data.likes;
      const index = newLikes.findIndex((item) => item === user.hoTen);
      index === -1 ? newLikes.unshift(user.hoTen) : newLikes.splice(index, 1);
      dispatch(addLike(id, { ...data, likes: newLikes }));
    } else {
      swal({
        title: "Bạn cần phải đăng nhập",
        icon: "error",
        buttons: {
          cancel: "Huỷ bỏ",
          confirm: "Đồng ý",
        },
      }).then((confirm) => {
        if (confirm) {
          history.push({
            pathname: "/signIn",
            state: location.pathname,
          });
        }
      });
    }
  };

  const addVote = (data) => async (dispatch) => {
    try {
      const res = await Axios.post(
        "https://5fb3d99eb6601200168f7f86.mockapi.io/voteFilm",
        data
      );
      if (res.status === 200 || res.status === 201) {
        await handleOffModal();
        await dispatch(getApiVote());
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    const infoVote = {
      name: user.hoTen,
      comment: data.comment,
      rating: data.rating,
      image: `https://i.pravatar.cc/150?u=${user.taiKhoan}`,
      likes: [],
      time: new Date(),
    };
    dispatch(addVote(infoVote));
  };

  const handleSliceListVote = (method) => {
    if (method === "plus") {
      setSlice(slice + 3);
    } else setSlice(slice - 3);
  };

  const sliceListVote = listVote.slice(0, slice);

  const renderListVote = () => {
    return sliceListVote.map((item, index) => {
      const indexUser = item.likes.findIndex((item) => item === user?.hoTen);
      return (
        <div
          key={index}
          className={`${
            isLight ? "bg-white" : "bg-gray-800 text-white"
          } my-3 rounded-md py-2 px-3 transition"`}
        >
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-2"
                src={item.image}
                alt="avatar"
              />
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-xs">{moment(item.time).fromNow()}</p>
              </div>
            </div>
            <div className="flex">
              {[...Array(+item.rating)].map((item, index) => (
                <svg
                  key={index}
                  style={{ color: "#fa5238" }}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 cursor-pointer transition`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <p>{item.comment}</p>
          <hr className={`${!isLight && "bg-gray-700"} mt-2 mb-1`} />
          <div className="flex items-center">
            <Button
              className={`${
                !isLight && "text-white"
              } hover:text-red-500 transition bg-transparent`}
              onClick={() => handleAddLike(item.id, item)}
            >
              <span
                className={`${indexUser !== -1 && "text-red-500"} transition`}
              >
                <i className="far fa-thumbs-up mr-2" />
                {item.likes.length}
              </span>
            </Button>
            {item.likes.length > 0 && (
              <span className="text-sm">
                {indexUser !== -1 ? "Bạn" : item.likes[0]}
                {item.likes.length > 1 && (
                  <span> và {item.likes.length - 1} người khác</span>
                )}
                &nbsp;thích điều này
              </span>
            )}
          </div>
        </div>
      );
    });
  };

  return (
    <section className="flex justify-center text-gray-600">
      <div className="w-4/5 lg:w-1/2">
        <div
          className={`${
            isLight ? "bg-white" : "bg-gray-800 text-white"
          } transition rounded-md flex flex-col sm:flex-row justify-between items-center py-2 px-3 cursor-pointer`}
          onClick={() => handleOnModal()}
        >
          <div className="flex items-center">
            <img
              className="w-10 h-10 mr-2 rounded-full"
              src={
                user
                  ? `https://i.pravatar.cc/150?u=${user?.taiKhoan}`
                  : "https://uploads-ssl.webflow.com/5e4627609401e01182af1cce/5eb13bfdb4659efea4f8dace_profile-dummy.png"
              }
              alt="avatar"
            />
            <span>Bạn nghĩ gì về bộ phim này?</span>
          </div>
          <div className="flex">
            {[...Array(5)].map((item, index) => (
              <svg
                key={index}
                style={{ color: "#ccc" }}
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 cursor-pointer transition animate-bounce`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
        {renderListVote()}
        <div className="flex justify-center">
          {sliceListVote.length > 3 && (
            <Button
              onClick={() => handleSliceListVote("minus")}
              style={{
                background: "white",
                color: "#fa5238",
                border: "1px solid #fa5238",
                marginRight: "5px",
              }}
            >
              Thu gọn
            </Button>
          )}
          {sliceListVote.length < listVote.length && (
            <Button
              onClick={() => handleSliceListVote("plus")}
              style={{
                background: "#fa5238",
                color: "white",
                border: "1px solid #fa5238",
              }}
            >
              Xem thêm
            </Button>
          )}
        </div>
      </div>
      <Modal
        className="text-gray-600"
        show={modalShow}
        onHide={() => handleOffModal()}
        size="lg"
        centered
      >
        <Modal.Header className="text-xl font-medium" closeButton>
          NHẬN XÉT PHIM
        </Modal.Header>
        <Modal.Body className="relative">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col items-center">
              {errors.rating && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-500 animate-bounce"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 13l-5 5m0 0l-5-5m5 5V6"
                  />
                </svg>
              )}
              <div>
                {[...Array(5)].map((star, index) => {
                  const ratingValue = index + 1;
                  return (
                    <label>
                      <input
                        className="hidden"
                        onClick={() => handleCheckValue(ratingValue)}
                        checked={ratingValue === rating && true}
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        ref={register({ required: "Vui lòng đánh giá sao" })}
                      />
                      <svg
                        style={
                          ratingValue <= (hoverRating || rating)
                            ? { color: "#fa5238" }
                            : { color: "#ccc" }
                        }
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-10 w-10 cursor-pointer transition`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        onMouseOver={() => setHoverRating(ratingValue)}
                        onMouseLeave={() => setHoverRating(null)}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </label>
                  );
                })}
              </div>
              <small className="text-red-500 text-base">
                {errors.rating && errors.rating.message}
              </small>
            </div>
            <div className="my-3 w-100">
              <input
                className="w-100 rounded-md outline-none px-3 py-4 mb-1 border border-solid 
              focus:shadow-md transition"
                name="comment"
                type="text"
                placeholder="Bạn thấy bộ phim này như thế nào...."
                ref={register({
                  required: "Bạn chưa nêu cảm nghĩ",
                  minLength: {
                    value: 10,
                    message: "Có vẻ hơn ngắn, nhiệt tình lên nào !!",
                  },
                })}
                autoComplete="off"
              />
              <small className="text-red-500 text-base">
                {errors.comment && errors.comment.message}
              </small>
            </div>
            <div className="text-center">
              <Button
                type="submit"
                style={{
                  background: "linear-gradient(270deg, #fb4226, #ce3017)",
                  borderColor: "D33219",
                  color: "white",
                  fontWeight: "medium",
                }}
              >
                Đăng
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default MovieDetailReview;
