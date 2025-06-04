import React from "react";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6">Focuz Habitat</h3>
            <p className="text-gray-400 mb-6">
              A premium health resort nestled in the serene landscape of
              Malappuram, Kerala, offering a perfect blend of luxury, wellness,
              and authentic experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
              >
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
              >
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
              >
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => scrollToSection("home"), 100);
                  }}
                  className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => scrollToSection("about"), 100);
                  }}
                  className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => scrollToSection("amenities"), 100);
                  }}
                  className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                >
                  Amenities
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => scrollToSection("ayurveda"), 100);
                  }}
                  className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                >
                  Ayurveda
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/gallery")}
                  className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => scrollToSection("contact"), 100);
                  }}
                  className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => scrollToSection("services"), 100);
                  }}
                  className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                >
                  Rooms & Suites
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => scrollToSection("ayurveda"), 100);
                  }}
                  className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                >
                  Ayurvedic Spa
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => scrollToSection("services"), 100);
                  }}
                  className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                >
                  Banquet Hall
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => scrollToSection("services"), 100);
                  }}
                  className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                >
                  Swimming Pool
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => scrollToSection("services"), 100);
                  }}
                  className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                >
                  Fitness Centre
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => scrollToSection("services"), 100);
                  }}
                  className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                >
                  Play Area
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for special offers, wellness tips, and
              updates.
            </p>
            <form>
              <div className="flex mb-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent border-none text-sm w-full"
                />
                <button className="bg-green-700 text-white px-4 py-2 rounded-r-lg hover:bg-green-800 transition duration-300 whitespace-nowrap cursor-pointer">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        <hr className="border-gray-800 my-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Focuz Habitat. All rights
            reserved. - made by{" "}
            <a
              href="https://www.marketlube.in"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition duration-300"
            >
              marketlube
            </a>
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition duration-300 cursor-pointer"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition duration-300 cursor-pointer"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition duration-300 cursor-pointer"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
