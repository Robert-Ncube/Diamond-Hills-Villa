import React from "react";

const Hero = () => {
  return (
    <div
      className="flex flex-col pt-[50%] md:pt-[30%] lg:pt-[12%] h-screen text-white relative px-4 lg:mb-[10%]"
      style={{
        backgroundImage: "url('../../../images/dine-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
      <img
        src="../../../images/dine-hero2.jpg"
        className="absolute w-[18%] h-[50%] -bottom-[18%] left-[38%] hidden lg:block"
        alt="hero-pic"
      />
      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <h4 className="text-md uppercase text-gold">Our Dining Experience</h4>
        <h1 className="text-6xl md:text-7xl font-bold font-[headfont]">
          A taste worth a repeate
        </h1>
      </div>
    </div>
  );
};

export default Hero;
