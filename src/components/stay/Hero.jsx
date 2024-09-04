import React from "react";

const Hero = () => {
  return (
    <div className="h-screen text-center text-white p-4 flex flex-col items-center pt-8 md:px-20 lg:px-40 bg-slate-800">
      <h3 className="text-md uppercase text-gold">Our Villas</h3>
      <h1 className="text-4xl lg:text-6xl font-[headfont] my-4">
        Stay elegantly and be comfortable
      </h1>
      <p className="text-md my-4 px-2">
        Forget all the things that dont matter. Our villas are surrounded by
        nature, forests, gardens, pools and are designed to carter for your
        personal needs that makes you feel at home rather than in a hotel.
      </p>
      <img
        src="../../../images/pic-1.jpg"
        alt="stay-hero"
        className="w-[50%] lg:w-[45%] mt-8 h-auto"
      />
    </div>
  );
};

export default Hero;
