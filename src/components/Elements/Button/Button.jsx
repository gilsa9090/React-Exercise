import React from "react";

const Button = ({ color, hover, children }) => {
  return <button className={`bg-${color}-500 hover:bg-${hover}-700 text-white mt-3 font-bold py-2 px-4 rounded`}>{children}</button>;
};

export default Button;
