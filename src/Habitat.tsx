// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from "react";
import imageOne from "./assets/imageOne.jpg";
import imageTwo from "./assets/imageTwo.jpg";
import imageThree from "./assets/imageThree.jpg";

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const heroSlides = [
    {
      image: imageOne,
      title: "Experience Unparalleled Luxury",
      subtitle: "Where Dreams Meet Paradise",
    },
    {
      image: imageTwo,
      title: "Exquisite Suites & Rooms",
      subtitle: "Your Private Sanctuary",
    },
    {
      image: imageThree,
      title: "Dive Into Luxury",
      subtitle: "Unforgettable Moments Await",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const services = [
    {
      title: "Rooms & Suites",
      description:
        "Luxurious accommodations with modern amenities and serene views",
      icon: "fa-bed",
      image:
        "https://readdy.ai/api/search-image?query=Elegant%20hotel%20room%20with%20king%20size%20bed%2C%20large%20windows%20with%20nature%20view%2C%20wooden%20furniture%2C%20white%20linens%2C%20soft%20lighting%2C%20modern%20amenities%2C%20luxury%20resort%20style%2C%20peaceful%20atmosphere%2C%20neutral%20color%20palette&width=400&height=300&seq=4&orientation=landscape",
    },
    {
      title: "Ayurvedic Spa",
      description:
        "Traditional treatments and therapies for complete rejuvenation",
      icon: "fa-spa",
      image:
        "https://readdy.ai/api/search-image?query=Ayurvedic%20spa%20treatment%20room%20with%20wooden%20elements%2C%20massage%20table%20with%20white%20linens%2C%20essential%20oils%2C%20soft%20lighting%2C%20tropical%20plants%2C%20peaceful%20ambiance%2C%20luxury%20wellness%20retreat%20style%2C%20natural%20materials&width=400&height=300&seq=5&orientation=landscape",
    },
    {
      title: "Banquet Hall",
      description:
        "Elegant spaces for celebrations, meetings and special occasions",
      icon: "fa-glass-cheers",
      image:
        "https://readdy.ai/api/search-image?query=Elegant%20banquet%20hall%20with%20high%20ceilings%2C%20wooden%20flooring%2C%20large%20windows%2C%20sophisticated%20lighting%2C%20round%20tables%20with%20white%20linens%2C%20floral%20arrangements%2C%20luxury%20resort%20style%2C%20warm%20ambiance&width=400&height=300&seq=6&orientation=landscape",
    },
    {
      title: "Swimming Pool",
      description: "Refreshing infinity pool surrounded by tropical gardens",
      icon: "fa-swimming-pool",
      image:
        "https://readdy.ai/api/search-image?query=Luxury%20infinity%20pool%20overlooking%20lush%20green%20landscape%2C%20lounge%20chairs%20with%20white%20cushions%2C%20palm%20trees%2C%20clear%20blue%20water%2C%20wooden%20deck%2C%20resort%20umbrellas%2C%20peaceful%20atmosphere%2C%20sunset%20lighting&width=400&height=300&seq=7&orientation=landscape",
    },
    {
      title: "Fitness Centre",
      description:
        "State-of-the-art equipment and personalized training programs",
      icon: "fa-dumbbell",
      image:
        "https://readdy.ai/api/search-image?query=Modern%20fitness%20center%20with%20wooden%20flooring%2C%20large%20windows%20with%20nature%20view%2C%20high-end%20exercise%20equipment%2C%20mirrors%2C%20yoga%20mats%2C%20water%20station%2C%20towels%2C%20luxury%20resort%20style%2C%20clean%20and%20spacious&width=400&height=300&seq=8&orientation=landscape",
    },
    {
      title: "Play Area",
      description:
        "Fun activities for all ages in a safe and engaging environment",
      icon: "fa-futbol",
      image:
        "https://readdy.ai/api/search-image?query=Outdoor%20play%20area%20with%20wooden%20structures%2C%20green%20lawn%2C%20swings%2C%20slides%2C%20climbing%20frames%2C%20surrounded%20by%20tropical%20plants%2C%20shaded%20areas%2C%20benches%2C%20luxury%20resort%20style%2C%20family-friendly%20atmosphere&width=400&height=300&seq=9&orientation=landscape",
    },
  ];
  const amenities = [
    { title: "24x7 Security & Power Backup", icon: "fa-shield-alt" },
    { title: "Pickup & Drop", icon: "fa-shuttle-van" },
    { title: "In-Room Dining", icon: "fa-utensils" },
    { title: "24x7 Room Service", icon: "fa-concierge-bell" },
    { title: "Smart TVs with OTT Access", icon: "fa-tv" },
    { title: "Tea/Coffee Maker", icon: "fa-coffee" },
    { title: "Laundry & Ironing Service", icon: "fa-tshirt" },
    { title: "Multi-Cuisine Restaurant", icon: "fa-hamburger" },
    { title: "Indoor & Outdoor Games", icon: "fa-gamepad" },
    { title: "Entertainment Spaces", icon: "fa-music" },
  ];
  //   const testimonials = [
  //     {
  //       name: "Sarah Johnson",
  //       location: "London, UK",
  //       rating: 5,
  //       text: "My stay at Focuz Habitat was truly transformative. The Ayurvedic treatments, serene environment, and attentive staff made this the perfect wellness retreat. I left feeling completely rejuvenated.",
  //     },
  //     {
  //       name: "Michael Chen",
  //       location: "Singapore",
  //       rating: 5,
  //       text: "An oasis of tranquility with world-class amenities. The perfect balance of luxury and authenticity. The Ayurvedic treatments were exceptional and the staff's attention to detail was impressive.",
  //     },
  //     {
  //       name: "Priya Sharma",
  //       location: "Mumbai, India",
  //       rating: 5,
  //       text: "Focuz Habitat exceeded all my expectations. The rooms are spacious and beautifully designed, the food is exquisite, and the spa treatments are truly rejuvenating. A hidden gem in Kerala!",
  //     },
  //   ];
  return (
    <div className="font-sans text-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 shadow-md">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-green-800">
                Focuz Habitat
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6 -ml-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-green-700 transition duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-green-700 transition duration-300"
              >
                About
              </a>
              <a
                href="#amenities"
                className="text-gray-700 hover:text-green-700 transition duration-300"
              >
                Amenities
              </a>
              <a
                href="#ayurveda"
                className="text-gray-700 hover:text-green-700 transition duration-300"
              >
                Ayurveda
              </a>
              <a
                href="#gallery"
                className="text-gray-700 hover:text-green-700 transition duration-300"
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="px-6 py-2 bg-green-700 text-white rounded-button hover:bg-green-800 hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-lg"
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
              <a
                href="#home"
                className="block py-2 text-gray-700 hover:text-green-700"
              >
                Home
              </a>
              <a
                href="#about"
                className="block py-2 text-gray-700 hover:text-green-700"
              >
                About
              </a>
              <a
                href="#services"
                className="block py-2 text-gray-700 hover:text-green-700"
              >
                Services
              </a>
              <a
                href="#amenities"
                className="block py-2 text-gray-700 hover:text-green-700"
              >
                Amenities
              </a>
              <a
                href="#ayurveda"
                className="block py-2 text-gray-700 hover:text-green-700"
              >
                Ayurveda
              </a>
              <a
                href="#gallery"
                className="block py-2 text-gray-700 hover:text-green-700"
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="block py-2 text-gray-700 hover:text-green-700"
              >
                Contact
              </a>
              <button className="mt-2 bg-green-700 text-white px-6 py-2 rounded-button whitespace-nowrap hover:bg-green-800 transition duration-300 w-full cursor-pointer">
                Book Now
              </button>
            </div>
          )}
        </div>
      </nav>
      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0  bg-black/60"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <div className="max-w-4xl mx-auto">
                <h1 className="font-poppins text-6xl md:text-7xl font-black text-white mb-4 leading-none tracking-tight transform transition-all duration-700 hover:scale-105 whitespace-nowrap">
                  {slide.title}
                </h1>
                <h2 className="font-poppins text-xl md:text-3xl font-light text-white mb-8 opacity-90 tracking-wider">
                  {slide.subtitle}
                </h2>
                <div className="flex justify-center mb-10">
                  <div className="w-32 h-[2px] bg-white opacity-80"></div>
                </div>
                <h3 className="font-poppins text-lg md:text-2xl text-white mb-12 font-light tracking-[0.2em] uppercase">
                  Luxury • Wellness • Serenity
                </h3>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <a
                    href="https://wa.me/918592011120?text=I%20want%20to%20book%20rooms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-green-800 px-10 py-4 rounded-button whitespace-nowrap transition-all duration-500 text-base font-poppins font-bold tracking-widest uppercase cursor-pointer transform hover:scale-105 hover:shadow-2xl hover:translate-y-[-4px] hover:bg-opacity-90"
                  >
                    Book Now
                  </a>
                  <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-button whitespace-nowrap transition-all duration-500 text-base font-poppins font-bold tracking-widest uppercase cursor-pointer transform hover:scale-105 hover:shadow-2xl hover:translate-y-[-4px] hover:bg-white hover:bg-opacity-20">
                    Explore Resort
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
              } cursor-pointer`}
            ></button>
          ))}
        </div>
        {/* Scroll Indicator removed */}
      </section>
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-bold mb-6 text-green-800">
                About Focuz Habitat
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Nestled in the serene landscape of Malappuram, Kerala, Focuz
                Habitat is a premium health resort where luxury meets wellness.
                Our resort is designed to provide a perfect escape from the
                hustle and bustle of everyday life, allowing you to reconnect
                with nature and yourself.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Founded on the principles of Ayurveda and holistic wellness,
                Focuz Habitat combines traditional healing practices with modern
                comforts to create a unique experience that rejuvenates your
                mind, body, and soul. Our expert team of practitioners and
                hospitality professionals ensure that every aspect of your stay
                contributes to your overall wellbeing.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you're seeking a wellness retreat, a peaceful vacation,
                or a venue for your special event, Focuz Habitat offers the
                perfect blend of luxury, nature, and authentic Kerala
                hospitality.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://readdy.ai/api/search-image?query=Aerial%20view%20of%20luxury%20health%20resort%20in%20Kerala%20with%20traditional%20architecture%2C%20surrounded%20by%20lush%20green%20palm%20trees%2C%20infinity%20pool%2C%20manicured%20gardens%2C%20walking%20paths%2C%20tropical%20setting%2C%20serene%20atmosphere%2C%20golden%20hour%20lighting&width=600&height=400&seq=10&orientation=landscape"
                  alt="Focuz Habitat Resort"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Everything We Have
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of facilities and services
              designed to make your stay comfortable, rejuvenating, and
              memorable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105"
              >
                <div className="h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <i
                      className={`fas ${service.icon} text-green-700 text-2xl mr-3`}
                    ></i>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a
                    href="#"
                    className="text-green-700 font-medium hover:text-green-800 transition duration-300 flex items-center cursor-pointer"
                  >
                    Learn More
                    <i className="fas fa-arrow-right ml-2 text-sm"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Amenities Section */}
      <section id="amenities" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Resort Amenities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enjoy our wide range of premium amenities designed to enhance your
              comfort and convenience during your stay.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-500 ease-out hover:shadow-xl hover:-translate-y-2 hover:scale-105"
              >
                <div className="text-green-700 text-3xl mb-4 transition-transform duration-500 ease-out transform hover:scale-110">
                  <i className={`fas ${amenity.icon}`}></i>
                </div>
                <h3 className="text-gray-800 font-medium">{amenity.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Ayurveda Section */}
      <section id="ayurveda" className="py-20 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://readdy.ai/api/search-image?query=Ayurvedic%20spa%20setting%20with%20wooden%20elements%2C%20massage%20oils%2C%20fresh%20herbs%2C%20flowers%2C%20candles%2C%20soft%20lighting%2C%20natural%20materials%2C%20serene%20atmosphere%2C%20luxury%20wellness%20retreat%20style%2C%20traditional%20Kerala%20elements&width=1440&height=600&seq=11&orientation=landscape')",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img
                src="https://readdy.ai/api/search-image?query=Ayurvedic%20treatment%20being%20performed%2C%20therapist%20applying%20oil%20massage%2C%20wooden%20treatment%20table%2C%20brass%20vessels%20with%20oils%2C%20fresh%20herbs%20and%20flowers%2C%20soft%20lighting%2C%20luxury%20spa%20setting%2C%20traditional%20Kerala%20style&width=600&height=400&seq=12&orientation=landscape"
                alt="Ayurvedic Treatment"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-16 text-white">
              <h2 className="text-3xl font-bold mb-6">
                Authentic Ayurvedic Experience
              </h2>
              <p className="mb-6 leading-relaxed">
                Immerse yourself in the ancient healing tradition of Ayurveda at
                our specialized wellness center. Our experienced practitioners
                offer personalized treatments designed to restore balance and
                promote holistic wellbeing.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-400 mr-3"></i>
                  <span>Abhyangam (Full Body Oil Massage)</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-400 mr-3"></i>
                  <span>Shirodhara (Stress-Relieving Treatment)</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-400 mr-3"></i>
                  <span>Pizhichil (Royal Ayurvedic Treatment)</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-400 mr-3"></i>
                  <span>Customized Wellness Programs</span>
                </li>
              </ul>
              <button className="bg-green-700 text-white px-8 py-3 rounded-button whitespace-nowrap hover:bg-green-800 transition duration-300 cursor-pointer">
                Book Treatment
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Resort Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take a visual journey through our beautiful resort and experience
              the luxury and serenity that awaits you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-lg h-80 cursor-pointer">
              <img
                src="https://readdy.ai/api/search-image?query=Luxury%20resort%20lobby%20with%20high%20ceiling%2C%20wooden%20elements%2C%20comfortable%20seating%2C%20tropical%20plants%2C%20natural%20light%2C%20water%20feature%2C%20elegant%20decor%2C%20welcoming%20atmosphere%2C%20Kerala%20style%20architecture&width=400&height=500&seq=13&orientation=portrait"
                alt="Resort Lobby"
                className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <i className="fas fa-search-plus text-white text-3xl"></i>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg h-80 cursor-pointer">
              <img
                src="https://readdy.ai/api/search-image?query=Luxury%20resort%20swimming%20pool%20surrounded%20by%20palm%20trees%2C%20lounge%20chairs%20with%20white%20cushions%2C%20umbrellas%2C%20tropical%20garden%2C%20clear%20blue%20water%2C%20wooden%20deck%2C%20peaceful%20atmosphere%2C%20sunset%20lighting&width=400&height=500&seq=14&orientation=portrait"
                alt="Swimming Pool"
                className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <i className="fas fa-search-plus text-white text-3xl"></i>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg h-80 cursor-pointer">
              <img
                src="https://readdy.ai/api/search-image?query=Luxury%20resort%20restaurant%20with%20wooden%20tables%2C%20comfortable%20chairs%2C%20large%20windows%20with%20garden%20view%2C%20elegant%20place%20settings%2C%20soft%20lighting%2C%20tropical%20plants%2C%20sophisticated%20atmosphere%2C%20Kerala%20style%20decor&width=400&height=500&seq=15&orientation=portrait"
                alt="Restaurant"
                className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <i className="fas fa-search-plus text-white text-3xl"></i>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg h-80 cursor-pointer">
              <img
                src="https://readdy.ai/api/search-image?query=Luxury%20resort%20spa%20treatment%20room%20with%20wooden%20elements%2C%20massage%20table%20with%20white%20linens%2C%20essential%20oils%2C%20candles%2C%20fresh%20flowers%2C%20soft%20lighting%2C%20peaceful%20ambiance%2C%20traditional%20Kerala%20style%20decor&width=400&height=500&seq=16&orientation=portrait"
                alt="Spa Treatment Room"
                className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <i className="fas fa-search-plus text-white text-3xl"></i>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg h-80 cursor-pointer">
              <img
                src="https://readdy.ai/api/search-image?query=Luxury%20resort%20suite%20with%20king%20size%20bed%2C%20large%20windows%20with%20garden%20view%2C%20wooden%20furniture%2C%20white%20linens%2C%20sitting%20area%2C%20elegant%20decor%2C%20modern%20amenities%2C%20spacious%20bathroom%2C%20Kerala%20style%20elements&width=400&height=500&seq=17&orientation=portrait"
                alt="Luxury Suite"
                className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <i className="fas fa-search-plus text-white text-3xl"></i>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg h-80 cursor-pointer">
              <img
                src="https://readdy.ai/api/search-image?query=Luxury%20resort%20banquet%20hall%20set%20up%20for%20event%2C%20round%20tables%20with%20white%20linens%2C%20elegant%20chairs%2C%20floral%20centerpieces%2C%20sophisticated%20lighting%2C%20high%20ceiling%2C%20wooden%20flooring%2C%20Kerala%20style%20architectural%20elements&width=400&height=500&seq=18&orientation=portrait"
                alt="Banquet Hall"
                className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <i className="fas fa-search-plus text-white text-3xl"></i>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <button className="bg-green-700 text-white px-8 py-3 rounded-button whitespace-nowrap hover:bg-green-800 transition duration-300 cursor-pointer">
              View Full Gallery
            </button>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              Guest Experiences
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Discover what our esteemed guests have to say about their
              transformative journey at Focuz Habitat.
            </p>
          </div>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                id="testimonialTrack"
                className={`flex space-x-8 py-8 transition-transform duration-500 ease-in-out ${
                  !isAutoScrollPaused && !isDragging ? "animate-scroll" : ""
                }`}
                style={{ transform: `translateX(-${scrollPosition}px)` }}
                onMouseDown={(e) => {
                  setIsDragging(true);
                  setIsAutoScrollPaused(true);
                  setStartX(e.pageX - scrollPosition);
                }}
                onMouseMove={(e) => {
                  if (!isDragging) return;
                  e.preventDefault();
                  const x = e.pageX - startX;
                  const track = document.getElementById("testimonialTrack");
                  if (track) {
                    const maxScroll = track.scrollWidth - track.clientWidth;
                    const newPosition = Math.max(0, Math.min(maxScroll, -x));
                    setScrollPosition(newPosition);
                  }
                }}
                onMouseUp={() => {
                  setIsDragging(false);
                  setTimeout(() => setIsAutoScrollPaused(false), 5000);
                }}
                onMouseLeave={() => {
                  if (isDragging) {
                    setIsDragging(false);
                    setTimeout(() => setIsAutoScrollPaused(false), 5000);
                  }
                }}
                // style={{
                //   transform: `translateX(-${scrollPosition}px)`,
                //   cursor: isDragging ? "grabbing" : "grab",
                // }}
              >
                {[
                  {
                    name: "Sarah Johnson",
                    location: "London, UK",
                    rating: 5,
                    text: "My stay at Focuz Habitat was truly transformative. The Ayurvedic treatments, serene environment, and attentive staff made this the perfect wellness retreat. I left feeling completely rejuvenated.",
                    image:
                      "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20sophisticated%20woman%20in%20her%2040s%20with%20blonde%20hair%20wearing%20elegant%20business%20attire%20natural%20lighting%20neutral%20background%20confident%20smile&width=100&height=100&seq=19&orientation=squarish",
                  },
                  {
                    name: "Michael Chen",
                    location: "Singapore",
                    rating: 5,
                    text: "An oasis of tranquility with world-class amenities. The perfect balance of luxury and authenticity. The Ayurvedic treatments were exceptional and the staff's attention to detail was impressive.",
                    image:
                      "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20an%20asian%20businessman%20in%20his%2030s%20wearing%20modern%20suit%20natural%20lighting%20neutral%20background%20warm%20smile&width=100&height=100&seq=20&orientation=squarish",
                  },
                  {
                    name: "Priya Sharma",
                    location: "Mumbai, India",
                    rating: 5,
                    text: "Focuz Habitat exceeded all my expectations. The rooms are spacious and beautifully designed, the food is exquisite, and the spa treatments are truly rejuvenating. A hidden gem in Kerala!",
                    image:
                      "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20an%20indian%20woman%20in%20her%2030s%20wearing%20elegant%20traditional%20outfit%20natural%20lighting%20neutral%20background%20genuine%20smile&width=100&height=100&seq=21&orientation=squarish",
                  },
                  {
                    name: "James Anderson",
                    location: "New York, USA",
                    rating: 5,
                    text: "The perfect escape from city life. The combination of traditional Ayurvedic treatments and modern luxury created an unforgettable experience. The staff's hospitality was outstanding.",
                    image:
                      "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20distinguished%20man%20in%20his%2050s%20wearing%20luxury%20suit%20natural%20lighting%20neutral%20background%20confident%20expression&width=100&height=100&seq=22&orientation=squarish",
                  },
                  {
                    name: "Emma Thompson",
                    location: "Melbourne, Australia",
                    rating: 5,
                    text: "A truly magical experience. The attention to detail in every aspect of the resort is remarkable. From the therapeutic treatments to the gourmet cuisine, everything was perfect.",
                    image:
                      "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20an%20australian%20woman%20in%20her%2030s%20wearing%20modern%20professional%20attire%20natural%20lighting%20neutral%20background%20bright%20smile&width=100&height=100&seq=23&orientation=squarish",
                  },
                  {
                    name: "Ahmed Al-Sayed",
                    location: "Dubai, UAE",
                    rating: 5,
                    text: "Focuz Habitat offers an unparalleled luxury wellness experience. The blend of traditional healing and modern comfort is perfectly executed. Will definitely return for another rejuvenating stay.",
                    image:
                      "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20middle%20eastern%20businessman%20in%20his%2040s%20wearing%20luxury%20suit%20natural%20lighting%20neutral%20background%20welcoming%20smile&width=100&height=100&seq=24&orientation=squarish",
                  },
                ].map((testimonial, index) => (
                  <div key={index} className="w-[400px] flex-shrink-0">
                    <div className="bg-white p-8 rounded-xl shadow-xl transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
                      <div className="flex items-center mb-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-800 text-lg">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mb-6">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className="fas fa-star text-yellow-400 mr-1"
                          ></i>
                        ))}
                      </div>
                      <p className="text-gray-700 leading-relaxed italic mb-4">
                        "{testimonial.text}"
                      </p>
                      <div className="flex justify-end">
                        <i className="fas fa-quote-right text-green-700 opacity-20 text-4xl"></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <style>
            {`
@keyframes scroll {
0% {
transform: translateX(0);
}
100% {
transform: translateX(-50%);
}
}
.animate-scroll {
animation: scroll 30s linear infinite;
}
.animate-scroll:hover {
animation-play-state: paused;
}
#testimonialTrack * {
user-select: none;
-webkit-user-drag: none;
}
#testimonialTrack {
will-change: transform;
}
`}
          </style>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions or ready to book your stay? Reach out to us and our
              team will be happy to assist you.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <form className="bg-white p-8 rounded-lg shadow-lg h-full">
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                    placeholder="+91 999999999"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button className="w-full bg-green-700 text-white py-3 rounded-button whitespace-nowrap hover:bg-green-800 transition duration-300 cursor-pointer">
                  Send Message
                </button>
              </form>
            </div>
            <div className="lg:w-1/2 lg:pl-10">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                <div className="h-72 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.6677835817!2d76.0!3d11.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzAwLjAiTiA3NsKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1619712345678!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Focuz Habitat Location"
                    className="absolute inset-0"
                  ></iframe>
                </div>
                <div className="p-8 bg-gradient-to-b from-white to-gray-50 h-full">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="transform hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                          <i className="fas fa-map-marker-alt text-green-600 text-xl"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            Location
                          </h4>
                          <p className="text-gray-600 text-sm mt-1">
                            Focuz Habitat, Malappuram, Kerala, India
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="transform hover:scale-105 transition-transform duration-300">
                      <a
                        href="tel:+918592011120"
                        className="flex items-center space-x-4 cursor-pointer"
                      >
                        <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                          <i className="fas fa-phone-alt text-green-600 text-xl"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            Call Us
                          </h4>
                          <p className="text-gray-600 text-sm mt-1">
                            +91 85920 11120
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="transform hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                          <i className="fas fa-envelope text-green-600 text-xl"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            Email Us
                          </h4>
                          <p className="text-gray-600 text-sm mt-1">
                            info@focuzhabitat.com
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="transform hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                          <i className="fas fa-clock text-green-600 text-xl"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            Open Hours
                          </h4>
                          <p className="text-gray-600 text-sm mt-1">
                            24/7 Customer Service
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Connect With Us
                        </h4>
                        <p className="text-gray-600 text-sm mt-1">
                          Follow us on social media
                        </p>
                      </div>
                      <div className="flex space-x-4">
                        <a
                          href="#"
                          className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 hover:bg-green-100 transition-colors duration-300"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                          href="#"
                          className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 hover:bg-green-100 transition-colors duration-300"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a
                          href="#"
                          className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 hover:bg-green-100 transition-colors duration-300"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a
                          href="#"
                          className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 hover:bg-green-100 transition-colors duration-300"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-6">Focuz Habitat</h3>
              <p className="text-gray-400 mb-6">
                A premium health resort nestled in the serene landscape of
                Malappuram, Kerala, offering a perfect blend of luxury,
                wellness, and authentic experiences.
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
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#amenities"
                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                  >
                    Amenities
                  </a>
                </li>
                <li>
                  <a
                    href="#ayurveda"
                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                  >
                    Ayurveda
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                    onClick={e => {
                      e.preventDefault();
                      const el = document.getElementById("gallery");
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                  >
                    Rooms & Suites
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                  >
                    Ayurvedic Spa
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                  >
                    Banquet Hall
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                  >
                    Swimming Pool
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                  >
                    Fitness Centre
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                  >
                    Play Area
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
              <p className="text-gray-400 mb-6">
                Subscribe to our newsletter for special offers, wellness tips,
                and updates.
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
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
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
            <div className="flex space-x-6">
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
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/911234567890"
        className="fixed bottom-6 right-6 bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 transition duration-300 z-50 cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </a>
      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 left-6 bg-gray-800 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition duration-300 z-50 cursor-pointer"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
};
export default App;
