import React from "react";
import Loader from "react-loaders";
import "loaders.css/loaders.css";

const Loading = () => {
  return (
    <div className="loader-active flex mt-20 justify-center items-center">
      <Loader type="pacman" />
    </div>
  );
};

export default Loading;
