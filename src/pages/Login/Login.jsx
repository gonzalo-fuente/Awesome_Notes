import { useFormik } from "formik";
import * as Yup from "yup";
import { v4 as uuid } from "uuid";
import swal from "sweetalert";
import { useAuth } from "../../utils/useAuth";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircleOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import loginImg from "../../assets/Login.png";

const theme = createTheme();

const Login = () => {
  const { login } = useAuth();

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    if (values.email === "user@user.com" && values.password === "password") {
      login(uuid());
    } else {
      swal({
        title: "Email or Password Incorrect",
        icon: "error",
      });
    }

    /* ------- POST TO AUTHORIZATION API ------- */
    // const user = { ...values };
    // try {
    //   const response = await axiosInstance.post(
    //     url,
    //     JSON.stringify(user)
    //   );
    //   if (response.status === 200) {
    //     const data = response.data.result;
    //     sessionStorage.setItem("token", data.token);
    //     navigate("/", { replace: true });
    //   }
    // } catch (err) {
    //   if (!err?.response) {
    //     swal({
    //       title: "No Server Response",
    //       icon: "error",
    //     });
    //   } else if (err.response?.status === 401) {
    //     /* Unauthorized */
    //     swal({
    //       title: "User Name or Password Incorrect",
    //       icon: "error",
    //     });
    //   } else if (err.response?.status === 404) {
    //     /* Not found */
    //     swal({
    //       title: "User Not Found",
    //       icon: "error",
    //     });
    //   } else {
    //     swal({
    //       title: "Request Error, try again later",
    //       icon: "error",
    //     });
    //   }
    // }
    /* ------- POST TO AUTHORIZATION API ------- */
  };

  const required = "* This field is required";

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required(required),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required(required),
  });

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    formik;

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${loginImg})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <AccountCircleIcon color="disabled" sx={{ fontSize: 80 }} />

            <Typography component="h1" variant="h5" sx={{ fontWeight: "600" }}>
              Hello Again!
            </Typography>
            <Typography component="h1" variant="h6">
              Welcome Back
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoFocus
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
