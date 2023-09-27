import React from "react";

const InputForm = ({ name, placeholder, type }) => {
  return <input type={type} placeholder={placeholder} name={name} className="bg-blue-200 rounded p-2 w-60" />;
};

export default InputForm;
