import { React, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ModalForm from "../../Modal/ModalForm.jsx";
import { BASE_URL } from "../../utils/config.js";
import useFetch from "../../../hooks/UseFetch.js";
import stock from '../../../assets/stock.jpg'

const SIPDetails = () => {
  const { id } = useParams(); // Get the SIP ID from URL
  const { data, loader, error } = useFetch(`${BASE_URL}/api/v1/sip/getallsip`);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loader) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const item = data.find((sip) => sip._id === id); // Find matching SIP

  if (!item) {
    return (
      <div className="text-center mt-20 text-red-600 text-xl">
        SIP not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-100 pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Link to="/financePage">
          <button className="group flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full font-medium hover:from-orange-600 hover:to-orange-700 shadow-md hover:shadow-xl transition mb-8">
            <svg
              className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7 7-7m-7 7h18"
              />
            </svg>
            Back
          </button>
        </Link>

        <div className="bg-white border border-orange-300 shadow-xl rounded-3xl overflow-hidden p-6 md:p-10 flex flex-col md:flex-row gap-10 items-center transition hover:scale-[1.01] duration-300">
          {/* Image */}
          <div className="md:w-1/2 w-full">
            <img
              src={stock}
              alt="SIP"
              className="rounded-2xl shadow-md w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 w-full space-y-5 flex flex-col">
            <h1 className="text-4xl font-extrabold text-orange-700">
              {item.name}
            </h1>
            <p className="text-xl font-medium text-gray-800">
              {item.subDescription}
            </p>
            <p className="text-md text-gray-600 leading-relaxed tracking-wide">
              {item.description}
            </p>
            <div className="mt-8 flex justify-center items-center">
              <button
                onClick={openModal}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-bold shadow-lg hover:shadow-orange-200 hover:shadow-xl transition-all duration-300 flex items-center gap-2 transform hover:scale-105 active:scale-95"
              >
                Start Your SIP Journey
              </button>
              <ModalForm isOpen={isModalOpen} onRequestClose={closeModal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIPDetails;
