import React from "react";

const AuthLayout = ({ children, title }) => {
  return (
    <div className="w-full max-w-xs">
      <h1 className="font-bold text-blue-600 mb-2">{title}</h1>
      <p className="mb-3 text-slate-400">please login your account here</p>
      {children}
    </div>
  );
};

export default AuthLayout;
