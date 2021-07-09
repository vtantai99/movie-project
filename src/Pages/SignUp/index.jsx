import React, { useEffect } from "react";
import "../../Assets/Styles/SCSS/Pages/signUp.scss";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Alert } from "@material-ui/lab";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { NavLink, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FormHelperText } from "@material-ui/core";
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
  const { register, handleSubmit, errors, watch } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.userReducer);
  useEffect(() => {
    dispatch(hideError());
  }, []);
  const onSubmit = (data) => {
    const { firstName, lastName, matKhau, soDt, taiKhoan, email } = data;
    const userData = {
      taiKhoan,
      matKhau,
      email,
      soDt,
      maNhom: "GP09",
      maLoaiNguoiDung: "KhachHang",
      hoTen: lastName + firstName,
    };
    dispatch(signUpRequest(userData, history));
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
            onSubmit={handleSubmit((data) => onSubmit(data))}
            className={classes.form}
            noValidate
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="lastName"
                  variant="outlined"
                  required
                  fullWidth
                  label="Họ"
                  autoFocus
                  inputRef={register({ required: true })}
                  error={errors.lastName ? true : false}
                />
                <FormHelperText error={errors.lastName ? true : false}>
                  {errors.lastName && errors.lastName.type === "required"
                    ? "Họ không được bỏ trống"
                    : ""}
                </FormHelperText>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Tên"
                  name="firstName"
                  inputRef={register({ required: true })}
                  error={errors.firstName ? true : false}
                />
                <FormHelperText error={errors.firstName ? true : false}>
                  {errors.firstName && errors.firstName.type === "required"
                    ? "Tên không được bỏ trống"
                    : ""}
                </FormHelperText>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  name="taiKhoan"
                  variant="outlined"
                  required
                  fullWidth
                  id="taiKhoan"
                  label="Tài khoản"
                  inputRef={register({ required: true, minLength: 6 })}
                  error={errors.taiKhoan ? true : false}
                />
                <FormHelperText error={errors.taiKhoan ? true : false}>
                  {errors.taiKhoan && errors.taiKhoan.type === "required"
                    ? "Tài khoản không được bỏ trống"
                    : ""}
                </FormHelperText>
                <FormHelperText error={errors.taiKhoan ? true : false}>
                  {errors.taiKhoan && errors.taiKhoan.type === "minLength"
                    ? "Tài khoản phải dài hơn 6 kí tự"
                    : ""}
                </FormHelperText>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="matKhau"
                  variant="outlined"
                  required
                  fullWidth
                  label="Mật khẩu"
                  type="password"
                  inputRef={register({ required: true })}
                  error={errors.matKhau ? true : false}
                />
                <FormHelperText error={errors.matKhau ? true : false}>
                  {errors.matKhau && errors.matKhau.type === "required"
                    ? "Mật khẩu không được để bỏ trống"
                    : ""}
                </FormHelperText>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  type="password"
                  label="Xác nhận mật khẩu"
                  name="matKhau2"
                  inputRef={register({
                    required: true,
                    validate: (value) => value === watch("matKhau"),
                  })}
                  error={errors.matKhau2 ? true : false}
                />
                <FormHelperText error={errors.matKhau2 ? true : false}>
                  {errors.matKhau2 && errors.matKhau2.type === "required"
                    ? "Xác nhận mật khẩu không được để bỏ trống"
                    : ""}
                </FormHelperText>
                <FormHelperText error={errors.matKhau2 ? true : false}>
                  {errors.matKhau2 && errors.matKhau2.type === "validate"
                    ? "Xác nhận mật khẩu sai"
                    : ""}
                </FormHelperText>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="email"
                  type="email"
                  variant="outlined"
                  required
                  fullWidth
                  label="Email"
                  inputRef={register({ required: true })}
                  error={errors.email ? true : false}
                />
                <FormHelperText error={errors.email ? true : false}>
                  {errors.email && errors.email.type === "required"
                    ? "Email không được để bỏ trống"
                    : ""}
                </FormHelperText>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Số điện thoại"
                  name="soDt"
                  inputRef={register({
                    required: true,
                    minLength: 10,
                    valueAsNumber: true,
                  })}
                  error={errors.soDt ? true : false}
                />
                <FormHelperText error={errors.soDt ? true : false}>
                  {errors.soDt && errors.soDt.type === "required"
                    ? "Số điện thoại không được để bỏ trống"
                    : ""}
                </FormHelperText>
                <FormHelperText error={errors.soDt ? true : false}>
                  {errors.soDt && errors.soDt.type === "valueAsNumber"
                    ? "Số điện thoại không hợp lệ"
                    : ""}
                </FormHelperText>
                <FormHelperText error={errors.soDt ? true : false}>
                  {errors.soDt && errors.soDt.type === "minLength"
                    ? "Số điện thoại phải đủ 10 số"
                    : ""}
                </FormHelperText>
              </Grid>
            </Grid>
            {error ? (
              <Alert
                variant="filled"
                severity="error"
                style={{ marginTop: "10px" }}
              >
                {error}
              </Alert>
            ) : (
              ""
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
                <NavLink to="/login"> Đăng nhập</NavLink>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}
