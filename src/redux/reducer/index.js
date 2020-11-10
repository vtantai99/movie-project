import {combineReducers} from 'redux';
import movieReducer from './movieReducer';
import commonReducer from './commonReducer';
export default combineReducers({
    movieReducer,
    commonReducer
})