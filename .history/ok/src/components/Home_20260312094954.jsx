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
      window.Shery.makeMagnet(".magnet",{
         duration: 1,
      });

      // 🖱️ Mouse Follower
    }
  }, []);
  return (


    
    <div className="relative min-h-screen w-full bg-white">
      {/* Teal Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #14b8a6 100%)`,
          backgroundSize: "100% 100%",
        }}
      />

      {/* Container */}
      <div className="container relative z-10 mx-auto   lg:h-[100vh] w-full">
        {/* Top Section → Navbar */}
        <div className="top py-2 h-[13%]">
          <nav className="relative h-[70px] flex items-center justify-between  px-4 md:px-14 lg:px-20  text-gray-900 ">
            <a href="#">
           <img src="../images/logo.png" className='h-12 lg:h-17'/>

            </a>

            {/* Desktop Menu */}
           <ul className="hidden md:flex items-center space-x-7 md:pl-40 big text-[22px] gap-2">
  <li>
    <HashLink smooth to="#project">PROJECTS</HashLink>
  </li>
  <li>
    <HashLink smooth to="#contact">ABOUT & CONTACT</HashLink>
  </li>

</ul>
<div className=' flex items-center gap-2'>
<h1 className='alan  hidden   lg:block text-[15px]'> <a
    href={/Mobi|Android/i.test(navigator.userAgent)
      ? "mailto:deepakpandey1212d@gmail.com"
      : "https://mail.google.com/mail/?view=cm&to=deepakpandey1212d@gmail.com"}
    target="_blank"
    className=" transition block py-1 break-words"
  >
     deepakpandey1212d@gmail.com
  </a></h1>
           <button
  onClick={() => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="md:inline hidden bg-[#212121] border-none px-7 py-2 rounded-full active:scale-95 transition-all text-white pop font-semibold magnet"
>
  <AnimatedButton text="CONTACT" />
</button>

</div>
            {/* Mobile Menu Button */}
            <button
              aria-label="menu-btn"
              type="button"
              className="md:hidden inline-block"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z"/>
              </svg>
            </button>
          </nav>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="mobile-menu absolute top-[70px] left-0 w-full bg-[#8cdad1] shadow-sm p-6 md:hidden z-10">
              <ul className="flex flex-col space-y-4 text-lg big ">
                <li><a href="#" className="text-gray-800">HOME</a></li>
                <li><a href="#about" className="text-gray-800">ABOUT</a></li>
             
              </ul>
              <button className="bg-black text-white  mt-6 text-md hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full">
                Get started
              </button>
            </div>
          )}
        </div>

        {/* Bottom Section → Page Content */}
        <div className="bottom mt-30 lg:mt-4  h-[90%] w-full flex flex-col-reverse lg:flex-row">
         <div className="left h-20  lg:h-full w-full lg:w-[15%]   flex flex-row  justify-center gap-15 items-center  mt-25 lg:mt-0 ">
<div className=' h-full w-[50%] text-2xl mt-25  flex flex-row lg:flex-col justify-center  lg:gap-8 gap-10 '>

<a href='https://chat.whatsapp.com/CL0vCNLkgDwE27jviEoZtQ?mode=wwc'><i class="fa-brands fa-whatsapp magnet"></i></a>
<a href='https://github.com/deepak445566'><i class="fa-brands fa-github magnet"></i></a>
<a href='https://www.linkedin.com/in/deepak-pandey-650638255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><i class="fa-brands fa-linkedin-in magnet"></i></a>
<a href='https://www.instagram.com/deepakpandey_10/'><i class="fa-brands fa-instagram magnet"></i></a>



</div>

         </div>
         <div className="middle h-[50%] lg:h-full lg:w-[80%] w-full mt-15 lg:mt-0 ">

<div className="mid0 w-full lg:h-[10%] "></div>

          <div className="mid1 w-full h-[30%]  flex ">
            <div className=' w-full flex flex-col mt-5'>
              <h1 className='text-center big text-xl uppercase'>👋 Hey I'm Deepak pandey 😎</h1>
              <h1 className=' text-4xl md:text-5xl lg:text-[120px]  big font-semibold text-center uppercase'>Building Modern</h1></div>
          </div>
          <div className="mid2 w-full lg:h-[30%] flex  ">
 <div className='  w-full py-2  lg:py-4 '><h1 className='text-4xl md:text-6xl lg:text-[100px] big font-semibold text-center text-[#6BD3C7] uppercase'>Web Solutions from</h1></div>
          </div>
          <div className="mid3 w-full h-[30%]  flex lg:items-end leading-9  text-center ">
 <div className=' w-full  '><h1 className='text-4xl md:text-6xl lg:text-[100px] big font-semibold text-center uppercase'>Frontend to Backend</h1>
 <br></br>
 <h3 className='big font-light! text-xl'> 🧑‍💻Dreamed by You - Designed by Us ⚡</h3></div>
          </div>
        
         </div>
         <div className="bottom  w-[10%] hidden  lg:flex  justify-center  items-end ">
         
         </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
