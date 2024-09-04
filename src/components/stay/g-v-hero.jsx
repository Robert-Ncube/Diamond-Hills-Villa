import React from "react";

const Hero = () => {
  return (
    <div className="h-screen relative text-center bg-slate-400">
      <div
        className="absolute inset-0 opacity-65 "
        style={{
          backgroundImage: "url('../../../images/s-garden.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="relative w-full z-10">
        <h2 className="text-3xl md:text-4xl pt-14 lg:pt-44 lg:text-[10rem] text-bold font-[headfont]">
          Garden Villa
        </h2>
      </div>
    </div>
  );
};

export default Hero;
