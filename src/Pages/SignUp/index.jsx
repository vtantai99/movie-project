import React, { useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "./index.scss";
import { NavLink, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FormHelperText } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/action/userSignUpAction/actions";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container: {
    background: "#fff",
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const { register, handleSubmit, errors, watch } = useForm();
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const history = useHistory();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log(data);
    const {
      firstName,
      lastName,
      matKhau,
      matKhau2,
      soDt,
      taiKhoan,
      email,
    } = data;
    const userData = {
      taiKhoan,
      matKhau,
      email,
      soDt,
      maNhom: "GP09",
      maLoaiNguoiDung: "KhachHang",
      hoTen: lastName + firstName,
    };
    dispatch(registerUser(userData, history));
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
            Sign up
          </Typography>
          <form
            onSubmit={handleSubmit((data) => onSubmit(data))}
            className={classes.form}
            noValidate
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="lastName"
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Họ"
                  autoFocus
                  inputRef={register({ required: true })}
                  error={errors.lastName ? true : false}
                />
                <FormHelperText error={errors.lastName ? true : false}>
                  {errors.lastName && errors.lastName.type === "required"
                    ? "Họ không được trống"
                    : ""}
                </FormHelperText>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Tên"
                  name="firstName"
                  autoComplete="lname"
                  inputRef={register({ required: true })}
                  error={errors.firstName ? true : false}
                />
                <FormHelperText error={errors.firstName ? true : false}>
                  {errors.firstName && errors.firstName.type === "required"
                    ? "Tên không được trống"
                    : ""}
                </FormHelperText>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="fname"
                  name="taiKhoan"
                  variant="outlined"
                  required
                  fullWidth
                  id="taiKhoan"
                  label="Tài khoản"
                  autoFocus
                  inputRef={register({ required: true, minLength: 6 })}
                  error={errors.taiKhoan ? true : false}
                />
                <FormHelperText error={errors.taiKhoan ? true : false}>
                  {errors.taiKhoan && errors.taiKhoan.type === "required"
                    ? "Tài khoản không được trống"
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
                  autoComplete="fname"
                  name="matKhau"
                  variant="outlined"
                  required
                  fullWidth
                  id="matKhau"
                  label="Mật khẩu"
                  type="password"
                  autoFocus
                  inputRef={register({ required: true })}
                  error={errors.matKhau ? true : false}
                />
                <FormHelperText error={errors.matKhau ? true : false}>
                  {errors.matKhau && errors.matKhau.type === "required"
                    ? "Mật khẩu không được để trống"
                    : ""}
                </FormHelperText>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="matKhau2"
                  type="password"
                  label="Xác nhận mật khẩu"
                  name="matKhau2"
                  autoComplete="lname"
                  inputRef={register({
                    required: true,
                    validate: (value) => value === watch("matKhau"),
                  })}
                  error={errors.matKhau2 ? true : false}
                />
                <FormHelperText error={errors.matKhau2 ? true : false}>
                  {errors.matKhau2 && errors.matKhau2.type === "required"
                    ? "Xac thuc không được để trống"
                    : ""}
                </FormHelperText>
                <FormHelperText error={errors.matKhau2 ? true : false}>
                  {errors.matKhau2 && errors.matKhau2.type === "validate"
                    ? "Xac thuc sai"
                    : ""}
                </FormHelperText>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  autoFocus
                  inputRef={register({ required: true })}
                  error={errors.email ? true : false}
                />
                <FormHelperText error={errors.email ? true : false}>
                  {errors.email && errors.email.type === "required"
                    ? "Email không được để trống"
                    : ""}
                </FormHelperText>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="soDt"
                  type="number"
                  label="Số điện thoại"
                  name="soDt"
                  autoComplete="lname"
                  inputRef={register({
                    required: true,
                    minLength: 10,
                    valueAsNumber: true,
                  })}
                  error={errors.soDt ? true : false}
                />
                <FormHelperText error={errors.soDt ? true : false}>
                  {errors.soDt && errors.soDt.type === "required"
                    ? "Số điện thoại không được để trống"
                    : ""}
                </FormHelperText>
                <FormHelperText error={errors.soDt ? true : false}>
                  {errors.soDt && errors.soDt.type === "valueAsNumber"
                    ? "So dien thoai khong hop le"
                    : ""}
                </FormHelperText>
                <FormHelperText error={errors.soDt ? true : false}>
                  {errors.soDt && errors.soDt.type === "minLength"
                    ? "Số điện thoại phai du 10 so"
                    : ""}
                </FormHelperText>
              </Grid>

              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <NavLink to="/login" href="#" variant="body2">
                  Already have an account? Sign in
                </NavLink>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
