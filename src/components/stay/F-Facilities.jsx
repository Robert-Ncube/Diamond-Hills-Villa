import React from "react";

const FFacilities = () => {
  const facilities = [
    "Small Veranda",
    "WIFI",
    "Mini Bar",
    "Bathroom & Open Shower",
    "Private Balcony",
    "Smart TV",
    "Air Conditioner",
    "Organic Toiletries",
  ];
  return (
    <div className="h-auto px-2 py-4 bg-slate-400 m-4">
      <div className="flex flex-col items-center justify-center md:flex-row p-4 h-auto">
        <div className="flex items-center justify-center w-full md:w-1/2 px-4">
          <img
            src="../../../images/ff-vf.jpeg"
            alt="facilities-pic"
            className="w-[80%] h-[90vh]"
          />
        </div>
        <div className="text-start w-full md:w-1/2 px-4">
          <h3 className="text-md text-gold text-center py-2">Facilities</h3>
          <h1 className="text-2xl py-2 md:text-3xl lg:text-4xl">
            The Echoing Forest Villa
          </h1>
          <p className="text-md my-2 py-2">
            A spacious, well-equipped villa with a private balcony, spacious
            living room, dining area, and two bedrooms. It has a fully equipped
            kitchen, bathroom, and shower.
          </p>
          <div className="text-center">
            <ul className="list-none my-4">
              {facilities.map((facility, index) => (
                <li key={index} className="bg-slate-200 py-2 my-2">
                  {facility}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FFacilities;
