import React from "react";
import { useState } from "react";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Booking Details:", formData);
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-auto bg-slate-600 p-2 pt-24 md:pt-28">
      <div className="w-full mx-10 my-8  bg-slate-400 pt-24 lg:pt-28 p-8 md-w-1/2 rounded-xl shadow-md border-2 border-slate-800">
        <div className="w-full md:w-1/2 mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Book Your Stay
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Check-In Date</label>
              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Check-Out Date</label>
              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Number of Guests</label>
              <input
                type="number"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                min="1"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-normal md-w-1/2 mx-10 gap-2">
        <img
          src="../../images/book2.jpg"
          alt="booking-pic"
          className="w-[20%]"
        />
        <img
          src="../../images/book1.jpg"
          alt="booking-pic"
          className="w-[60%]"
        />
      </div>
    </div>
  );
};

export default Booking;
