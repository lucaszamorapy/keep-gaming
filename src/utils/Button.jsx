import React from "react";

const Button = ({ buttonText, style }) => {
  return (
    <button
      className={`w-full uppercase py-2 text-lg bg-gamingBlack100 hover:opacity-60 duration-300 ease-in-out ${style}`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
