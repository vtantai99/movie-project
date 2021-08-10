import React, { useEffect, useState } from "react";
import "../../Assets/Styles/SCSS/Pages/signUp.scss";
import {
  Avatar,
  Button,
  CssBaseline,
  FormHelperText,
  Grid,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  OutlinedInput,
  Typography,
  Container,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  signUpRequest,
  hideError,
} from "../../redux/action/userAction/actions";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px 0",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  alert: { margin: "10px 0" },
  submit: {
    margin: "10px 0",
    padding: "10px 0",
  },
  container: {
    background: "#fff",
    borderRadius: "10px",
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const { register, handleSubmit, errors, watch } = useForm();

  const { error } = useSelector((state) => state.userReducer);

  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  useEffect(() => {
    dispatch(hideError());
  }, [dispatch]);

  const onSubmit = (data) => {
    const { hoTen, matKhau, soDt, taiKhoan, email } = data;
    const userData = {
      taiKhoan,
      matKhau,
      email,
      soDt,
      maNhom: "GP09",
      maLoaiNguoiDung: "KhachHang",
      hoTen,
    };
    dispatch(signUpRequest(userData, "signUpUser", history));
  };

  return (
    <div className="signUp">
      <Container className={classes.container} component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng ký
          </Typography>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={classes.form}
            noValidate
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl
                  variant="outlined"
                  fullWidth
                  error={errors.hoTen && true}
                >
                  <InputLabel htmlFor="hoTen">Họ tên</InputLabel>
                  <OutlinedInput
                    id="hoTen"
                    name="hoTen"
                    type="text"
                    inputRef={register({
                      required: "Xin vui lòng điền thông tin",
                      minLength: {
                        value: 2,
                        message: "Vui lòng điền đúng Họ tên",
                      },
                    })}
                    labelWidth={50}
                  />
                  <FormHelperText error={errors.hoTen && true}>
                    {errors.hoTen && errors.hoTen.message}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  variant="outlined"
                  fullWidth
                  error={errors.taiKhoan && true}
                >
                  <InputLabel htmlFor="taiKhoan">Tài khoản</InputLabel>
                  <OutlinedInput
                    id="taiKhoan"
                    name="taiKhoan"
                    type="text"
                    inputRef={register({
                      required: "Xin vui lòng điền thông tin",
                      minLength: {
                        value: 6,
                        message: "Tài khoản phải trên 6 kí tự",
                      },
                      maxLength: {
                        value: 10,
                        message: "Tài khoản không được quá 10 kí tự",
                      },
                    })}
                    labelWidth={70}
                  />
                  <FormHelperText error={errors.taiKhoan && true}>
                    {errors.taiKhoan && errors.taiKhoan.message}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  variant="outlined"
                  fullWidth
                  error={errors.matKhau && true}
                >
                  <InputLabel htmlFor="matKhau">Mật khẩu</InputLabel>
                  <OutlinedInput
                    id="matKhau"
                    name="matKhau"
                    type={showPass ? "text" : "password"}
                    autoComplete="off"
                    inputRef={register({
                      required: "Xin vui lòng nhập thông tin",
                      pattern: {
                        value:
                          /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                        message:
                          "Mật khẩu bắt buộc bao gồm: Chữ viết hoa, chữ viết thường, số hoặc kí tự đặc biệt và phải ít nhất 8 kí tự. VD(Cute123@)",
                      },
                    })}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onMouseDown={() => setShowPass(true)}
                          onMouseUp={() => setShowPass(false)}
                          aria-label="toggle password visibility"
                          edge="end"
                        >
                          {showPass ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={70}
                  />
                  <FormHelperText error={errors.matKhau && true}>
                    {errors.matKhau && errors.matKhau.message}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  variant="outlined"
                  fullWidth
                  error={errors.matKhau2 && true}
                >
                  <InputLabel htmlFor="matKhau2">Xác nhận mật khẩu</InputLabel>
                  <OutlinedInput
                    id="matKhau2"
                    type={showPass2 ? "text" : "password"}
                    name="matKhau2"
                    inputRef={register({
                      required: "Xin vui lòng nhập thông tin",
                      validate: (value) =>
                        value === watch("matKhau") || "Xác nhận mật khẩu sai",
                    })}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onMouseDown={() => setShowPass2(true)}
                          onMouseUp={() => setShowPass2(false)}
                          aria-label="toggle password visibility"
                          edge="end"
                        >
                          {showPass2 ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={140}
                  />
                  <FormHelperText error={errors.matKhau2 && true}>
                    {errors.matKhau2 && errors.matKhau2.message}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  variant="outlined"
                  fullWidth
                  error={errors.email && true}
                >
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <OutlinedInput
                    id="email"
                    name="email"
                    type="text"
                    inputRef={register({
                      required: "Xin vui lòng điền thông tin",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Email, VD(user123@gmail.com)",
                      },
                    })}
                    labelWidth={50}
                  />
                  <FormHelperText error={errors.email && true}>
                    {errors.email && errors.email.message}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  variant="outlined"
                  fullWidth
                  error={errors.soDt && true}
                >
                  <InputLabel htmlFor="soDt">Số điện thoại</InputLabel>
                  <OutlinedInput
                    id="soDt"
                    name="soDt"
                    type="text"
                    inputRef={register({
                      required: "Xin vui lòng điền thông tin",
                      pattern: {
                        value: /^\d{10}$/,
                        message:
                          "Số điện thoại không hợp lệ, hãy chắc chắn bạn nhập đủ 10 số. VD(0987654321)",
                      },
                    })}
                    labelWidth={100}
                  />
                  <FormHelperText error={errors.soDt && true}>
                    {errors.soDt && errors.soDt.message}
                  </FormHelperText>
                </FormControl>
              </Grid>
            </Grid>
            <FormControlLabel
              name="check"
              control={<Checkbox value="remember" color="primary" />}
              label="Hứa là sẽ mua vé nhiều"
              inputRef={register({
                required: "Xin vui lòng hứa",
              })}
            />
            <FormHelperText error={errors.check && true}>
              {errors.check && errors.check.message}
            </FormHelperText>
            {error && (
              <Alert
                variant="filled"
                severity="error"
                style={{ marginTop: "10px" }}
              >
                {error}
              </Alert>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Đăng ký
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                Bạn đã có tài khoản?
                <NavLink to="/signIn"> Đăng nhập</NavLink>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}
