import React from "react";
import InputForm from "../Elements/Input/InputForm";
import Button from "../Elements/Button/Button";

const LoginForm = () => {
  return (
    <form>
      <div className="flex flex-col gap-1">
        <label htmlFor="username">Username</label>
        <InputForm name="username" placeholder="Masukan Username" type="text" />
        <label htmlFor="password">Password</label>
        <InputForm name="password" placeholder="Masukan Password" type="password" />
      </div>
      <Button color="blue" hover="blue">
        Submit
      </Button>
    </form>
  );
};

export default LoginForm;
