import React from "react";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { checkUser } from "../../api/auth";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state/index";

function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={ async (values) => {
          try {
            console.log(values);
            const logged = await checkUser(values)
            if(logged){
              console.log(logged.user);
              dispatch(
                setLogin({
                  user: logged.user
                })
              );
              navigate("/");
            }
           
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="flex flex-col xl:w-4/12 xl:mx-auto gap-y-8 pt-20">
            <TextField
              label="Email"
              name="email"
              onChange={handleChange}
              value={values.name}
            />

          <FormControl variant="outlined">
            <InputLabel>
              Password
            </InputLabel>
            <OutlinedInput
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              name="password"
              onChange={handleChange}
              value={values.password}
              label="Password"
            />
          </FormControl>

            <Button variant="outlined" type="submit" size="large">
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
