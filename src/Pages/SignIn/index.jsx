import React, { useEffect, useState } from "react";
import "../../Assets/Styles/SCSS/Pages/login.scss";
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
import { makeStyles } from "@material-ui/core/styles";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { hideError, loginRequest } from "../../redux/action/userAction/actions";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: "20px 0",
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
    margin: "10px 0",
    padding: "10px 0",
  },
  container: {
    background: "#fff",
    borderRadius: "10px",
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const { error, user } = useSelector((state) => state.userReducer);

  const [showPass, setShowPass] = useState(false);

  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    dispatch(hideError());
  }, []);
  console.log(location.state);
  useEffect(() => {
    if (user) {
      location.state ? history.push(location.state) : history.push("/");
    }
  });

  const onSubmit = (data) => {
    dispatch(loginRequest(data, history));
  };

  return (
    <div className="login">
      <Container className={classes.container} component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography component="h1" variant="h5">
            Đăng nhập
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
                  error={errors.taiKhoan && true}
                >
                  <InputLabel htmlFor="taiKhoan">Tài khoản</InputLabel>
                  <OutlinedInput
                    id="taiKhoan"
                    name="taiKhoan"
                    type="text"
                    inputRef={register({
                      required: "Xin vui lòng điền thông tin",
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
                      required: "Xin vui lòng điền thông tin",
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
            </Grid>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Ghi nhớ đăng nhập"
            />
            {error && (
              <Alert variant="filled" severity="error">
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
              Đăng nhập
            </Button>
            <Grid container>
              <Grid item>
                Bạn không có tài khoản?
                <NavLink to="/signUp"> Đăng ký</NavLink>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}
