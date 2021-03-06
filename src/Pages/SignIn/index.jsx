import React, { useEffect, useState } from "react";
import "../../Assets/Styles/SCSS/Pages/login.scss";
import {
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
import logo from "../../Assets/Images/logo.png";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: "20px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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

  const { register, handleSubmit, errors } = useForm({
    mode: "onTouched",
  });

  useEffect(() => {
    dispatch(hideError());
  }, [dispatch]);

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
          <NavLink to="/">
            <img className="w-12" src={logo} alt="logo" />
          </NavLink>
          <Typography component="h1" variant="h5">
            ????ng nh???p
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
                  <InputLabel htmlFor="taiKhoan">T??i kho???n</InputLabel>
                  <OutlinedInput
                    id="taiKhoan"
                    name="taiKhoan"
                    type="text"
                    inputRef={register({
                      required: "Xin vui l??ng ??i???n th??ng tin",
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
                  <InputLabel htmlFor="matKhau">M???t kh???u</InputLabel>
                  <OutlinedInput
                    id="matKhau"
                    name="matKhau"
                    type={showPass ? "text" : "password"}
                    autoComplete="off"
                    inputRef={register({
                      required: "Xin vui l??ng ??i???n th??ng tin",
                    })}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPass(!showPass)}
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
              label="Ghi nh??? ????ng nh???p"
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
              ????ng nh???p
            </Button>
            <Grid container>
              <Grid item>
                B???n kh??ng c?? t??i kho???n?
                <NavLink to="/signUp"> ????ng k??</NavLink>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}
