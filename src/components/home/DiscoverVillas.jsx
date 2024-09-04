import React from "react";
import { Link } from "react-router-dom";

const DiscoverVillas = () => {
  return (
    <div className="flex flex-col lg:flex-row h-[140%]">
      <div className="flex flex-col items-center justify-center w-full md:w-1/3 p-5 gap-2">
        <img
          src="../../../images/d-villa4.jpg"
          alt="discover-villa"
          className="w-1/2 h-auto"
        />
        <img
          src="../../../images/d-villa1.jpg"
          alt="discover-villa"
          className="w-full h-auto hidden lg:block"
        />
      </div>
      <div className="flex flex-col text-center justify-center w-full md:w-1/3 p-5 gap-5">
        <h2 className="text-bold font-[headfont] text-3xl md:text-4xl lg:text-5xl">
          You request,
          <br /> We deliver
        </h2>
        <p className="text-sm">
          We specialize in providing the perfect holiday destination for your
          family. Our villas are designed to cater to your needs and budget.
        </p>
        <button className="bg-slate-800 p-2 my-4 mx-14 rounded-md uppercase font-semibold">
          <Link to="/stay">Explore our Villas</Link>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center w-full md:w-1/3 p-5 gap-2">
        <img
          src="../../../images/d-villa2.jpg"
          alt="discover-villa"
          className="w-full h-auto"
        />
        <img
          src="../../../images/d-villa3.jpg"
          alt="discover-villa"
          className="w-1/2 h-auto  hidden lg:block"
        />
      </div>
    </div>
  );
};

export default DiscoverVillas;
