// Gallery.jsx
import React from "react";
import { useState } from "react";

const images = [
  "../../../images/b-g1.jpg",
  "../../../images/b-g2.jpg",
  "../../../images/b-g3.jpg",
  "../../../images/b-g4.jpg",
  "../../../images/b-g5.jpg",
  "../../../images/b-g6.jpg",
  // Add more image paths here
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden relative h-[80vh]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute px-4 inset-0 transition-transform duration-500 ease-in-out transform ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-4 mx-6 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-4 mx-6 rounded-full"
      >
        ❯
      </button>
    </div>
  );
};

export default Gallery;
