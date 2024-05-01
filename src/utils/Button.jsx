import React from "react";

const Button = ({ buttonText, styleCard = true, style, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={` ${
        styleCard &&
        "w-full uppercase rounded-b-lg py-2 text-lg bg-gamingBlack100 hover:bg-opacity-60 duration-300 ease-in-out"
      }${style}`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
