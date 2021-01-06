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
import { FormGroup, FormHelperText } from "@material-ui/core";
import {
  hideError,
  loginRequest,
} from "../../redux/action/userLoginAction/actions";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "@material-ui/lab";

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container: {
    background: "#fff",
    paddingBottom: "55px",
    borderRadius: "5px",
  },
}));

export default function SignIn() {
  const dispatch = useDispatch();
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { error } = userLoginReducer;
  const history = useHistory();
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    dispatch(hideError());
  }, []);

  const onSubmit = (data) => {
    // swal({
    //   title: "Oops...",
    //   icon: "success",
    //   text: "Login Successful",
    //   timer: 1500,
    //   buttons: false,
    // });
    dispatch(loginRequest(data, history));
  };

  return (
    <div className="login">
      <Container className={classes.container} component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={classes.form}
            noValidate
          >
            <FormGroup>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="taiKhoan"
                label="Tài khoản"
                name="taiKhoan"
                autoComplete="taiKhoan"
                autoFocus
                inputRef={register({ required: true, minLength: 6 })}
                error={errors.taiKhoan ? true : false}
              />
              <FormHelperText error={errors.taiKhoan ? true : false}>
                {errors.taiKhoan && errors.taiKhoan.type === "required"
                  ? "Tên không được bỏ trống"
                  : ""}
              </FormHelperText>
              <FormHelperText error={errors.taiKhoan ? true : false}>
                {errors.taiKhoan && errors.taiKhoan.type === "minLength"
                  ? "Tài khoản phải dài hơn 6 kí tự"
                  : ""}
              </FormHelperText>
            </FormGroup>

            <FormGroup>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="matKhau"
                label="Mật khẩu"
                type="password"
                id="matKhau"
                autoComplete="current-matKhau"
                inputRef={register({ required: true })}
                error={errors.matKhau ? true : false}
              />
              <FormHelperText error={errors.taiKhoan ? true : false}>
                {errors.matKhau && errors.matKhau.type === "required"
                  ? "Mật khẩu không được bỏ trống"
                  : ""}
              </FormHelperText>
            </FormGroup>

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {error ? (
              <Alert variant="filled" severity="error">
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
              Đăng nhập
            </Button>
            <Grid container>
              <Grid item xs>
                <NavLink to="/" href="#" variant="body2">
                  Forgot matKhau?
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink to="/signUp" href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </NavLink>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}
