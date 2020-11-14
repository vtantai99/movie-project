import {combineReducers} from 'redux';
import movieDetailReducer from './movieDetailReducer';
import commonReducer from './commonReducer';
import userLoginReducer from './userLoginReducer';
import heThongRapReducer from './heThongRapReducer';
import bookingReducer from './bookingReducer';
export default combineReducers({
    movieDetailReducer,
    commonReducer,
    userLoginReducer,
    heThongRapReducer,
    bookingReducer,
})