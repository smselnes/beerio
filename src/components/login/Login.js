import React from "react";
import Introduction from "../layout/Introduction";
import { PageTitle } from "../layout/PageTitle";
import LoginForm from "./LoginForm";

export default function Login() {
  PageTitle("Beerio - Login Page");
  return (
    <>
      <Introduction title="Please log in to our admin panel" />
      <LoginForm />
    </>
  );
}
