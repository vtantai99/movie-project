import {combineReducers} from 'redux';
import movieDetailReducer from './movieDetailReducer';
import commonReducer from './commonReducer';
import userLoginReducer from './userLoginReducer';
export default combineReducers({
    movieDetailReducer,
    commonReducer,
    userLoginReducer,
})