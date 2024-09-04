// TestimonialSection.jsx
import React from "react";

const testimonials = [
  {
    name: "John Doe",
    title: "Happy Guest",
    quote:
      "This villa was absolutely amazing! The views were breathtaking and the service was top-notch.",
    image: "../../../images/john.jpg",
  },
  {
    name: "Jane Smith",
    title: "Satisfied Customer",
    quote:
      "A perfect getaway! The villa was beautiful and the staff were incredibly friendly.",
    image: "../../../images/jane.jpg",
  },
  {
    name: "Sam Wilson",
    title: "Frequent Visitor",
    quote:
      "I have stayed at many villas, but this one is by far the best. Highly recommend!",
    image: "../../../images/sam.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-slate-200 shadow-md shadow-black rounded-xl py-12 h-full">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-8 font-[headfont] md:text-4xl lg:text-5xl">
          What Our Guests Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border border-slate-800 bg-slate-100 p-6 rounded-lg shadow-lg"
            >
              <img
                className="w-16 h-16 rounded-full mx-auto mb-4"
                src={testimonial.image}
                alt={testimonial.name}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              <h3 className="text-xl font-semibold text-center">
                {testimonial.name}
              </h3>
              <p className="text-center text-gray-600">{testimonial.title}</p>
              <p className="text-center mt-4 text-gray-700">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
