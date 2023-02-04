import React, { useState } from "react";
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
import { registerUser } from "../../api/auth";


function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="">
      <Formik
        initialValues={{
          name: "",
          apellidos: "",
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          try {
            console.log(values);
            const response = await registerUser(values);
            if (response) {
              navigate("/home");
            }
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="flex flex-col flex-row lg:w-4/12 lg:mx-auto gap-y-8 pt-20">
            <TextField
              label="Email"
              name="email"
              onChange={handleChange}
              required
            />

            <TextField
              label="Nombre"
              name="name"
              onChange={handleChange}
              required
            />

            <TextField
              label="Apellidos"
              name="apellidos"
              onChange={handleChange}
              required
            />

            <FormControl variant="outlined">
              <InputLabel>Password</InputLabel>
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
                label="Contraseña"
                required
              />
            </FormControl>


            <Button variant="outlined" type="submit" size="large">
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Register;
