import React from "react";
import LoginForm from "../components/Fragments/LoginForm";
import AuthLayout from "../components/Layout/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout title="login">
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
