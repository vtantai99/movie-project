import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dropMovieTrailer } from "../../redux/action/movieDetailAction/actions";
import { Modal } from "react-bootstrap";
import { useEffect } from "react";

const Trailer = () => {
  const dispatch = useDispatch();
  const { movieTrailer } = useSelector((state) => state.movieDetailReducer);
  const [show, setShow] = useState(true);
  const handleClose = () => {
    setShow(false);
    dispatch(dropMovieTrailer());
  };
  useEffect(() => {
    movieTrailer ? setShow(true) : setShow(false);
  }, [movieTrailer]);
  return (
    <Modal
      onHide={handleClose}
      size="lg"
      show={show}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <iframe
        className="trailer"
        src={`${movieTrailer}?autoplay=1&enablejsapi=1`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </Modal>
  );
};

export default Trailer;
