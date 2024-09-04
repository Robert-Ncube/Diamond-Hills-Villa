import React from "react";

const Attractions = () => {
  return (
    <section className="bg-white text-white py-2 pb-6 h-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 font-[headfont] text-black">
          Local Attractions and Activities
        </h2>
        <p className="text-black text-md pb-6">
          Discover local attractions and activities that will make your visit to
          our villa even more memorable.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="bg-gray-100 p-6 rounded-lg shadow-lg relative"
            style={{
              backgroundImage: "url('../../../images/hike.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40 z-0 rounded-lg"></div>
            <div className="relative z-20">
              <h3 className="text-xl font-semibold mb-4">Hiking Trails</h3>
              <p>
                Explore the scenic hiking trails that wind through the lush
                green forest and offer breathtaking views of the mountains.
              </p>
            </div>
          </div>
          <div
            className="bg-gray-100 p-6 rounded-lg shadow-lg relative"
            style={{
              backgroundImage: "url('../../../images/biking.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40 z-0 rounded-lg"></div>
            <div className="relative z-20">
              <h3 className="text-xl font-semibold mb-4">Mountain Biking</h3>
              <p>
                Enjoy thrilling mountain biking adventures on well-maintained
                trails suitable for all skill levels.
              </p>
            </div>
          </div>
          <div
            className="bg-gray-100 p-6 rounded-lg shadow-lg relative"
            style={{
              backgroundImage: "url('../../../images/bird.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40 z-0 rounded-lg"></div>
            <div className="relative z-20">
              <h3 className="text-xl font-semibold mb-4">Bird Watching</h3>
              <p>
                Discover a variety of bird species in their natural habitat,
                perfect for bird enthusiasts and nature lovers.
              </p>
            </div>
          </div>
          <div
            className="bg-gray-100 p-6 rounded-lg shadow-lg relative"
            style={{
              backgroundImage: "url('../../../images/city.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40 z-0 rounded-lg"></div>
            <div className="relative z-20">
              <h3 className="text-xl font-semibold mb-4">City Tours</h3>
              <p>
                Take a short trip to the nearby city and explore its cultural
                landmarks, shopping districts, and dining options.
              </p>
            </div>
          </div>
          <div
            className="bg-gray-100 p-6 rounded-lg shadow-lg relative"
            style={{
              backgroundImage: "url('../../../images/waterfall.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40 z-0 rounded-lg"></div>
            <div className="relative z-20">
              <h3 className="text-xl font-semibold mb-4">Waterfalls</h3>
              <p>
                Visit stunning waterfalls in the area, perfect for a refreshing
                dip or a picturesque picnic spot.
              </p>
            </div>
          </div>
          <div
            className="bg-gray-100 p-6 rounded-lg shadow-lg relative"
            style={{
              backgroundImage: "url('../../../images/wildlife.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40 z-0 rounded-lg"></div>
            <div className="relative z-20">
              <h3 className="text-xl font-semibold mb-4">Wildlife Safaris</h3>
              <p>
                Embark on a wildlife safari to spot local fauna, including deer,
                foxes, and various bird species.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Attractions;
