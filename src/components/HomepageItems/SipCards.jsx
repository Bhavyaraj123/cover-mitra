import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import sip from "../../assets/stock.jpg";
import bg from "../../assets/bg.jpg";
import ModalForm from "../Modal/ModalForm";
const features = [
  "Disciplined monthly investing for consistent growth.",
  "Helps in long-term wealth creation.",
  "Harnesses the power of compounding.",
  "Flexible to start, pause, or stop anytime.",
  "Reduces risk with rupee cost averaging.",
  "Ideal for future financial goals.",
];

// Set app element for accessibility (very important)


const SipCards = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
        const openModal = () => setIsModalOpen(true);
        const closeModal = () => setIsModalOpen(false);


  return (
    <div
      className="py-10 px-5 md:px-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
      data-aos="fade-up"
    >
      <div className="bg-white/90 rounded-md p-6 md:p-10 flex flex-col md:flex-row items-center gap-10 shadow-xl">
        {/* Left: Image */}
        <div
          className="w-full md:w-1/2 flex justify-center"
          data-aos="fade-right"
        >
          <img
            src={sip}
            alt="Systematic Investment Plan"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2" data-aos="fade-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#8F87F1]">
            Start Your SIP Journey Today
          </h2>
          <p className="text-gray-700 mb-6 capitalize">
            At CoverMitra Investments, we help you secure your future through
            smart, systematic investing...
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            {features.map((feature, index) => (
              <li
                key={index}
                className="hover:pl-2 transition-all duration-300 cursor-pointer"
              >
                {feature}
              </li>
            ))}
          </ul>
          <button
            onClick={openModal}
            className="btn border-2 border-[#8F87F1] px-6 py-3 bg-[#8F87F1] text-white font-semibold rounded-sm shadow-md hover:bg-white hover:text-[#8F87F1] hover:scale-105 hover:shadow-xl transition-all mt-10 duration-300 ease-in-out"
          >
            Start Investing
          </button>
          <ModalForm isOpen={isModalOpen} onRequestClose={closeModal}/>

{/* modal  form submission  */}
          
        </div>
      </div>
    </div>
  );
};

export default SipCards;
