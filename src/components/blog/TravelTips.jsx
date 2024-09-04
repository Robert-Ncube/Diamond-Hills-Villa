import React from "react";
import Tips from "./Tips";

const TravelTips = () => {
  const threeDayItinerary = [
    {
      day: "Day 1:",
      todo: "Arrival and check-in, explore the villa and nearby forest trails.",
    },
    {
      day: "Day 2:",
      todo: "Morning hike, afternoon city tour, and evening relaxation at the villa.",
    },
    {
      day: "Day 3:",
      todo: "Visit to local waterfalls, bird watching, and departure.",
    },
  ];
  const fiveDayItinerary = [
    {
      day: "Day 1:",
      todo: "Arrival and check-in, explore the villa and nearby forest trails.",
    },
    {
      day: "Day 2:",
      todo: "Full-day hiking adventure with picnic lunch.",
    },
    {
      day: "Day 3:",
      todo: "Morning city tour, afternoon mountain biking, and evening relaxation.",
    },
    {
      day: "Day 4:",
      todo: "Visit to local waterfalls and wildlife safari.",
    },
    {
      day: "Day 5:",
      todo: "Bird watching, leisure time at the villa, and departure.",
    },
  ];
  return (
    <section className="bg-white py-12 h-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center inline-block p-4 rounded-xl font-[headfont] bg-slate-200 mb-8">
          Travel Tips, Packing Lists, and Itineraries
        </h2>

        <Tips />

        <div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-[headfont] p-4 inline-block bg-slate-200 rounded-xl font-semibold m-4">
            Sample Itineraries
          </h3>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
            <h4 className="text-xl font-semibold mb-2 inline-block bg-slate-200 p-2 rounded-xl font-[headfont]">
              3-Day Itinerary
            </h4>
            <ul className="list-disc list-inside">
              {threeDayItinerary.map((item, index) => (
                <li
                  key={index}
                  className="w-full bg-slate-200 my-2 p-4 text-start"
                >
                  <strong>{item.day}:</strong> {item.todo}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-2 inline-block bg-slate-200 p-2 rounded-xl font-[headfont]">
              5-Day Itinerary
            </h4>
            <ul className="list-disc list-inside">
              {fiveDayItinerary.map((item, index) => (
                <li
                  key={index}
                  className="w-full bg-slate-200 my-2 p-4 text-start"
                >
                  <strong>{item.day}:</strong> {item.todo}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelTips;
