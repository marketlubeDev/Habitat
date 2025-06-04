import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import habit1 from "../assets/habit1.jpg";
import habit2 from "../assets/habit2.jpg";
import habit3 from "../assets/habit3.jpg";
import habit4 from "../assets/habit4.jpg";
import habit5 from "../assets/habit5.jpg";
import habit6 from "../assets/habit6.jpg";
import habit7 from "../assets/habit7.jpg";
import habit8 from "../assets/habit8.jpg";
import habit9 from "../assets/habit9.jpg";
import habit10 from "../assets/habit10.jpg";
import habit11 from "../assets/habit11.jpg";

const FullGallery: React.FC = () => {
  const galleryImages = [
    {
      image: habit5,
      title: "Resort View",
    },

    {
      image:
        "https://static.readdy.ai/image/657a74ec9f9a047779d17698eb1c3538/d7a4c1d13c7419afdb6ea9cbcd64fce2.webp",
      title: "Luxury Room",
    },
    {
      image:
        "https://static.readdy.ai/image/657a74ec9f9a047779d17698eb1c3538/c115a24001d6c2dcdfbc912cdc2fc314.webp",
      title: "Spa Treatment",
    },
    {
      image:
        "https://static.readdy.ai/image/657a74ec9f9a047779d17698eb1c3538/b0edf65d9ee5f801d1a59c43a8aa06b0.webp",
      title: "Banquet Hall",
    },
    {
      image:
        "https://static.readdy.ai/image/657a74ec9f9a047779d17698eb1c3538/471ff8a5555a4c5fe4fa0990416335e3.webp",
      title: "Swimming Pool",
    },
    {
      image:
        "https://static.readdy.ai/image/657a74ec9f9a047779d17698eb1c3538/396d9576fd3110982b7bf2d82397646a.webp",
      title: "Fitness Center",
    },
    {
      image:
        "https://static.readdy.ai/image/657a74ec9f9a047779d17698eb1c3538/c07abc541e2c90ce440b7e98b56fae0b.webp",
      title: "Play Area",
    },
    {
      image: habit1,
      title: "Resort View",
    },
    {
      image: habit2,
      title: "Resort View",
    },
    {
      image: habit3,
      title: "Resort View",
    },
    {
      image: habit4,
      title: "Resort View",
    },

    {
      image: habit8,
      title: "Resort View",
    },
    {
      image: habit9,
      title: "Resort View",
    },
    {
      image: habit10,
      title: "Resort View",
    },
    {
      image: habit11,
      title: "Resort View",
    },
    {
      image: habit6,
      title: "Resort View",
    },
    {
      image: habit7,
      title: "Resort View",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-green-800 mb-4">
              Resort Gallery
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our beautiful resort through these stunning images
              showcasing our facilities and amenities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg aspect-[4/3] cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FullGallery;
