import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutImg from '../../../assets/aboutus.png'; // Replace with your image path
import bg from "../../../assets/bg-imahe.jpg";

const AboutHero = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <section className=" bg-cover bg-center bg-no-repeat relative  py-20 px-6 md:px-20 overflow-hidden mt-20 " style={{ backgroundImage: `url(${bg})` }} >
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div 
            className="relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            data-aos="fade-right"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 mb-4">
              CoverMitra
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 font-semibold mb-4">
              Your Partner in Smart Insurance & Finance
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              At <span className="font-semibold text-orange-600">CoverMitra</span>, we empower individuals and businesses with transparent, reliable, and tailored financial solutions. From flexible loans to SIPs and comprehensive insurance plans, we secure your future with confidence.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-700 transform hover:-translate-y-1 transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center" data-aos="fade-left">
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={aboutImg}
                alt="About CoverMitra"
                className="w-full max-w-md lg:max-w-lg object-cover transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Image overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-orange-100 to-transparent"></div>
    </section>
  );
};

export default AboutHero;