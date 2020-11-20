import * as actions from './actionTypes';
import {startLoading, stopLoading} from '../commonAction/actions';

import axios from 'axios';

const fetchMovieDetailRequest = movieCode => async disaptch => {
    disaptch(startLoading());
    try{
        const res = await axios({
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieCode}`,
            method:"GET",
        })
        if(res.status == 200 || res.status == 201) {
            const data = await res.data;
            await disaptch(fetchMovieDetailSuccess(data));
            await disaptch(stopLoading());
        }
    }catch(err) {
        alert("No movie found")
    }
}

const fetchMovieDetailSuccess = (movieDetail) => disaptch => {
    disaptch({
        type: actions.FETCH_MOVIE_DETAIL,
        payload: movieDetail,
    });
}

const fetchMovieDetailFailure = (err) => {
    
}

const getMovieTrailer = (trailer) => {
    return {
        type: actions.GET_MOVIE_TRAILER,
        payload: trailer,
    }
}

const dropMovieTrailer = () => {
    return {
        type: actions.GET_MOVIE_TRAILER,
        payload: '',
    }
}

const switchMovieDetailNav = (nav) => {
    return{
        type: actions.SWITCH_MOVIE_DETAIL_NAV,
        payload: nav,
    }
}

export {fetchMovieDetailRequest, getMovieTrailer, dropMovieTrailer, switchMovieDetailNav};