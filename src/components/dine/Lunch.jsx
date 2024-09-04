import React from "react";

const Lunch = () => {
  return (
    <div className="h-full text-center">
      <h2 className="text-4xl font-[headfont] mb-5">Our Lunch</h2>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Chicken Caeser Salad</h3>
            <p>
              Grilled chicken, romaine lettuce, croutons, and Caesar dressing.
            </p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Bunny Chow</h3>
            <p>
              A hollowed-out loaf of bread filled with spicy curry, a South
              African favorite.
            </p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Grilled Fish Tacos</h3>
            <p>
              Soft tortillas filled with grilled fish, cabbage slaw, and lime
              crema.
            </p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Beef Bobotie</h3>
            <p>
              Traditional South African baked dish with spiced minced meat and
              an egg-based topping.
            </p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Vegetable Stir-Fry</h3>
            <p>
              Mixed vegetables stir-fried with soy sauce and served over rice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lunch;
