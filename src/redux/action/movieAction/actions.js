import * as actions from './actionTypes';

import axios from 'axios';

const fetchMovieDetailRequest = movieCode => async disaptch => {
    try{
        const res = await axios({
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieCode}`,
            method:"GET",
        })
        if(res.status == 200 || res.status == 201) {
            const data = await res.data;
            await disaptch(fetchMovieDetailSuccess(data));
        }
    }catch(err) {
        console.log(err);
    }
}

const fetchMovieDetailSuccess = (movieDetail) => disaptch => {
    disaptch({
        type: actions.FETCH_MOVIE_DETAIL,
        payload: movieDetail,
    });
}

export {fetchMovieDetailRequest};