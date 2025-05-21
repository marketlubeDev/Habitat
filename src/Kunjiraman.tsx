// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
const App: React.FC = () => {
  // Add custom animation keyframes
  const style = document.createElement("style");
  style.textContent = `
@keyframes spin-slow {
from {
transform: rotate(0deg);
}
to {
transform: rotate(360deg);
}
}
@keyframes wiggle {
0%, 100% {
transform: rotate(0deg);
}
25% {
transform: rotate(-10deg);
}
75% {
transform: rotate(10deg);
}
}
.animate-spin-slow {
animation: spin-slow 3s linear infinite;
}
.animate-wiggle {
animation: wiggle 1s ease-in-out infinite;
}
`;
  document.head.appendChild(style);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="font-sans min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <i className="fas fa-phone-alt text-sm mr-2"></i>
              <span className="text-sm">+91 98473 20217</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-envelope text-sm mr-2"></i>
              <span className="text-sm">jpwcp486@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <i className="fas fa-clock text-sm mr-2"></i>
              <span className="text-sm">9 AM - 8 PM</span>
            </div>
          </div>
        </div>
      </div>
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-xl md:text-2xl font-bold text-blue-800">
                K. Kunhiraman{" "}
                <span className="text-green-600">
                  Cleaning Solutions & Plastic Agencies
                </span>
              </div>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    ?.getElementById("home")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    ?.getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer"
              >
                About
              </a>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    ?.getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer"
              >
                Services
              </a>
              <a
                href="#clients"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    ?.getElementById("clients")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer"
              >
                Clients
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    ?.getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer"
              >
                Contact
              </a>
            </nav>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-600 focus:outline-none cursor-pointer !rounded-button whitespace-nowrap"
              >
                <i
                  className={`fas ${
                    isMenuOpen ? "fa-times" : "fa-bars"
                  } text-2xl`}
                ></i>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    ?.getElementById("home")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-blue-600 font-medium py-2 border-b border-gray-100 cursor-pointer"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    ?.getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-blue-600 font-medium py-2 border-b border-gray-100 cursor-pointer"
              >
                About
              </a>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    ?.getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-blue-600 font-medium py-2 border-b border-gray-100 cursor-pointer"
              >
                Services
              </a>
              <a
                href="#clients"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    ?.getElementById("clients")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-blue-600 font-medium py-2 border-b border-gray-100 cursor-pointer"
              >
                Clients
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    ?.getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-blue-600 font-medium py-2 cursor-pointer"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </header>
      {/* Hero Banner */}
      <section
        id="home"
        className="relative bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden"
      >
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://readdy.ai/api/search-image?query=Professional%20cleaning%20supplies%20arranged%20neatly%20on%20a%20shelf%20with%20blue%20background%2C%20cleaning%20bottles%2C%20mops%2C%20and%20sanitizers%20in%20a%20modern%20clean%20environment%2C%20high-quality%20professional%20photography%20with%20soft%20lighting%20and%20minimalist%20composition&width=1440&height=600&seq=1&orientation=landscape"
            alt="Cleaning Essentials Background"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="container mx-auto px-4 py-16 md:py-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 text-white mb-8 md:mb-0 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Complete Hygiene & Cleaning Essentials Under One Roof
              </h1>
              <p className="text-xl md:text-2xl mb-6 opacity-90">
                Your Trusted Cleaning Partner in Calicut
              </p>
              <div className="flex flex-col sm:flex-row sm:justify-start justify-center gap-4">
                <a
                  href="https://wa.me/919847320217"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center !rounded-button whitespace-nowrap cursor-pointer"
                >
                  <span>Contact Us</span>
                  <i className="fas fa-arrow-right ml-2"></i>
                </a>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("services")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-white hover:bg-gray-100 text-blue-800 font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center !rounded-button whitespace-nowrap cursor-pointer"
                >
                  <span>View Services</span>
                  <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              {/* This space is intentionally left empty as the background image covers the entire section */}
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 transition-all duration-500 hover:transform hover:scale-105">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-4 transition-colors duration-300 hover:text-blue-600">
              Our Cleaning Services
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4 transition-colors duration-300 hover:text-gray-800">
              We provide a comprehensive range of cleaning essentials to meet
              all your hygiene needs, from homes to institutions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-fadeIn">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://static.readdy.ai/image/657a74ec9f9a047779d17698eb1c3538/4ae9decf8b03b549e9f012b3c8c4a245.jpeg"
                  alt="Floor Cleaners"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-broom text-blue-600 text-2xl mr-3"></i>
                  <h3 className="text-xl font-bold text-gray-800 whitespace-nowrap">
                    Floor Cleaners
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2 h-12">
                  Professional-grade floor cleaning solutions that effectively
                  remove dirt and stains.
                </p>
              </div>
            </div>
            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20luxury%20bathroom%20interior%20with%20white%20porcelain%20fixtures%2C%20gleaming%20clean%20surfaces%2C%20subtle%20lighting%2C%20minimalist%20design%2C%20showing%20pristine%20cleanliness%20and%20hygiene%2C%20professional%20architectural%20photography%20with%20soft%20natural%20lighting&width=400&height=300&seq=3&orientation=landscape"
                  alt="Toilet Cleaners"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-toilet text-blue-600 text-2xl mr-3"></i>
                  <h3 className="text-xl font-bold text-gray-800 whitespace-nowrap">
                    Toilet Cleaners
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2 h-12">
                  Advanced formulation toilet cleaners that eliminate 99.9% of
                  germs and effectively.
                </p>
              </div>
            </div>
            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20glass%20cleaning%20spray%20bottles%20with%20microfiber%20cloths%20next%20to%20clean%20mirrors%20and%20windows%2C%20product%20photography%20with%20soft%20lighting%20against%20a%20minimalist%20background%2C%20showing%20streak-free%20cleaning%20solutions&width=400&height=300&seq=4&orientation=landscape"
                  alt="Glass & Mirror Cleaners"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-glass text-blue-600 text-2xl mr-3"></i>
                  <h3 className="text-xl font-bold text-gray-800 whitespace-nowrap">
                    Glass & Mirror Cleaners
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2 h-12">
                  Specialized cleaning solutions that deliver streak-free shine
                  and crystal-clear results.
                </p>
              </div>
            </div>
            {/* Service 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://static.readdy.ai/image/657a74ec9f9a047779d17698eb1c3538/3a3ec65351bddcc4da06692a6a84fddb.webp"
                  alt="Handwash & Sanitizers"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-hands-wash text-blue-600 text-2xl mr-3"></i>
                  <h3 className="text-xl font-bold text-gray-800 whitespace-nowrap">
                    Handwash & Sanitizers
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2 h-12">
                  Gentle yet powerful hand hygiene products enriched with
                  skin-friendly ingredients.
                </p>
              </div>
            </div>
            {/* Service 5 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20multipurpose%20cleaning%20solution%20bottles%20with%20spray%20nozzles%20arranged%20neatly%2C%20product%20photography%20with%20soft%20lighting%20against%20a%20minimalist%20background%2C%20showing%20versatile%20cleaning%20products%20for%20different%20surfaces&width=400&height=300&seq=6&orientation=landscape"
                  alt="Multipurpose Cleaners"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-spray-can text-blue-600 text-2xl mr-3"></i>
                  <h3 className="text-xl font-bold text-gray-800 whitespace-nowrap">
                    Multipurpose Cleaners
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2 h-12">
                  Versatile cleaning solutions designed to effectively clean
                  multiple surface types.
                </p>
              </div>
            </div>
            {/* Service 6 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20household%20cleaning%20items%20including%20mops%20brooms%20brushes%20and%20cleaning%20cloths%20arranged%20neatly%20on%20wooden%20surface%20product%20photography%20with%20soft%20lighting%20against%20minimalist%20background%20showing%20essential%20cleaning%20tools&width=400&height=300&seq=7&orientation=landscape"
                  alt="Household Cleaning Items"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-home text-blue-600 text-2xl mr-3"></i>
                  <h3 className="text-xl font-bold text-gray-800 whitespace-nowrap">
                    Household Cleaning Items
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2 h-12">
                  Comprehensive selection of professional-grade cleaning tools
                  and accessories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* USPs Section */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-4">
              Why Choose Us
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              We take pride in offering the best cleaning solutions with
              exceptional service quality.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* USP 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-blue-200 group-hover:shadow-lg">
                <i className="fas fa-history text-blue-600 text-2xl transition-all duration-300 group-hover:scale-110"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-blue-600">
                Trusted Legacy
              </h3>
              <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                35+ years of service excellence in quality cleaning solutions.
              </p>
            </div>
            {/* USP 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-blue-200 group-hover:shadow-lg">
                <i className="fas fa-award text-blue-600 text-2xl transition-all duration-300 group-hover:scale-110"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-blue-600">
                Branded Quality
              </h3>
              <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                Authorized dealer of premium brands like Diversey & Taski.
              </p>
            </div>
            {/* USP 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-blue-200 group-hover:shadow-lg">
                <i className="fas fa-boxes text-blue-600 text-2xl transition-all duration-300 group-hover:scale-110"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-blue-600">
                Wide Range
              </h3>
              <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                One-stop destination for all your cleaning product requirements.
              </p>
            </div>
            {/* USP 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-blue-200 group-hover:shadow-lg">
                <i className="fas fa-headset text-blue-600 text-2xl transition-all duration-300 group-hover:scale-110"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-blue-600">
                Expert Support
              </h3>
              <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                Personalized guidance to help you choose the right solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* How We Work */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-4">
              How We Work
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Our simple 3-step process ensures you get the best cleaning
              solutions for your needs.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
            {/* Step 1 */}
            <div className="w-full md:w-1/3 text-center px-4 mb-8 md:mb-0 group">
              <div className="relative transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:bg-blue-700">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-blue-600">
                  Enquire With Us
                </h3>
                <p className="text-gray-600 transition-all duration-300 group-hover:text-gray-800">
                  Contact us via call, WhatsApp message, or visit our store to
                  discuss your requirements.
                </p>
              </div>
            </div>
            {/* Arrow */}
            <div className="hidden md:block w-12 text-center">
              <i className="fas fa-arrow-right text-blue-400 text-3xl"></i>
            </div>
            {/* Step 2 */}
            <div className="w-full md:w-1/3 text-center px-4 mb-8 md:mb-0 group">
              <div className="relative transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:bg-blue-700">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-blue-600">
                  Get Quality Products
                </h3>
                <p className="text-gray-600 transition-all duration-300 group-hover:text-gray-800">
                  Choose from our wide range of branded cleaning essentials
                  suited to your needs.
                </p>
              </div>
            </div>
            {/* Arrow */}
            <div className="hidden md:block w-12 text-center">
              <i className="fas fa-arrow-right text-blue-400 text-3xl"></i>
            </div>
            {/* Step 3 */}
            <div className="w-full md:w-1/3 text-center px-4 group">
              <div className="relative transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:bg-blue-700">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-blue-600">
                  Get Clean Environment
                </h3>
                <p className="text-gray-600 transition-all duration-300 group-hover:text-gray-800">
                  Achieve hygienic results at every scale, from homes to large
                  institutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section id="about" className="py-8 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-10">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6 text-center md:text-left">
                About K. Kunhiraman Cleaning Solutions & Plastic Agencies
              </h2>
              <p className="text-gray-600 mb-6">
                For over 35 years, K. Kunhiraman Cleaning Solutions & Plastic
                Agencies has been Calicut's trusted partner for comprehensive
                cleaning essentials. As an authorized dealer of premium brands
                like Diversey & Taski, we offer high-quality cleaning products
                for homes, offices, hospitals, hotels, and other institutions.
              </p>
              <p className="text-gray-600 mb-6">
                Our extensive range of products ensures that all your cleaning
                needs are met under one roof. With our expert guidance, we help
                you choose the right cleaning solutions for your specific
                requirements.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
                  <i className="fas fa-check-circle text-green-500 text-xl mr-3"></i>
                  <span className="text-gray-800 font-medium">
                    Authorized Diversey Dealer
                  </span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
                  <i className="fas fa-check-circle text-green-500 text-xl mr-3"></i>
                  <span className="text-gray-800 font-medium">
                    Authorized Taski Dealer
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex flex-col space-y-6">
                  <div className="flex items-center group transition-all duration-300 hover:-translate-x-1 cursor-pointer">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-blue-200 group-hover:shadow-lg">
                      <i className="fas fa-calendar-alt text-blue-600 text-2xl transition-all duration-300 group-hover:scale-110"></i>
                    </div>
                    <div className="transition-all duration-300 group-hover:translate-x-2">
                      <h3 className="text-2xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
                        35+ Years
                      </h3>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                        Of Experience & Excellence
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center group transition-all duration-300 hover:-translate-x-1 cursor-pointer">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-blue-200 group-hover:shadow-lg">
                      <i className="fas fa-map-marker-alt text-blue-600 text-2xl transition-all duration-300 group-hover:scale-110"></i>
                    </div>
                    <div className="transition-all duration-300 group-hover:translate-x-2">
                      <h3 className="text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
                        Location
                      </h3>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                        Court Rd, Mananchira, Kozhikode, Kerala 673032
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center group transition-all duration-300 hover:-translate-x-1 cursor-pointer">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-blue-200 group-hover:shadow-lg">
                      <i className="fas fa-phone-alt text-blue-600 text-2xl transition-all duration-300 group-hover:scale-110"></i>
                    </div>
                    <div className="transition-all duration-300 group-hover:translate-x-2">
                      <h3 className="text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
                        Contact
                      </h3>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                        Phone: +91 98460 06545
                      </p>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                        Email: jpwcp486@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center group transition-all duration-300 hover:-translate-x-1 cursor-pointer">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-blue-200 group-hover:shadow-lg">
                      <i className="fas fa-clock text-blue-600 text-2xl transition-all duration-300 group-hover:scale-110"></i>
                    </div>
                    <div className="transition-all duration-300 group-hover:translate-x-2">
                      <h3 className="text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
                        Shop Hours
                      </h3>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                        9 AM - 8 PM, Monday to Saturday
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Plastic Products Banner */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://readdy.ai/api/search-image?query=Modern%20plastic%20household%20items%20including%20storage%20containers%20bowls%20and%20kitchen%20accessories%20arranged%20beautifully%20on%20white%20surface%20professional%20product%20photography%20with%20soft%20lighting%20against%20clean%20minimalist%20background%20showing%20quality%20household%20products&width=1440&height=600&seq=8&orientation=landscape"
            alt="Plastic Household Items"
            className="w-full h-full object-cover object-top brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Plastic Household Items for Retail & Wholesale
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-8">
                Discover our extensive collection of high-quality plastic
                household items. Perfect for both retail customers and wholesale
                buyers.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <a
                  href="tel:+919846006545"
                  className="bg-white text-blue-800 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium flex items-center justify-center transition duration-300 !rounded-button whitespace-nowrap"
                >
                  <i className="fas fa-phone-alt mr-2"></i>
                  <span>Call for Wholesale</span>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      ?.getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-800 px-6 py-3 rounded-lg font-medium flex items-center justify-center transition duration-300 !rounded-button whitespace-nowrap"
                >
                  <i className="fas fa-store mr-2"></i>
                  <span>Visit Our Store</span>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 backdrop-blur p-4 rounded-lg text-center transform transition-all duration-500 hover:scale-105 hover:bg-white/30 animate-fadeIn">
                    <i className="fas fa-box text-4xl text-white mb-2 animate-bounce"></i>
                    <h3 className="text-white font-semibold">Bulk Orders</h3>
                    <p className="text-blue-100 text-sm">Available</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur p-4 rounded-lg text-center transform transition-all duration-500 hover:scale-105 hover:bg-white/30 animate-fadeIn delay-100">
                    <i className="fas fa-truck text-4xl text-white mb-2 animate-pulse"></i>
                    <h3 className="text-white font-semibold">Quick Delivery</h3>
                    <p className="text-blue-100 text-sm">Local Area</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur p-4 rounded-lg text-center transform transition-all duration-500 hover:scale-105 hover:bg-white/30 animate-fadeIn delay-200">
                    <i className="fas fa-certificate text-4xl text-white mb-2 animate-spin-slow"></i>
                    <h3 className="text-white font-semibold">Quality</h3>
                    <p className="text-blue-100 text-sm">Assured</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur p-4 rounded-lg text-center transform transition-all duration-500 hover:scale-105 hover:bg-white/30 animate-fadeIn delay-300">
                    <i className="fas fa-tags text-4xl text-white mb-2 animate-wiggle"></i>
                    <h3 className="text-white font-semibold">Best Prices</h3>
                    <p className="text-blue-100 text-sm">Guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Clients & Testimonials */}
      <section id="clients" className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
              Our Clients & Testimonials
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-2">
              We're proud to serve some of the most prestigious establishments
              in Calicut.
            </p>
          </div>
          {/* Clients */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Trusted By
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                <i className="fas fa-hotel text-4xl text-blue-600 mb-3 transition-transform duration-300 group-hover:scale-110"></i>
                <div className="text-center">
                  <h4 className="text-lg font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
                    Malabar Palace
                  </h4>
                  <p className="text-sm text-gray-500 font-light">Calicut</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                <i className="fas fa-building text-4xl text-blue-600 mb-3 transition-transform duration-300 group-hover:scale-110"></i>
                <div className="text-center">
                  <h4 className="text-lg font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
                    Hyson Heritage
                  </h4>
                  <p className="text-sm text-gray-500 font-light">Calicut</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                <i className="fas fa-hospital text-4xl text-blue-600 mb-3 transition-transform duration-300 group-hover:scale-110"></i>
                <div className="text-center">
                  <h4 className="text-lg font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
                    City Hospital
                  </h4>
                  <p className="text-sm text-gray-500 font-light">Calicut</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                <i className="fas fa-utensils text-4xl text-blue-600 mb-3 transition-transform duration-300 group-hover:scale-110"></i>
                <div className="text-center">
                  <h4 className="text-lg font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
                    Grand Restaurant
                  </h4>
                  <p className="text-sm text-gray-500 font-light">Calicut</p>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonials */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              What Our Clients Say
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-blue-200 group-hover:shadow-lg">
                    <i className="fas fa-user text-blue-600 transition-transform duration-300 group-hover:scale-110"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
                      Rajesh Kumar
                    </h4>
                    <p className="text-gray-600">Manager, Malabar Palace</p>
                  </div>
                </div>
                <div className="mb-4 transition-transform duration-300 group-hover:scale-105">
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                </div>
                <p className="text-gray-600 italic transition-colors duration-300 group-hover:text-gray-800">
                  "We've been using K. Kunjiraman's cleaning products for over a
                  decade. Their quality is consistently excellent, and their
                  service is reliable. They understand our hotel's specific
                  needs and always deliver the right solutions."
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-blue-200 group-hover:shadow-lg">
                    <i className="fas fa-user text-blue-600 transition-transform duration-300 group-hover:scale-110"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
                      Priya Menon
                    </h4>
                    <p className="text-gray-600">Director, Hyson Heritage</p>
                  </div>
                </div>
                <div className="mb-4 transition-transform duration-300 group-hover:scale-105">
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                </div>
                <p className="text-gray-600 italic transition-colors duration-300 group-hover:text-gray-800">
                  "The team at K. Kunjiraman Cleaning Solutions provides
                  exceptional service and high-quality products. Their expertise
                  in recommending the right cleaning solutions for different
                  areas of our establishment has been invaluable."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact CTA */}
      <section className="py-8 md:py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
            Ready to Transform Your Cleaning Experience?
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto px-2">
            Contact us today to discuss your cleaning requirements and find the
            perfect solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919847320217"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center !rounded-button whitespace-nowrap cursor-pointer"
            >
              <i className="fab fa-whatsapp mr-2 text-xl"></i>
              <span>WhatsApp Us</span>
            </a>
            <a
              href="tel:+919847320217"
              className="bg-white hover:bg-gray-100 text-blue-800 font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center !rounded-button whitespace-nowrap cursor-pointer"
            >
              <i className="fas fa-phone-alt mr-2"></i>
              <span>Call Us</span>
            </a>
            <a
              href="mailto:jpwcp486@gmail.com"
              className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center !rounded-button whitespace-nowrap cursor-pointer"
            >
              <i className="fas fa-envelope mr-2"></i>
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer
        id="contact"
        className="bg-gray-900 text-white pt-8 md:pt-16 pb-8"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 md:mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                K. Kunhiraman Cleaning Solutions & Plastic Agencies
              </h3>
              <p className="text-gray-400 mb-4">
                Authorised Diversey & Taski dealers in Calicut, offering
                reliable cleaning solutions for every space and surface.
              </p>
              <div className="flex space-x-4 mt-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                >
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                >
                  <i className="fab fa-whatsapp text-xl"></i>
                </a>
              </div>
            </div>
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#home"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("home")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        ?.getElementById("about")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        ?.getElementById("services")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#clients"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        ?.getElementById("clients")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                  >
                    Clients
                  </a>
                </li>
              </ul>
            </div>
            {/* Contact Details */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt mt-1 mr-3 text-blue-400"></i>
                  <span className="text-gray-400">
                    K. Kunhiraman Cleaning Solutions & Plastic Agencies, Court
                    Rd, Mananchira, Kozhikode, Kerala 673032
                  </span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone-alt mr-3 text-blue-400"></i>
                  <span className="text-gray-400">+91 98473 20217</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-3 text-blue-400"></i>
                  <span className="text-gray-400">jpwcp486@gmail.com</span>
                </li>
              </ul>
            </div>
            {/* Business Hours */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">
                Business Hours
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-clock mr-3 text-blue-400"></i>
                  <div>
                    <p className="text-gray-400">Monday - Saturday</p>
                    <p className="text-gray-400">9:00 AM - 8:00 PM</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-clock mr-3 text-blue-400"></i>
                  <div>
                    <p className="text-gray-400">Sunday</p>
                    <p className="text-gray-400">Closed</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 mb-2">
              &copy; {new Date().getFullYear()} K. Kunhiraman Cleaning Solutions
              & Plastic Agencies. All rights reserved.
            </p>
            <p className="text-gray-500">
              Made by{" "}
              <a
                href="https://www.marketlube.in"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-400 transition-colors duration-300"
              >
                marketlube
              </a>
            </p>
          </div>
        </div>
      </footer>
      {/* Floating Contact Buttons */}
      <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 flex flex-col space-y-2 md:space-y-3 z-50">
        <a
          href="https://wa.me/919847320217"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg transition duration-300 cursor-pointer !rounded-button whitespace-nowrap"
        >
          <i className="fab fa-whatsapp text-xl md:text-2xl"></i>
        </a>
        <a
          href="tel:+919847320217"
          className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition duration-300 cursor-pointer !rounded-button whitespace-nowrap"
        >
          <i className="fas fa-phone-alt"></i>
        </a>
      </div>
    </div>
  );
};
export default App;
