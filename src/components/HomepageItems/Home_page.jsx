import {React,useState,useEffect} from 'react';

import AOS from "aos";
import "aos/dist/aos.css";
import home_img from "../../assets/home_img.png";
import ModalForm from "../Modal/ModalForm";
const Home_page = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
      const openModal = () => setIsModalOpen(true);
      const closeModal = () => setIsModalOpen(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);


  return (
    // this page is all about the ui of home page
    // this is main page
    <div className="md:px-20 md:mt-20 mt-20 px-5 py-6 bg-[#8F87F1] md:h-[500px] w-full flex flex-col md:flex-row">
      <div className="first-div flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        {/* Text Section */}
        <div
          className="text md:w-1/2 w-full flex flex-col gap-7 text-center md:text-left"
          data-aos="fade-right"
        >
          <h2 className="text-white text-3xl md:text-5xl tracking-tight md:leading-[3.5rem] w-full md:w-96">
            Are You Covered? <br /> Home, Life & Auto Insurance .
          </h2>

          <p className="text-white text-sm md:text-base leading-relaxed md:leading-loose capitalize">
            From your home to your vehicle, from life coverage to personal needs
            — we offer reliable insurance plans to protect every part of your
            journey. Trust us to secure what matters most — with care, clarity,
            and complete coverage.
          </p>

          <div className="flex justify-center md:justify-start">
            <button
              onClick={openModal}
              className="bg-white text-[#8F87F1] font-semibold px-6 py-3 rounded-sm w-full md:w-64 shadow-md hover:bg-gray-100 capitalize"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              Talk with an Agent
            </button>
            <ModalForm isOpen={isModalOpen} onRequestClose={closeModal}  lastField={{ label: "Date", name: "date", type: "date" }}/>

          </div>
        </div>

        {/* Image Section */}
        <div
          className="picture w-full md:w-auto flex justify-center"
          data-aos="fade-left"
        >
          <img
            src={home_img}
            alt="this is image"
            className="h-60 md:h-80 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Home_page;
