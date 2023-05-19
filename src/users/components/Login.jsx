import React, { useContext, useState } from "react";
import './Login.css';
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button } from "@mui/material";

import { useHistory } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";


const Login = () => {

  const history = useHistory();
  const auth = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);


  const validationSchema = yup.object({
    name: yup
      .string("Enter your name")
      .required("Name is required")
      .min(3, "min 3 chars"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    phone: yup
      .string("Enter Your Phone No.")
      .required("Phone No. is required")
      .matches(
        /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
        "Invalid Phone no"
      ),
  });


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //let phone no be userId and (name + email) be token
      setIsLoading(true);
      auth.login(values.phone, { name: values.name, email: values.email});
      history.push("/home");
    },
  });

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          variant="standard"
          margin="dense" 
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          variant="standard"
          margin="dense" 
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="phone"
          name="phone"
          label="Phone No."
          variant="standard"
          type="number"
          margin="dense" 
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        {isLoading ? <LoadingSpinner/> : <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>}
        
      </form>
    </div>
  );
};

export default Login;
