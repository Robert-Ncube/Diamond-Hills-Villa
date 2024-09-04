import React from "react";

const Breakfast = () => {
  return (
    <div className="h-full text-center">
      <h2 className="text-4xl font-[headfont] mb-5">Yogas</h2>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Hatha Yoga</h3>
            <p>
              A gentle introduction to the most basic yoga postures, focusing on
              breathing and meditation. It's perfect for beginners and those
              looking to relax and unwind.
            </p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Vinyasa Yoga</h3>
            <p>
              Known for its fluid movements and sequences that flow smoothly
              from one pose to another, often synchronized with breath. It's
              great for those who enjoy a dynamic and varied practice.
            </p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Yin Yoga</h3>
            <p>
              A slow-paced style where poses are held for longer periods to
              target deep connective tissues and promote relaxation and
              flexibility. Ideal for those looking to de-stress and stretch
              deeply.
            </p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Ashtanga Yoga</h3>
            <p>
              A rigorous and structured practice involving a specific sequence
              of postures, designed to build strength, flexibility, and stamina.
              Suitable for those who enjoy a challenging and disciplined
              routine.
            </p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Restorative Yoga</h3>
            <p>
              Uses props like blankets and bolsters to support the body in
              restful poses, promoting deep relaxation and healing. Perfect for
              those needing to recover from stress or physical exertion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breakfast;
