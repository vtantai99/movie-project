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
import { FormHelperText, Checkbox, FormControlLabel } from "@material-ui/core";
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
  const { register, handleSubmit, errors, watch } = useForm({
    mode: "onTouched",
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.userReducer);
  useEffect(() => {
    dispatch(hideError());
  }, []);
  console.log(errors.lastName);
  const onSubmit = (data) => {
    console.log(data);
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
            onSubmit={handleSubmit(onSubmit)}
            className={classes.form}
            noValidate
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="lastName"
                  autoComplete="off"
                  variant="outlined"
                  required
                  fullWidth
                  label="Họ"
                  inputRef={register({
                    required: "Xin vui lòng điền thông tin",
                    minLength: {
                      value: 2,
                      message: "Vui lòng điền đúng Họ",
                    },
                  })}
                  error={errors.lastName && true}
                />
                <FormHelperText error={errors.lastName && true}>
                  {errors.lastName && errors.lastName.message}
                </FormHelperText>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  autoComplete="off"
                  variant="outlined"
                  required
                  fullWidth
                  label="Tên"
                  inputRef={register({
                    required: "Xin vui lòng điền thông tin",
                    minLength: {
                      value: 2,
                      message: "Vui lòng điền đúng Tên",
                    },
                  })}
                  error={errors.firstName && true}
                />
                <FormHelperText error={errors.firstName && true}>
                  {errors.firstName && errors.firstName.message}
                </FormHelperText>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  name="taiKhoan"
                  autoComplete="off"
                  variant="outlined"
                  required
                  fullWidth
                  id="taiKhoan"
                  label="Tài khoản"
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
                  error={errors.taiKhoan && true}
                />
                <FormHelperText error={errors.taiKhoan && true}>
                  {errors.taiKhoan && errors.taiKhoan.message}
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
                  inputRef={register({
                    required: "Xin vui lòng điền thông tin",
                    pattern: {
                      value:
                        /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                      message:
                        "Mật khẩu bắt buộc bao gồm: Chữ viết hoa, chữ viết thường, số hoặc kí tự đặc biệt và phải ít nhất 8 kí tự. VD(Cute123@)",
                    },
                  })}
                  error={errors.matKhau && true}
                />
                <FormHelperText error={errors.matKhau && true}>
                  {errors.matKhau && errors.matKhau.message}
                </FormHelperText>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="matKhau2"
                  variant="outlined"
                  required
                  fullWidth
                  type="password"
                  label="Xác nhận mật khẩu"
                  inputRef={register({
                    required: "Xin vui lòng điền thông tin",
                    validate: (value) =>
                      value === watch("matKhau") || "Xác nhận mật khẩu sai",
                  })}
                  error={errors.matKhau2 && true}
                />
                <FormHelperText error={errors.matKhau2 && true}>
                  {errors.matKhau2 && errors.matKhau2.message}
                </FormHelperText>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="email"
                  autoComplete="off"
                  type="email"
                  variant="outlined"
                  required
                  fullWidth
                  label="Email"
                  inputRef={register({
                    required: "Xin vui lòng điền thông tin",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Email, VD(user123@gmail.com)",
                    },
                  })}
                  error={errors.email && true}
                />
                <FormHelperText error={errors.email && true}>
                  {errors.email && errors.email.message}
                </FormHelperText>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="soDt"
                  variant="outlined"
                  autoComplete="off"
                  required
                  fullWidth
                  label="Số điện thoại"
                  inputRef={register({
                    required: "Xin vui lòng điền thông tin",
                    pattern: {
                      value: /^\d{10}$/,
                      message:
                        "Số điện thoại không hợp lệ, hãy chắc chắn bạn nhập đủ 10 số. VD(0987654321)",
                    },
                  })}
                  error={errors.soDt && true}
                />{" "}
                <FormHelperText error={errors.soDt && true}>
                  {errors.soDt && errors.soDt.message}
                </FormHelperText>
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
                <NavLink to="/login"> Đăng nhập</NavLink>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}
