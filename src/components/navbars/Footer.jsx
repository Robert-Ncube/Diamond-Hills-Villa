import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 ">
      <div className="border-b-2 w-full flex flex-row p-4">
        <div className="text-start container w-1/3">
          <h3 className="text-sm uppercase text-gold">Menu</h3>
          <ul className="flex flex-col text-3xl gap-2 my-4 lg:gap-7 ">
            <li className="">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/stay">Stay</Link>
            </li>
            <li>
              <Link to="/dine">Dine</Link>
            </li>
            <li>
              <Link to="/relax">Relax</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/booking">Book Now</Link>
            </li>
          </ul>
        </div>
        <div className="container text-start w-1/3">
          <h3 className="text-sm uppercase text-gold">Socials</h3>
          <ul className="flex flex-col text-3xl gap-2 my-4">
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <i class="fa-brands fa-square-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <i class="fa-brands fa-square-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/" target="_blank">
                <i class="fa-brands fa-square-x-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com/" target="_blank">
                <i class="fa-brands fa-square-pinterest"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="container text-start w-1/3">
          <h3 className="text-sm uppercase text-gold">Contact</h3>
          <h4 className="text-xl uppercase text-slate-200 font-[headfont]">
            Diamond Hills Villa
          </h4>
          <ul className="flex flex-col text-md gap-2 my-4">
            <li>Phone: +1 123-456-7890</li>
            <li>Email: villa@diamondhills.com</li>
            <li>Address: 123 Main St, Anytown, Africa</li>
            <li>Reception: Whatsapp</li>
            <li>Hours: Mon-Fri 9:00 AM - 5:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="w-full py-4">
        <p className="text-center text-lg text-slate-200">
          &copy; 2024 Diamond Hills Villa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
