import React from "react";

const Hooker = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-400 relative pb-40 md:pb-24">
      <img
        src="../../../images/dine-h1.jpg"
        className="absolute bottom-0 left-[35%] md:left-[40%] lg:left-[43%] w-[30%] h-[35%] md:h-[36%] md:w-[20%] lg:w-[15%] lg:h-[40%] my-2"
        alt=""
      />
      <div className="text-center md:px-10 w-[80%]">
        <h1 className="text-5xl font-bold font-[headfont] py-2">
          A mixture of symphonic and tastey ingredients
        </h1>
        <p className="text-lg my-2 py-2">
          Our villas are home to a diverse range of local and indigenous dishes
          that cater to your family's preferences and dietary needs. We believe
          that the best food is the food that brings joy and connection to our
          people. We invite you to explore our culinary adventures and discover
          something new and exciting.
        </p>
      </div>
    </div>
  );
};

export default Hooker;
