import React from "react";
import Introduction from "../layout/Introduction";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <>
      <Introduction title="Please log in to our admin panel" />
      <LoginForm />
    </>
  );
}
