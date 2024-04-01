import React, { useState } from "react";
import { links } from "../data/NavLinks.js";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="flex justify-around items-center bg-[#e4e4e4] p-4">
        <div>
          <p className="font-extrabold text-[1.8rem]">
            <span className="text-[#073B4C]">PAVAN</span>{" "}
          </p>
        </div>
        <div className="md:flex hidden">
          <ul className="flex gap-6 font-semibold">
            {links &&
              links.map((link, index) => (
                <li
                  key={index}
                  className="text-gray-600 hover:text-[#073B4C] text-[1.1rem]"
                >
                  <a className="cursor-pointer">{link.name}</a>
                </li>
              ))}
          </ul>
        </div>
        <div
          className="md:hidden flex cursor-pointer"
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? <FaTimes fontSize={24} /> : <FaBars fontSize={24} />}
        </div>
      </div>
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="flex justify-around items-center bg-[#e4e4e4] mb-8">
          <div>
            <p className="font-extrabold text-[1.8rem]">
              <span className="text-[#073B4C]">PAVAN</span>{" "}
            </p>
          </div>
          <div
            className="md:hidden flex cursor-pointer"
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? <FaTimes fontSize={24} /> : <FaBars fontSize={24} />}
          </div>
        </div>
        <ul className="flex flex-col text-center gap-4 bg-[#e4e4e4] ">
          {links &&
            links.map((link, index) => (
              <li
                key={index}
                className="text-gray-600 hover:text-[#073B4C] text-[1.1rem]"
              >
                <a className="cursor-pointer">{link.name}</a>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
