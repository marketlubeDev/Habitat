import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/habitlogo.jpg";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div
              className="text-xl sm:text-2xl font-bold text-green-800 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img src={logo} alt="Focuz Habitat" className="max-w-40" />
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 -ml-4">
            <button
              onClick={() => {
                navigate("/");
                setTimeout(() => scrollToSection("home"), 100);
              }}
              className="text-gray-700 hover:text-green-700 transition duration-300 cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => {
                navigate("/");
                setTimeout(() => scrollToSection("about"), 100);
              }}
              className="text-gray-700 hover:text-green-700 transition duration-300 cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => {
                navigate("/");
                setTimeout(() => scrollToSection("amenities"), 100);
              }}
              className="text-gray-700 hover:text-green-700 transition duration-300 cursor-pointer"
            >
              Amenities
            </button>
            <button
              onClick={() => {
                navigate("/");
                setTimeout(() => scrollToSection("ayurveda"), 100);
              }}
              className="text-gray-700 hover:text-green-700 transition duration-300 cursor-pointer"
            >
              Ayurveda
            </button>
            <button
              onClick={() => {
                navigate("/");
                setTimeout(() => scrollToSection("gallery"), 100);
              }}
              className="text-gray-700 hover:text-green-700 transition duration-300 cursor-pointer"
            >
              Gallery
            </button>
            <a
              href="https://wa.me/918592011120?text=I%20would%20like%20to%20know%20more%20about%20Focuz%20Habitat"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-green-700 text-white rounded-button hover:bg-green-800 hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none cursor-pointer"
            >
              <i
                className={`fas ${
                  isMenuOpen ? "fa-times" : "fa-bars"
                } text-2xl`}
              ></i>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <button
              onClick={() => {
                navigate("/");
                setTimeout(() => scrollToSection("home"), 100);
              }}
              className="block py-2 text-gray-700 hover:text-green-700 w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => {
                navigate("/");
                setTimeout(() => scrollToSection("about"), 100);
              }}
              className="block py-2 text-gray-700 hover:text-green-700 w-full text-left"
            >
              About
            </button>
            <button
              onClick={() => {
                navigate("/");
                setTimeout(() => scrollToSection("amenities"), 100);
              }}
              className="block py-2 text-gray-700 hover:text-green-700 w-full text-left"
            >
              Amenities
            </button>
            <button
              onClick={() => {
                navigate("/");
                setTimeout(() => scrollToSection("ayurveda"), 100);
              }}
              className="block py-2 text-gray-700 hover:text-green-700 w-full text-left"
            >
              Ayurveda
            </button>
            <button
              onClick={() => navigate("/gallery")}
              className="block py-2 text-gray-700 hover:text-green-700 w-full text-left"
            >
              Gallery
            </button>
            <a
              href="https://wa.me/918592011120?text=I%20would%20like%20to%20know%20more%20about%20Focuz%20Habitat"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 bg-green-700 text-white px-6 py-2 rounded-button whitespace-nowrap hover:bg-green-800 transition duration-300 w-full text-center"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
