import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import insu from '../../../assets/insurancepageimage.png';
import medical from '../../../assets/medicalinsu.jpg';

const InsuranceHome1 = () => {
  const images = [insu, medical];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleDotClick = (index) => {
    setCurrent(index);
  };

  return (
    <div className="px-5 md:px-20 py-6 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">

        {/* Text */}
        <div
          className="w-full md:w-1/2 text-center md:text-left"
          data-aos="fade-right"
        >
          <h2 className="text-black text-3xl md:text-5xl font-semibold mb-4">
            let’s find you the best insurance policy
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-xl">
            From your home to your vehicle, from life coverage to personal needs — we offer
            reliable insurance plans to protect every part of your journey. Trust us to secure
            what matters most — with care, clarity, and complete coverage.
          </p>
        </div>

        {/* Image Slider */}
        <div
          className="w-full md:w-[40%]"
          data-aos="fade-left"
        >
          <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`slide-${index}`}
                  className="w-full flex-shrink-0 object-cover h-44 md:h-60 rounded-xl"
                  loading='lazy'
                />
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-3 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  current === index ? 'bg-blue-600 w-4' : 'bg-gray-300'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceHome1;
