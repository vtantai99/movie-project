import React, { useEffect, useState } from "react";
import "../../Assets/Styles/SCSS/Pages/signUp.scss";
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
import { Alert } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  signUpRequest,
  hideError,
} from "../../redux/action/userAction/actions";
import logo from "../../Assets/Images/logo.png";

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

  const { register, handleSubmit, errors, watch } = useForm({
    mode: "onTouched",
  });

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
          <NavLink to="/">
            <img className="w-12" src={logo} alt="logo" />
          </NavLink>
          <Typography component="h1" variant="h5">
            ????ng k??
          </Typography>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={classes.form}
            noValidate
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl
                  variant="outlined"
                  fullWidth
                  error={errors.hoTen && true}
                >
                  <InputLabel htmlFor="hoTen">H??? t??n</InputLabel>
                  <OutlinedInput
                    id="hoTen"
                    name="hoTen"
                    type="text"
                    inputRef={register({
                      required: "Xin vui l??ng ??i???n th??ng tin",
                      minLength: {
                        value: 2,
                        message: "Vui l??ng ??i???n ????ng H??? t??n",
                      },
                    })}
                    labelWidth={50}
                  />
                  <FormHelperText error={errors.hoTen && true}>
                    {errors.hoTen && errors.hoTen.message}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
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
                      minLength: {
                        value: 6,
                        message: "T??i kho???n ph???i tr??n 6 k?? t???",
                      },
                      maxLength: {
                        value: 10,
                        message: "T??i kho???n kh??ng ???????c qu?? 10 k?? t???",
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
                  <InputLabel htmlFor="matKhau">M???t kh???u</InputLabel>
                  <OutlinedInput
                    id="matKhau"
                    name="matKhau"
                    type={showPass ? "text" : "password"}
                    autoComplete="off"
                    inputRef={register({
                      required: "Xin vui l??ng nh???p th??ng tin",
                      pattern: {
                        value:
                          /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                        message:
                          "M???t kh???u b???t bu???c bao g???m: Ch??? vi???t hoa, ch??? vi???t th?????ng, s??? ho???c k?? t??? ?????c bi???t v?? ph???i ??t nh???t 8 k?? t???. VD(Cute123@)",
                      },
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
              <Grid item xs={12}>
                <FormControl
                  variant="outlined"
                  fullWidth
                  error={errors.matKhau2 && true}
                >
                  <InputLabel htmlFor="matKhau2">X??c nh???n m???t kh???u</InputLabel>
                  <OutlinedInput
                    id="matKhau2"
                    type={showPass2 ? "text" : "password"}
                    name="matKhau2"
                    inputRef={register({
                      required: "Xin vui l??ng nh???p th??ng tin",
                      validate: (value) =>
                        value === watch("matKhau") || "X??c nh???n m???t kh???u sai",
                    })}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPass2(!showPass2)}
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
                      required: "Xin vui l??ng ??i???n th??ng tin",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%&???*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
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
                  <InputLabel htmlFor="soDt">S??? ??i???n tho???i</InputLabel>
                  <OutlinedInput
                    id="soDt"
                    name="soDt"
                    type="text"
                    inputRef={register({
                      required: "Xin vui l??ng ??i???n th??ng tin",
                      pattern: {
                        value: /^\d{10}$/,
                        message:
                          "S??? ??i???n tho???i kh??ng h???p l???, h??y ch???c ch???n b???n nh???p ????? 10 s???. VD(0987654321)",
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
              label="H???a l?? s??? mua v?? nhi???u"
              inputRef={register({
                required: "Xin vui l??ng h???a",
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
              ????ng k??
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                B???n ???? c?? t??i kho???n?
                <NavLink to="/signIn"> ????ng nh???p</NavLink>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}
