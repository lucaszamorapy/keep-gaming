import React, { useState } from "react";
import logo from "/logo/keep-gaming.png";
import navigation from "../../config/navigation.json";
import { Link } from "react-router-dom";
import Search from "../../utils/Search";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="px-5 header-desk fixed top-0 w-full z-10 lg:px-0">
      <div className="container">
        <nav className="flex justify-between items-center gap-5">
          <img src={logo} className="w-[100px]" alt="Logo Keep Gaming" />
          <ul className="hidden gap-5 lg:flex items-center">
            {navigation.path.map((item, index) => (
              <li
                className="text-white list-none linha text-lg uppercase"
                key={index}
              >
                <Link to={item.url}>{item.name}</Link>
              </li>
            ))}
            <Search placeholder={"O que você procura?"} />
          </ul>
          <span
            className={`mobile-menu-5 block lg:hidden ${
              isOpen ? "toggle items-center" : ""
            }`}
            onClick={toggleMenu}
          >
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
          </span>
        </nav>
      </div>
      {isOpen && (
        <nav className="h-screen slideInRight flex flex-col ">
          <ul>
            {navigation.path.map((item, index) => (
              <li
                className="text-white linha mb-5 list-none text-4xl uppercase"
                key={index}
                onClick={toggleMenu}
              >
                <Link to={item.url}>{item.name}</Link>
              </li>
            ))}
            <Search placeholder={"O que você procura?"} />
          </ul>
        </nav>
      )}
    </section>
  );
};

export default Header;
