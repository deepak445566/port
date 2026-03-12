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
      // 🎯 Magnet Effect
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
          backgroundSize: "100% 100%",
        }}
      />

      {/* Container */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 min-h-screen lg:h-screen w-full flex flex-col">
        {/* Top Section → Navbar */}
        <div className="top py-2 sm:py-3 flex-shrink-0">
          <nav className="relative h-[60px] sm:h-[70px] flex items-center justify-between text-gray-900">
            {/* Logo */}
            <a href="#" className="flex-shrink-0">
              <img src="../images/logo.png" className="h-10 sm:h-12 lg:h-17 w-auto" alt="Logo" />
            </a>

            {/* Desktop Menu - Hidden on mobile/tablet */}
            <ul className="hidden md:flex items-center space-x-4 lg:space-x-7 xl:pl-40 text-base lg:text-[22px] gap-2 flex-wrap">
              <li>
                <HashLink smooth to="#project" className="hover:text-teal-600 transition whitespace-nowrap">PROJECTS</HashLink>
              </li>
              <li>
                <HashLink smooth to="#contact" className="hover:text-teal-600 transition whitespace-nowrap">ABOUT & CONTACT</HashLink>
              </li>
            </ul>

            {/* Desktop Right Section */}
            <div className='hidden md:flex items-center gap-2 lg:gap-4'>
              <h1 className='hidden lg:block text-xs xl:text-[15px]'>
                <a
                  href={getEmailLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition block py-1 break-words hover:text-teal-600"
                >
                  deepakpandey1212d@gmail.com
                </a>
              </h1>
              <button
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="hidden md:inline-block bg-[#212121] border-none px-4 lg:px-7 py-1.5 lg:py-2 rounded-full active:scale-95 transition-all text-white text-sm lg:text-base font-semibold magnet whitespace-nowrap"
              >
                <AnimatedButton text="CONTACT" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              aria-label="menu-btn"
              type="button"
              className="md:hidden inline-block p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" className="fill-current">
                <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z"/>
              </svg>
            </button>
          </nav>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="mobile-menu absolute top-[70px] left-0 w-full bg-[#8cdad1] shadow-lg p-6 md:hidden z-20">
              <ul className="flex flex-col space-y-4 text-lg">
                <li>
                  <HashLink 
                    smooth to="#project" 
                    className="text-gray-800 hover:text-teal-800 block"
                    onClick={() => setMenuOpen(false)}
                  >
                    PROJECTS
                  </HashLink>
                </li>
                <li>
                  <HashLink 
                    smooth to="#contact" 
                    className="text-gray-800 hover:text-teal-800 block"
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
                    className="text-gray-800 hover:text-teal-800 block text-sm break-all"
                    onClick={() => setMenuOpen(false)}
                  >
                    📧 Email Us
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
                className="bg-black text-white mt-6 text-md hover:bg-gray-800 active:scale-95 transition-all w-full sm:w-40 h-11 rounded-full"
              >
                Get started
              </button>
            </div>
          )}
        </div>

        {/* Bottom Section → Page Content */}
        <div className="bottom flex-1 w-full flex flex-col lg:flex-row py-4 sm:py-6 lg:py-0">
          {/* Left Social Icons */}
          <div className="left w-full lg:w-[15%] flex flex-row lg:flex-col justify-center items-center gap-8 lg:gap-10 py-4 lg:py-0 order-2 lg:order-1">
            <div className='flex flex-row lg:flex-col justify-center gap-6 sm:gap-8 lg:gap-8 text-2xl sm:text-3xl lg:text-2xl'>
              <a href='https://chat.whatsapp.com/CL0vCNLkgDwE27jviEoZtQ?mode=wwc' 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className='magnet hover:text-teal-600 transition'>
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href='https://github.com/deepak445566' 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className='magnet hover:text-teal-600 transition'>
                <i className="fa-brands fa-github"></i>
              </a>
              <a href='https://www.linkedin.com/in/deepak-pandey-650638255' 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className='magnet hover:text-teal-600 transition'>
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href='https://www.instagram.com/deepakpandey_10/' 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className='magnet hover:text-teal-600 transition'>
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Middle Content */}
          <div className="middle w-full lg:w-[80%] order-1 lg:order-2 flex flex-col justify-center">
            <div className="mid0 w-full h-0 lg:h-[10%]"></div>

            <div className="mid1 w-full flex flex-col sm:flex-row items-center justify-center mt-2 sm:mt-4 lg:mt-0">
              <h1 className='text-center text-sm sm:text-base lg:text-xl uppercase mb-2 sm:mb-0 sm:mr-2'>
                👋 Hey I'm Deepak pandey 😎
              </h1>
              <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-[80px] xl:text-[120px] font-semibold text-center uppercase leading-tight'>
                Building Modern
              </h1>
            </div>

            <div className="mid2 w-full py-1 sm:py-2">
              <h1 className='text-2xl sm:text-3xl md:text-5xl lg:text-[80px] xl:text-[120px] font-semibold text-center text-[#6BD3C7] uppercase leading-tight'>
                Web Solutions from
              </h1>
            </div>

            <div className="mid3 w-full text-center">
              <h1 className='text-2xl sm:text-3xl md:text-5xl lg:text-[80px] xl:text-[120px] font-semibold text-center uppercase leading-tight'>
                Frontend to Backend
              </h1>
              <h3 className='text-sm sm:text-base lg:text-xl mt-2 sm:mt-3 lg:mt-4 font-light px-2'>
                🧑‍💻 Dreamed by You - Designed by Us ⚡
              </h3>
            </div>
          </div>

          {/* Right Empty Space */}
          <div className="bottom w-full lg:w-[10%] hidden lg:block order-3"></div>
        </div>

        {/* Mobile Contact Button (visible only on small screens) */}
        <div className="block md:hidden w-full py-4 order-3">
          <button
            onClick={() => {
              const contactSection = document.querySelector("#contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="w-full bg-[#212121] text-white py-3 rounded-full active:scale-95 transition-all text-base font-semibold magnet"
          >
            <AnimatedButton text="CONTACT US" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;