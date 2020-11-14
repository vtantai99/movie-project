import axios from 'axios';
import * as actions from './actionTypes';

const getBooking = (id) => async dispatch => {
    try{
        const res = await axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
            method:"GET",
        })
        if(res.status == 200 || res.status == 201) {
            await dispatch({
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

export {getBooking, selectSeat};