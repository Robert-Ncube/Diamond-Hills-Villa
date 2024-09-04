import React from "react";

const Gallery = () => {
  return (
    <div className="h-auto p-4 bg-slate-50 w-screen">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        <img
          src="../../../images/dine-g1.jpg"
          alt="dine-gallery-pic"
          className="w-full md:w-[30%] h-auto"
        />
        <img
          src="../../../images/dine-g4.jpg"
          alt="dine-gallery-pic"
          className="w-full md:w-1/3 h-auto hidden md:block"
        />
        <img
          src="../../../images/dine-g2.jpg"
          alt="dine-gallery-pic"
          className="w-full md:w-[30%] h-auto hidden md:block"
        />
      </div>
    </div>
  );
};

export default Gallery;
