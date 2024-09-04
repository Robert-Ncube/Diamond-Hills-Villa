import React from "react";
import { Link } from "react-router-dom";

const DiscoverSpar = () => {
  return (
    <div className="container flex flex-col p-4 lg:flex-row lg:p-10 h-screen">
      <div className="flex items-center justify-center  p-5">
        <div className="text-start flex align-middle justify-center flex-col gap-5 w-[60%]">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[headfont]">
            Discover Our Spa
          </h1>
          <p className="text-lg my-2">
            Our Spa is a place where your body is at peace. We offer a variety
            of relaxation and wellness services, including massages, yoga, and
            facial treatments.
          </p>
          <p className="text-lg my-2 hidden md:block">
            Our Spa is more than just a place to relax; it's a destination in
            itself. With its stylish and comfortable design, it's perfect for
            those who want to unwind and rejuvenate after a long day.
          </p>
          <button className="bg-slate-800 text-white p-2 my-4 rounded-md uppercase font-semibold text-center md:text-start w-44">
            <Link to="/relax">Make a Reservation</Link>
          </button>
        </div>
      </div>
      <div
        className="rounded-xl lg:rounded-none md:h-50 w-[100%] h-[100%]"
        style={{
          backgroundImage: "url('../../../images/d-spa1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default DiscoverSpar;
