import React from "react";

const Toast = ({ message, onClose }) => {
  return (
    <div className="toast">
      <p>{message}</p>
      <button onClick={onClose}>x</button>
    </div>
  );
};

export default Toast;
