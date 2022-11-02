import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";


import './loginform.css'
import { getToken } from "../../redux/reducers/users";

const Loginform = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    formik.resetForm()
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required!"),
      password: Yup.string()
        .min(4, "Minimum 4 characters")
        .max(16, "Maximum 16 characters")
        .required("Required!"),
    }),
    onSubmit: (values, { resetForm }) => {
      if (!toggle) {
        dispatch(getToken(values, "login"));
        setTimeout(() => {
          navigate("/main");
        },500)
      } else {
        dispatch(getToken(values, "registration"));
        setTimeout(() => {
          navigate("/main");
        }, 500);
      }
      resetForm();
    },
  });

  return (
    <div className="loginform">
      <form className="loginform__form" onSubmit={formik.handleSubmit}>
        <h3>{!toggle ? "Login form" : "Registration form"}</h3>
        <div className="loginform__form__input">
          <input
            name="email"
            type="email"
            placeholder="Email*"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <div className="error">{formik.errors.email}</div>
          )}
          <input
            name="password"
            type="password"
            placeholder="Password*"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <div className="error">{formik.errors.password}</div>
          )}
        </div>
        {!toggle ? (
          <div className="loginform__form__button">
            <button type="submit">Sign In</button>
            <div className="loginform__form__link" onClick={handleToggle}>
              Registration
            </div>
          </div>
        ) : (
          <div className="loginform__form__button">
            <button type="submit">Join</button>
            <div className="loginform__form__link" onClick={handleToggle}>
              Login
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Loginform;
