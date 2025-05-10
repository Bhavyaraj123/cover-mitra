import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import bg from '../../../assets/bgofpolicy.png';

const showcaseItems = [
  {
    title: "24x7 Claim Assistance",
    desc: "Our claim assistance experts are available 24x7 to help you.",
    borderColor: "border-l-blue-500",
    emoji: "🕒"
  },
  {
    title: "Compare Easily",
    desc: "Partner with us so that you can compare your policy easily and effectively.",
    borderColor: "border-l-cyan-500",
    emoji: "🔍"
  },
  {
    title: "Great Price",
    desc: "Great price for all kinds of insurance plans available online.",
    borderColor: "border-l-green-500",
    emoji: "💸"
  },
  {
    title: "Built-in Claim Support",
    desc: "Claims support built in with every policy for help, when you need it the most.",
    borderColor: "border-l-yellow-500",
    emoji: "🤝"
  }
];

const InsuranceShowcase = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      className='w-full bg-white py-20 px-8 bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12'>

        {/* Left Text Section */}
        <div
          className='md:w-1/2'
          data-aos="fade-right"
        >
          <h2 className='text-4xl font-semibold text-gray-800 leading-tight tracking-tight'>
            What makes <br />
            <span className='text-blue-900 font-bold'>CoverMitra</span> one of <br />
            <span className='text-blue-900 font-bold'>India's favourite places</span> <br />
            to <span className='text-blue-900 font-bold'>buy insurance?</span>
          </h2>
        </div>

        {/* Right Cards Section */}
        <div className='md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white border-l-4 ${item.borderColor} shadow-md p-6 rounded-xl h-full transition-transform duration-300 hover:scale-105`}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <h3 className='text-xl font-semibold flex items-center gap-2 mb-2'>
                <span className="text-3xl">{item.emoji}</span> {item.title}
              </h3>
              <p className='text-sm text-gray-600'>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default InsuranceShowcase;
