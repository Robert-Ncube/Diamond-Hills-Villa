import React from "react";

const Hooker = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-400 relative pb-40 md:pb-24">
      <img
        src="../../../images/relax-h1.jpg"
        className="absolute bottom-0 left-[35%] md:left-[40%] lg:left-[43%] w-[30%] h-[35%] md:h-[36%] md:w-[20%] lg:w-[15%] lg:h-[40%] my-2"
        alt=""
      />
      <div className="text-center md:px-10 w-[80%]">
        <h1 className="text-5xl font-bold font-[headfont] py-2">
          At our spa we use natural ingredients to make your body feel amazing
        </h1>
        <p className="text-lg my-2 py-2">
          Our spar uses a different variety of indigenous and natural products
          to make you feel amazing and relaxed. We help you unwind after a long
          day and let all you troubles go down the drain.
        </p>
      </div>
    </div>
  );
};

export default Hooker;
