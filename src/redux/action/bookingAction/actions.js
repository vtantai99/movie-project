import axios from 'axios';
import * as actions from './actionTypes';
import swal from 'sweetalert';

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

const nextStep = (step) => {
    return{
        type:actions.NEXT_STEP,
        payload: step,
    }
}

const prevStep = (step) => {
    return {
        type: actions.PREV_STEP,
        payload: step
    }
}

const bookingRequest = (maLichChieu, user, danhSachVe, history) => async dispatch => {
    console.log(maLichChieu, user, danhSachVe);
    try{
        
        const res = await axios({
            method: "POST",
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
            data: {
              maLichChieu,
              danhSachVe,
              taiKhoanNguoiDung: user.taiKhoan,
            },
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
          });
        if(res.status === 200 || res.status === 201) {
            swal({
                title: "Dat ve thanh cong",
                icon: "success",
                button: "Ok!",
              }).then((yes) => {
                  if(yes) {
                      history.push('/');
                  }else{
                    history.push('/');
                  }
              });
        }
    }catch(err) {
        console.log(err);
    }
}

export {getBooking, selectSeat, countingDown, stopCounting, resetTime, nextStep, prevStep, bookingRequest};