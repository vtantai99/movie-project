import * as actions from '../../redux/action/bookingAction/actionTypes';

const initialState = {
    bookingList: {},
    countDownTime: 90,
}


export default function bookingReducer(state = initialState, action) {
    switch(action.type) {
        case actions.GET_BOOKING: {
            return {...state, bookingList: action.payload};
        }
        case actions.SELECT_SEAT: {
            const bookingList = state.bookingList;
            const danhSachGhe = [...bookingList.danhSachGhe];
            const selectedSeat = action.payload;
            const index = danhSachGhe.findIndex(el => el.maGhe == selectedSeat.maGhe);
            if(selectedSeat.dangChon) {
                danhSachGhe[index].dangChon = false;
            }else{
                danhSachGhe[index].dangChon = true;
            }
            const newBookingList = {...bookingList, danhSachGhe};
            return {...state, bookingList: newBookingList};
        }
        case actions.COUNTING_DOWN: case actions.STOP_COUNTING_DOWN: case actions.RESET_TIME: {
            return {...state, countDownTime: action.payload};
        }
        default: return state;
    }
}
