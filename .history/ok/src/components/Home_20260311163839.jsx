import React, { useEffect, useState } from 'react';
import AnimatedButton from './v1/AnimatedButton';
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const goToContact = () => {
    navigate("/Contact");
  };

  useEffect(() => {
    if (window.Shery && window.gsap) {
      window.Shery.makeMagnet(".magnet", {
        duration: 1,
      });
    }
  }, []);

  // Email link based on device
  const getEmailLink = () => {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      return "mailto:deepakpandey1212d@gmail.com";
    } else {
      return "https://mail.google.com/mail/?view=cm&to=deepakpandey1212d@gmail.com";
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-white overflow-x-hidden">
      {/* Teal Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #14b8a6 100%)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Container */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 min-h-screen w-full flex flex-col">
        {/* Top Section - Navbar */}
        <div className="top py-2 sm:py-3 md:py-4 flex-shrink-0">
          <nav className="relative h-[60px] sm:h-[70px] flex items-center justify-between text-gray-900">
            {/* Logo */}
            <a href="#" className="flex-shrink-0">
              <img 
                src="../images/logo.png" 
                className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-17 w-auto" 
                alt="Logo" 
              />
            </a>

            {/* Desktop Menu - Hidden on mobile */}
            <ul className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-7 md:pl-20 lg:pl-32 xl:pl-40 text-sm lg:text-base xl:text-[22px] font-medium">
              <li>
                <HashLink 
                  smooth to="#project" 
                  className="hover:text-teal-600 transition-colors whitespace-nowrap"
                >
                  PROJECTS
                </HashLink>
              </li>
              <li>
                <HashLink 
                  smooth to="#contact" 
                  className="hover:text-teal-600 transition-colors whitespace-nowrap"
                >
                  ABOUT & CONTACT
                </HashLink>
              </li>
            </ul>

            {/* Desktop Right Section */}
            <div className='hidden md:flex items-center gap-2 lg:gap-3 xl:gap-4'>
              {/* Email - Hidden on tablets, visible on desktop */}
              <div className='hidden lg:block'>
                <a
                  href={getEmailLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs xl:text-[15px] hover:text-teal-600 transition-colors block py-1 break-words"
                >
                  deepakpandey1212d@gmail.com
                </a>
              </div>
              
              {/* Contact Button */}
              <button
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="hidden md:inline-block bg-[#212121] border-none px-4 lg:px-5 xl:px-7 py-1.5 lg:py-2 rounded-full active:scale-95 transition-all text-white text-xs lg:text-sm xl:text-base font-semibold magnet whitespace-nowrap"
              >
                <AnimatedButton text="CONTACT" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              aria-label="menu-btn"
              type="button"
              className="md:hidden inline-block p-2 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 30 30" 
                className="fill-current w-5 h-5 sm:w-6 sm:h-6"
              >
                <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z"/>
              </svg>
            </button>
          </nav>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="absolute top-[60px] sm:top-[70px] left-0 w-full bg-[#8cdad1] shadow-lg p-4 sm:p-6 md:hidden z-20">
              <ul className="flex flex-col space-y-3 sm:space-y-4 text-base sm:text-lg">
                <li>
                  <HashLink 
                    smooth to="#project" 
                    className="text-gray-800 hover:text-teal-800 block py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    PROJECTS
                  </HashLink>
                </li>
                <li>
                  <HashLink 
                    smooth to="#contact" 
                    className="text-gray-800 hover:text-teal-800 block py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    ABOUT & CONTACT
                  </HashLink>
                </li>
                <li>
                  <a 
                    href={getEmailLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-teal-800 block py-2 text-sm sm:text-base break-all"
                    onClick={() => setMenuOpen(false)}
                  >
                    📧 deepakpandey1212d@gmail.com
                  </a>
                </li>
              </ul>
              <button 
                onClick={() => {
                  setMenuOpen(false);
                  const contactSection = document.querySelector("#contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full sm:w-40 bg-black text-white mt-4 sm:mt-6 py-3 sm:py-2.5 text-sm sm:text-base hover:bg-gray-800 active:scale-95 transition-all rounded-full"
              >
                Get started
              </button>
            </div>
          )}
        </div>

        {/* Bottom Section - Main Content */}
        <div className="bottom flex-1 w-full flex flex-col lg:flex-row py-4 sm:py-6 md:py-8 lg:py-0">
          {/* Left Social Icons */}
          <div className="left w-full lg:w-[15%] flex flex-row lg:flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-8 xl:gap-10 py-4 lg:py-0 order-2 lg:order-1">
            <div className='flex flex-row lg:flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-5 xl:gap-8 text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl'>
              <a href='https://chat.whatsapp.com/CL0vCNLkgDwE27jviEoZtQ?mode=wwc' 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className='magnet hover:text-teal-600 transition-transform hover:scale-110 p-2'
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href='https://github.com/deepak445566' 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className='magnet hover:text-teal-600 transition-transform hover:scale-110 p-2'
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a href='https://www.linkedin.com/in/deepak-pandey-650638255' 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className='magnet hover:text-teal-600 transition-transform hover:scale-110 p-2'
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href='https://www.instagram.com/deepakpandey_10/' 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className='magnet hover:text-teal-600 transition-transform hover:scale-110 p-2'
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Middle Content - Main Heading */}
          <div className="middle w-full lg:w-[80%] order-1 lg:order-2 flex flex-col justify-center">
            {/* Spacer */}
            <div className="hidden lg:block lg:h-[5%] xl:h-[8%]"></div>

            {/* Line 1 */}
            <div className="w-full flex flex-col items-center justify-center mt-2 sm:mt-4 md:mt-6 lg:mt-0">
              <h1 className='text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl uppercase mb-1 sm:mb-2'>
                👋 Hey I'm Deepak pandey 😎
              </h1>
              <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[100px] 2xl:text-[120px] font-semibold text-center uppercase leading-tight px-2'>
                Building Modern
              </h1>
            </div>

            {/* Line 2 */}
            <div className="w-full py-1 sm:py-2 md:py-3">
              <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[100px] 2xl:text-[120px] font-semibold text-center text-[#6BD3C7] uppercase leading-tight px-2'>
                Web Solutions from
              </h1>
            </div>

            {/* Line 3 */}
            <div className="w-full text-center">
              <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[100px] 2xl:text-[120px] font-semibold text-center uppercase leading-tight px-2'>
                Frontend to Backend
              </h1>
              <h3 className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-2 sm:mt-3 md:mt-4 font-light px-2'>
                🧑‍💻 Dreamed by You - Designed by Us ⚡
              </h3>
            </div>
          </div>

          {/* Right Empty Space */}
          <div className="hidden lg:block lg:w-[5%] xl:w-[10%] order-3"></div>
        </div>

        {/* Mobile Contact Button - Visible only on small screens */}
        <div className="block md:hidden w-full py-3 sm:py-4 order-3">
          <button
            onClick={() => {
              const contactSection = document.querySelector("#contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="w-full bg-[#212121] text-white py-3 sm:py-4 rounded-full active:scale-95 transition-all text-sm sm:text-base font-semibold magnet"
          >
            <AnimatedButton text="CONTACT US" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;