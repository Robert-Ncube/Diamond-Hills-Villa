import React from "react";

const Tips = () => {
  const tips = [
    "Check the weather forecast before your trip to pack accordingly.",
    "Carry a reusable water bottle to stay hydrated during your activities.",
    "Bring comfortable walking shoes for exploring the trails and city.",
    "Keep a small first aid kit handy for minor injuries.",
    "Respect local wildlife and natural habitats during your excursions.",
    "Check the weather forecast before your trip to pack accordingly.",
  ];

  const packinglist = [
    "Comfortable clothing suitable for hiking and outdoor activities.",
    "Your smartphone camera, map, compass, and GPS device.",
    "A water bottle and a reusable water bottle.",
    "A small backpack for carrying essentials and first aid kit.",
    "Swimwear for visiting waterfalls and other water activities.",
    "Sun protection: hat, sunglasses, and sunscreen.",
  ];

  return (
    <div className="bg-slate-200 py-5 px-5 gap-4 flex flex-col md:flex-row items center justify-center">
      <div className="mb-12 w-full md:w-1/2">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-[headfont] font-semibold mb-4">
          Travel Tips
        </h3>
        <ul className="list-none text-center">
          {tips.map((tip, index) => (
            <li
              className="bg-slate-800 text-white rounded-xl flex items-center p-2 my-5 text-center"
              key={index}
            >
              <i className="fa-solid fa-circle-info mr-2"></i>
              <h4 className="text-lg">{tip}</h4>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-12 w-full md:w-1/2">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-[headfont] font-semibold mb-4">
          Packing List
        </h3>
        <ul className="list-none text-center">
          {packinglist.map((item, index) => (
            <li
              className="bg-slate-50 text-black rounded-xl flex items-center p-2 my-5 text-center"
              key={index}
            >
              <i class="fa-sharp fa-regular fa-circle mr-2"></i>
              <h4 className="text-lg">{item}</h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tips;
