import { React, useState } from "react";
import sipData from "../../../assets/data/SipData.jsx";
import { ArrowRight, ArrowUp, ChevronDown, ChevronUp } from "lucide-react";
import bg from "../../../assets/bgofpolicy.png";
import { Link } from "react-router-dom";
import ModalForm from "../../Modal/ModalForm.jsx";
import useFetch from '../../../hooks/UseFetch.js'
import { BASE_URL } from "../../utils/config.js";
const Sip = () => {

  const{data,loader,error}=useFetch(`${BASE_URL}/api/v1/sip/getallsip`)
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  if (loader) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  const getIcon = (iconName) => {
    switch (iconName) {
      case "arrow-up":
        return <ArrowUp className="h-6 w-6 text-orange-600" />;
      case "chevron-up":
        return <ChevronUp className="h-6 w-6 text-orange-600" />;
      case "arrow-right":
        return <ArrowRight className="h-6 w-6 text-orange-600" />;
      case "chevron-down":
        return <ChevronDown className="h-6 w-6 text-orange-600" />;
      default:
        return <ArrowRight className="h-6 w-6 text-orange-600" />;
    }
  };

  return (
    <div
      className="w-full md:px-20 px-6 py-10 rounded-xl shadow-lg bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container px-4">
        {/* Header */}
        <div
          className="text-center mb-16 transition-all duration-700 ease-in-out"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-orange-700 mb-4 tracking-tight">
            Explore Our SIP Options
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-300 to-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Grow your wealth steadily with{" "}
            <span className="text-orange-500 font-semibold">Cover Mitra</span>'s
            tailored Systematic Investment Plans
          </p>
        </div>

        {/* SIP Cards */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8">
            {data.map((item, index) => (
              <Link to={`/sipdetails/${item._id}`} key={index}>
                <div
                  className="bg-orange-100 border-r-4 border-r-yellow-600 p-6 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-start gap-6"
                  data-aos="zoom-in-up"
                  data-aos-delay={index * 100} // Staggering animation
                  data-aos-duration="700"
                >
                  <div className="p-4 bg-orange-50 rounded-full shadow-md">
                    {getIcon(item.icon)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-900 mb-3">
                      {item.name}
                    </h3>
                    <p className="text-gray-600">{item.subDescription}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div
          className="md:col-span-2 mt-8 flex justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <button
            onClick={openModal}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-bold shadow-lg hover:shadow-orange-200 hover:shadow-xl transition-all duration-300 flex items-center gap-2 transform hover:scale-105 active:scale-95"
          >
            Start Your SIP Journey
            <ArrowRight className="h-5 w-5" />
          </button>
          <ModalForm isOpen={isModalOpen} onRequestClose={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default Sip;
