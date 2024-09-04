import React from "react";

const GHooker = () => {
  return (
    <div className="h-auto p-4 flex items-center justify-center text-center">
      <div className="w-full md:w-1/2 flex flex-col ">
        <h3 className="text-md text-gold uppercase py-4">The Garden Villa</h3>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-[headfont] py-2">
          Let the scent fullfill your meditation.
        </h1>
        <p className="text-md my-4 px-2 py-2">
          Simple, elegant 80 sqm villas designed in traditional style surrounded
          by tropical gardens. The villa has a spacious bedroom with an adjacent
          seating area and a desk for writing and reading, as well as a veranda
          just big enough for the two of you. The bathrooms are equipped with
          open-air showers.
        </p>
      </div>
    </div>
  );
};

export default GHooker;
