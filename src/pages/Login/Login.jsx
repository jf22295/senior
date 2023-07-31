import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const Login = () => {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const formik = useFormik({
    validationSchema,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        width: "500px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        margin: "auto",
      }}
    >
      <TextField
        variant="standard"
        fullWidth
        label="Email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        helperText={formik.errors.email || " "}
        error={Boolean(formik.errors.email)}
      />
      <TextField
        variant="standard"
        fullWidth
        type="password"
        label="Password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        helperText={formik.errors.password || " "}
        error={Boolean(formik.errors.password)}
      />
      <div
        onClick={() => {
          navigate("/password/request", {
            state: { email: formik.values.email },
          });
        }}
      >
        Having issues?
      </div>
      <Button variant="contained" type="submit">
        Login
      </Button>
    </form>
  );
};

export default Login;
