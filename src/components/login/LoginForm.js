import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../constants/loginApi";
import { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import FormError from "./FormError";
import { JWT_TOKEN } from "../../constants/loginApi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const userNamePattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;

const schema = yup.object().shape({
  username: yup
    .string()
    .required("Required field")
    .email()
    .matches(userNamePattern, "Must be a valid email"),
  password: yup.string().required("Invalid password"),
});

export default function LoginForm() {
  const [loginError, setLoginError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();
  const url = loginApi + JWT_TOKEN;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [auth, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);
    console.log(data);

    try {
      const response = await axios.post(url, data);
      console.log(response.data);
      setAuth(response.data);
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
      <form onSubmit={handleSubmit(onSubmit)} className="loginForm">
        {loginError && (
          <FormError>
            <p>There was an error during login.</p>
            <p>Advanced:{loginError}</p>
          </FormError>
        )}
        <fieldset disabled={submitting}>
          <div>
            <label htmlFor="username">User email</label>
            <input
              name="username"
              placeholder="Username"
              {...register("username", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
              })}
            />
            {errors.username && (
              <FormError>{errors.username.message}</FormError>
            )}
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              placeholder="Password"
              {...register("password", { required: true, minLength: 8 })}
              type="password"
            />
            {errors.password && (
              <FormError>{errors.password.message}</FormError>
            )}
          </div>
          <input
            type="submit"
            value={submitting ? "Logging in" : "Login"}
            className="loginForm__submit"
          />
        </fieldset>
      </form>
    </>
  );
}
