import * as actions from './actionTypes';
import axios from 'axios';
import swal from 'sweetalert';
const registerUser = (user, history) => async dispatch => {
    try{
        const res = await axios({
            method:"POST",
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
            data: user,
        })
        if(res.status === 200 || res.status === 201) {
            swal({
                title: "Đăng kí thành công",
                text: "Bạn có thể đăng nhập ngay bây giờ",
                icon:"success",
            }).then(() => {
                history.push('/login');
            })
        }
    }catch(err) {
        console.log(err);
    }
}

export {registerUser};