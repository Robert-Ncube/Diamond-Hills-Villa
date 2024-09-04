import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="text-center pt-20 md:pt-24 h-screen bg-center bg-cover relative"
      style={{
        backgroundImage: "url('../../../images/hero-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      <div className="md:p-1 relative z-10">
        <div className="text-center shadow-md shadow-slate-200">
          <h1 className="text-bold text-white text-3xl md:text-4xl lg:text-5xl uppercase font-[headfont] bg-slate-800">
            Diamond Hills Villa
          </h1>
        </div>
        <div className="text-white pt-[10%] text-start px-6 md:text-center lg:pt-[5%]">
          <h2 className="text-3xl text-bold md:text-5xl lg:text-6xl font-[headfont] my-4">
            Enjoy a beautiful experience at our villas
          </h2>
          <p className="text-lg my-4">
            From breathtaking scenery on the beautiful Coasts to vibrant beach
            resorts, the perfect holiday villa is waiting for you and your loved
            ones.
          </p>
          <button className="bg-gold p-2 my-4 rounded-md uppercase font-semibold">
            <Link to="/stay">Explore our Villas</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
