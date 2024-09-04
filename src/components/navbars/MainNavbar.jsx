import React, { useState } from "react";
import { Link } from "react-router-dom";

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { name: "Home", link: "/" },
    { name: "Stay", link: "/stay" },
    { name: "Dine", link: "/dine" },
    { name: "Relax", link: "/relax" },
    { name: "Blog", link: "/blog" },
  ];

  return (
    <>
      <nav
        className="fixed top-0 w-full bg-slate-800 text-white p-2 flex align-middle justify-between"
        style={{ zIndex: "1000" }}
      >
        <Link to="/">
          <img
            src="../../../images/logo.png"
            alt="logo"
            className="w-10 h-10 md:w-20 md:h-20"
          />
        </Link>

        <button className="md:hidden p-2 mx-2 rounded-xl" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <div className="hidden md:flex justify-between align-middle gap-4">
          <ul className="flex justify-between items-center gap-5 lg:gap-7">
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
            <li className="bg-slate-50 text-black p-2 rounded-lg hover:bg-slate-400 hover:text-gold">
              <Link to="/booking">Book Now</Link>
            </li>
          </ul>
        </div>
      </nav>

      {isOpen && (
        <div
          className="absolute top-14 w-full bg-slate-800 text-white p-2 flex flex-col items-center md:hidden"
          style={{ zIndex: "9999" }}
        >
          <ul className="flex flex-col items-center gap-5">
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
            <li className="bg-slate-50 text-black p-2 rounded-lg hover:bg-slate-400 hover:text-gold">
              <Link to="/booking">Book Now</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default MainNavbar;
