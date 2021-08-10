import React, { useEffect, Fragment } from "react";
import "../../Assets/Styles/SCSS/Pages/detail.scss";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import DetailInfo from "../../Components/DetailInfo";
import DetailMain from "../../Components/DetailMain";
import { fetchMovieDetailRequest } from "../../redux/action/movieDetailAction/actions";
import { fetchTheaterList } from "../../redux/action/heThongRapAction/actions";
import { getApiVote } from "../../redux/action/voteAction/actions";

const Detail = () => {
  const history = useHistory();
  const params = useParams();
  const movieId = params.movieId;
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    async function fetchDate() {
      await Promise.all([
        dispatch(fetchMovieDetailRequest(movieId, history)),
        dispatch(fetchTheaterList()),
        dispatch(getApiVote()),
      ]);
    }
    fetchDate();
  }, [dispatch, movieId, history]);

  const { movieDetail } = useSelector((state) => state.movieDetailReducer);
  return (
    <Fragment>
      {movieDetail ? (
        <section className="detail">
          <DetailInfo />
          <DetailMain />
        </section>
      ) : (
        ""
      )}
    </Fragment>
  );
};
export default Detail;
