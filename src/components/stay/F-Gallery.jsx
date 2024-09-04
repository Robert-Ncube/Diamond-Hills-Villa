import React from "react";

const FGallery = () => {
  return (
    <div className="h-auto p-4 bg-slate-50 w-screen">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        <img
          src="../../../images/ff-v1.jpeg"
          alt="forest-gallery-pic"
          className="w-full md:w-[30%] h-auto"
        />
        <img
          src="../../../images/ff-v2.jpeg"
          alt="forest-gallery-pic"
          className="w-full md:w-1/3 h-auto hidden md:block"
        />
        <img
          src="../../../images/ff-v3.jpeg"
          alt="forest-gallery-pic"
          className="w-full md:w-[30%] h-auto hidden md:block"
        />
      </div>
    </div>
  );
};

export default FGallery;
