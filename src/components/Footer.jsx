import React from "react";
import logo from "/logo/keep-gaming.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="mt-10 px-5 py-5 bg-gamingBlack200 bottom-0  lg:px-0">
      <div className="container">
        <div className="flex justify-center items-center flex-col ">
          <Link to={"/"}>
            <img src={logo} className="w-[100px]" alt="Logo Keep Gaming" />
          </Link>
          <div className="flex flex-col items-center text-center lg:flex-row lg:text-base">
            <p className="opacity-15 text-xl">
              Todos os direitos reservados Desenvolvido por{" "}
              <Link to={"https://github.com/lucaszamorapy"}>Lucas Zamora</Link>{" "}
            </p>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
