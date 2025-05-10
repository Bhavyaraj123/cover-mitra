import { React, useState,useEffect } from "react";
import AOS from 'aos';

import financeHome from "../../../assets/financehome.jpeg"; // Transparent image
import bg from "../../../assets/fn.jpg";
import ModalForm from "../../Modal/ModalForm";

const FinanceHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // only animate once
    });
  }, []);

  return (
    <section className="relative py-20 md:px-20 px-5">
      {/* Low opacity background layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 z-0"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* Main content */}
      <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center max-w-full mx-auto shadow-sm">
        {/* Text Section */}
        <div className="space-y-5" data-aos="fade-right">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug border-b-2 pb-3 border-orange-400">
            Empowering Your Financial Journey with Trust & Simplicity
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            At{" "}
            <span className="font-semibold text-orange-500">CoverMitra</span>, we
            provide smart, secure, and personalized financial solutions to help
            you achieve your goals. Whether you're starting your investment
            journey with <strong>SIP</strong> or exploring opportunities in{" "}
            <strong>Mutual Funds</strong>, we guide you every step of the way.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Our expert advisors offer tailored financial planning based on your
            lifestyle, goals, and future aspirations. Need funds for a new home,
            education, or business? We’ve got you covered with{" "}
            <strong>all types of loans</strong>, ensuring hassle-free approvals and
            competitive interest rates.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Join thousands of happy clients who trust CoverMitra for their
            long-term financial well-being. Let’s build a brighter future—
            together.
          </p>

          <button
            onClick={openModal}
            className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold py-3 px-6 rounded-sm transition duration-300"
          >
            Explore All Services
          </button>

          <ModalForm
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            lastField={{
              label: "Which type of Financial Service Do You Want?",
              name: "service",
              type: "text",
            }}
          />
        </div>

        {/* Image Section */}
        <div className="flex justify-center" data-aos="fade-left">
          <img
            src={financeHome}
            alt="CoverMitra Finance"
            className="w-full md:w-[90%] h-auto object-contain"
                              loading='lazy'

          />
        </div>
      </div>
    </section>
  );
};

export default FinanceHome;
