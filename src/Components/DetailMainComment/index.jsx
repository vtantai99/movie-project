import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getApiVote } from "../../redux/action/voteAction/actions";

const MovieDetailReview = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  const { listVote } = useSelector((state) => state.voteReducer);

  const [modalShow, setModalShow] = useState(false);
  const [rating, setRating] = useState(null);
  const [hoverRating, setHoverRating] = useState(null);

  useEffect(() => {
    dispatch(getApiVote());
  }, [dispatch]);

  const handleCheckValue = (ratingValue) => {
    if (ratingValue === rating) {
      setRating(null);
      setHoverRating(null);
    } else {
      setRating(ratingValue);
    }
  };

  const { register, handleSubmit, errors } = useForm();

  const handleOffModal = () => {
    setModalShow(false);
    setRating(0);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const renderListVote = () => {
    return listVote.map((item, index) => (
      <div key={index} className="flex bg-white"></div>
    ));
  };

  return (
    <section className="flex justify-center text-gray-600">
      <div className=" w-1/2">
        <div
          className="bg-white rounded-sm flex justify-between items-center py-2 px-3 cursor-pointer
          "
          onClick={() => setModalShow(true)}
        >
          <div className="flex items-center">
            <img
              className="w-10 h-10 mr-2"
              src="https://cyberlearn-21.web.app/img/avatar.png"
              alt="avatar"
            />
            <span>{user.hoTen}, bạn nghĩ gì về bộ phim này?</span>
          </div>
          <div className="flex">
            {[...Array(5)].map((item, index) => (
              <svg
                key={index}
                style={{ color: "#fa5238" }}
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
        <Modal.Body>
          <form
            className="flex flex-col items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <label>
                    <input
                      className="hidden"
                      onClick={() => handleCheckValue(ratingValue)}
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      ref={register}
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
            <input
              className="w-3/4 rounded-md outline-none px-3 py-4 my-3 border border-solid 
              focus:shadow-md transition"
              name="comment"
              type="text"
              placeholder="Bạn thấy bộ phim này như thế nào...."
              ref={register}
              autoComplete="off"
            />
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
          </form>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default MovieDetailReview;
