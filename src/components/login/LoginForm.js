import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../constants/loginApi";
import { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import FormError from "./FormError";
import { JWT_TOKEN } from "../../constants/loginApi";

import React from "react";

export default function LoginForm() {
  const [loginError, setLoginError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();
  const url = loginApi + JWT_TOKEN;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [auth, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);
    console.log(data);

    try {
      const response = await axios.post(url, data);

      console.log(response.data);
      //console.log(response.data.user_email);
      setAuth(response.data);
      //setUser(response.data.user_email);
      navigate("/admin");
    } catch (error) {
      console.log("There was an error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {loginError && (
          <FormError>
            There was an error during login. Advanced:{loginError}
          </FormError>
        )}
        <fieldset disabled={submitting}>
          <div>
            <input
              name="username"
              placeholder="Username"
              {...register("username")}
            />
            {errors.username && (
              <FormError>{errors.username.message}</FormError>
            )}
          </div>

          <div>
            <input
              name="password"
              placeholder="Password"
              {...register("password")}
              type="password"
            />
            {errors.password && (
              <FormError>{errors.password.message}</FormError>
            )}
          </div>
          <button>{submitting ? "Logging in" : "Login"}</button>
        </fieldset>
      </form>
    </>
  );
}
