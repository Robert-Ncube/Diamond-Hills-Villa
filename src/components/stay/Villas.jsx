import React from "react";
import { Link } from "react-router-dom";

const Villas = () => {
  return (
    <div className="h-auto p-4 flex flex-col md:flex-row items-center justify-center gap-4 text-white">
      <div className="border md:w-1/3 rounded-xl">
        <img
          src="../../../images/s-garden.jpg"
          className="rounded-t-xl"
          alt="garden-villa"
        />
        <div className="p-4 bg-slate-500 rounded-b-xl">
          <h2 className="text-4xl font-[headfont] py-2">Garden Villa</h2>
          <p className="text-md my-2">
            This garden villa features a beautiful garden layout with openfloor
            plans and private balconies.
          </p>
          <button className="bg-gold text-white py-2 px-4 rounded-md my-4">
            <Link to="/gardenvilla">Explore</Link>
          </button>
        </div>
      </div>
      <div className="border md:w-1/3 rounded-xl">
        <img
          src="../../../images/s-pool.jpg"
          className="rounded-t-xl"
          alt="pool-villa"
        />
        <div className="p-4 bg-slate-500 rounded-b-xl">
          <h2 className="text-4xl font-[headfont] py-2">Pool Villa</h2>
          <p className="text-md my-2">
            This pool villa features a beautiful pool with open floors
            stretching outwards torwads a beautiful open balcony view.
          </p>
          <button className="bg-gold text-white py-2 px-4 rounded-md my-4">
            <Link to="/poolvilla">Explore</Link>
          </button>
        </div>
      </div>
      <div className="border md:w-1/3 rounded-xl">
        <img
          src="../../../images/s-forest.jpg"
          className="rounded-t-xl"
          alt="forest-villa"
        />
        <div className="p-4 bg-slate-500 rounded-b-xl">
          <h2 className="text-4xl font-[headfont] py-2">Forest Villa</h2>
          <p className="text-md my-2">
            This forest villa features a beautiful forest layout view with open
            floor plans and private balconies.
          </p>
          <button className="bg-gold text-white py-2 px-4 rounded-md my-4">
            <Link to="/forestvilla">Explore</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Villas;
