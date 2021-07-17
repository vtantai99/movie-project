import * as actions from './actionTypes';
import axios from 'axios';
import swal from "sweetalert";


export const addMovie = (movie,history) => async dispatch => {
    axios({
        method:"POST",
        url:'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh',
        data:movie
    }).then(() => swal({
        title:"Them phim thanh cong",
        icon:"success",
        buttons:{
            confirm:"OK"
        }
    }).then(() => {
        history.push('/admin/movieList')
    })).catch(err => {
        console.log(err);
    })
}

const showModal = () => {
   
}