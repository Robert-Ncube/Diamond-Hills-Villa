import React from "react";

const Dessert = () => {
  return (
    <div className="h-full text-center">
      <h2 className="text-4xl font-[headfont] mb-5">Our Dessert</h2>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Malva Pudding</h3>
            <p>
              Traditional South African sponge pudding served with warm custard.
            </p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Tropical Sorbet</h3>
            <p>
              Refreshing sorbet made with mango, passion fruit, and pineapple.
            </p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Milk Tart</h3>
            <p>
              Creamy custard tart with a hint of cinnamon, a South African
              classic.
            </p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Chocolate Fondant</h3>
            <p>
              Rich chocolate cake with a gooey center, served with vanilla ice
              cream.
            </p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Fruit Pavlova</h3>
            <p>
              Meringue dessert topped with whipped cream and fresh tropical
              fruits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dessert;
