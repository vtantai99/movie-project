import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dropMovieTrailer } from "../../redux/action/movieDetailAction/actions";
import { Modal } from "react-bootstrap";
import { useEffect } from "react";

const Trailer = () => {
  const dispatch = useDispatch();
  const { movieTrailer } = useSelector((state) => state.movieDetailReducer);

  const [show, setShow] = useState(false);

  useEffect(() => {
    movieTrailer ? setShow(true) : setShow(false);
  }, [movieTrailer]);

  const handleClose = async () => {
    await setShow(false);
    await dispatch(dropMovieTrailer());
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <iframe
        className="trailer__video"
        src={`${movieTrailer}?autoplay=1&enablejsapi=1`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </Modal>
  );
};

export default Trailer;
