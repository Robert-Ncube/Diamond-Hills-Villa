import React from "react";

const BehindTheScenes = () => {
  return (
    <section className="bg-gray-100 py-12 h-full">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="text-center px-6 lg:px-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-[headfont] py-4 font-bold text-gray-800 mb-4">
              Behind the Scenes
            </h2>
            <p className="text-gray-700 py-4">
              Take a look behind the scenes at our villa, meet the staff, and
              learn about our history.Diamond Hills Villa offers breathtaking
              views and luxurious amenities. From the serene gardens to the
              elegant interiors, every corner of the villa is designed to
              provide an unforgettable experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <img
              src="../../../images/scene-1.jpg"
              alt="Villa Scene 1"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <img
              src="../../../images/scene-2.jpg"
              alt="Villa Scene 2"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <img
              src="../../../images/scene-3.jpg"
              alt="Villa Scene 3"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-[headfont] font-semibold mb-4">
            Meet Our Staff
          </h3>
          <p className="text-gray-700">
            Our dedicated team ensures that your stay at Diamond Hills Villa is
            nothing short of perfect. From our friendly concierge to our skilled
            chefs, every staff member is committed to providing exceptional
            service.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="../../../images/conceirge.jpg"
                alt="Staff Member 1"
                className="w-full h-auto rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold">Marcello Dave</h4>
              <p className="text-gray-600">Head Concierge</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="../../../images/chef-h.jpg"
                alt="Staff Member 2"
                className="w-full h-auto rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold">Chris Harvey</h4>
              <p className="text-gray-600">Executive Chef</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="../../../images/spar-m.jpg"
                alt="Staff Member 3"
                className="w-full h-auto rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold">Emily Johnson</h4>
              <p className="text-gray-600">Spa Manager</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full">
          <div className="w-full md:w-1/2 p-8 border-2 rounded-xl shadow-md shadow-black">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-[headfont] font-semibold mb-4">
              A Glimpse into Our History
            </h3>
            <p className="text-gray-700">
              Established in the early 1900s, Diamond Hills Villa has a rich
              history filled with elegance and charm. Originally built as a
              private residence, it has since been transformed into a luxurious
              retreat, preserving its historical essence while offering modern
              comforts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehindTheScenes;
