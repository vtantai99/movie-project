import * as actions from '../../redux/action/bookingAction/actionTypes';

const initialState = {
    bookingList: {},
}

export default function bookingReducer(state = initialState, action) {
    switch(action.type) {
        case actions.GET_BOOKING: return {...state, bookingList: action.payload};
        case actions.SELECT_SEAT: {
            const bookingList = state.bookingList;
            const danhSachGhe = [...bookingList.danhSachGhe];
            const selectedSeat = action.payload;
            const index = danhSachGhe.findIndex(el => el.maGhe == selectedSeat.maGhe);
            //console.log(danhSachGhe.findIndex(el => el.maGhe));
            if(selectedSeat.dangChon) {
                danhSachGhe[index].dangChon = false;
            }else{
                danhSachGhe[index].dangChon = true;
            }
            const newBookingList = {...bookingList, danhSachGhe};
            console.log(newBookingList);
            //return state;
            return {...state, bookingList: newBookingList};
        }
        default: return state;
    }
}
