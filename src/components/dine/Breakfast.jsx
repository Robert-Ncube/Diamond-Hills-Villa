import React from "react";

const Breakfast = () => {
  return (
    <div className="h-full text-center">
      <h2 className="text-4xl font-[headfont] mb-5">Our Breakfast</h2>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Full English Breakfast</h3>
            <p>
              Eggs, bacon, sausage, baked beans, grilled tomatoes, and toast.
            </p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Bobotie Omelette</h3>
            <p>
              {" "}
              South African spiced minced meat omelette with a touch of curry.
            </p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Akai Bowl</h3>
            <p>
              Blended açai berries topped with granola, banana, and coconut
              flakes.
            </p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Pancakes with Maple Syrup</h3>
            <p>Fluffy pancakes served with butter and maple syrup.</p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Avocado Toast</h3>
            <p>
              Smashed avocado on whole grain toast with a sprinkle of chili
              flakes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breakfast;
