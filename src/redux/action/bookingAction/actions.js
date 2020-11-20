import axios from 'axios';
import * as actions from './actionTypes';

const getBooking = (id) => async dispatch => {
    try{
        const res = await axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
            method:"GET",
        })
        if(res.status == 200 || res.status == 201) {
            dispatch({
                type: actions.GET_BOOKING,
                payload: res.data,
            })
        }
    }catch(err) {
        console.log(err);
    }
}

const selectSeat = (seat) => {
    return {
        type: actions.SELECT_SEAT,
        payload: seat,
    }
}

const countingDown = (time) =>{ 
    return  {
        type: actions.COUNTING_DOWN,
        payload: time,
    } 
}

const stopCounting = () => {
    return {
        type: actions.STOP_COUNTING_DOWN,
        payload: 90,
    }
}

const resetTime = () => {
    return {
        type: actions.RESET_TIME,
        payload: 90,
    }
}

export {getBooking, selectSeat, countingDown, stopCounting, resetTime};