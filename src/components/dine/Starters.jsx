import React from "react";

const Starters = () => {
  return (
    <div className="h-full text-center">
      <h2 className="text-4xl font-[headfont] mb-5">Our Starters</h2>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Tropical Fuit Salad</h3>
            <p>A refreshing mix of pineapple, mango, papaya, and kiwi.</p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Biltong Platter</h3>
            <p>A selection of traditional South African dried meats.</p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Butternut Soup</h3>
            <p>Creamy butternut squash soup with a hint of nutmeg.</p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Caprese Skewers</h3>
            <p>
              Cherry tomatoes, mozzarella, and basil drizzled with balsamic
              glaze.
            </p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Spring Rolls</h3>
            <p>Crispy vegetable spring rolls served with sweet chili sauce.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Starters;
