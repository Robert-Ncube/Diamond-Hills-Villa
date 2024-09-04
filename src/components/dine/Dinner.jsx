import React from "react";

const Dinner = () => {
  return (
    <div className="h-full text-center">
      <h2 className="text-4xl font-[headfont] mb-5">Our Dinner</h2>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Braai Platter</h3>
            <p>
              A selection of grilled meats including boerewors, lamb chops, and
              chicken skewers.
            </p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Seafood Paella</h3>
            <p>Spanish rice dish with shrimp, mussels, and calamari.</p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Cape Malay Curry</h3>
            <p>
              {" "}
              Fragrant curry with chicken, potatoes, and a blend of spices.
            </p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Spaghetti Carbonara</h3>
            <p>
              Classic Italian pasta with pancetta, eggs, and Parmesan cheese.
            </p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Vegetarian Moussaka</h3>
            <p>
              Layers of eggplant, potatoes, and lentils topped with béchamel
              sauce.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dinner;
