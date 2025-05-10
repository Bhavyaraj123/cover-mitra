import {React,useState} from 'react';
import { FaPiggyBank, FaShieldAlt, FaChartLine, FaHandHoldingUsd } from 'react-icons/fa';
import ModalForm from '../Modal/ModalForm';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <FaShieldAlt className="text-3xl text-orange-500" />,
    title: "Insurance Plans",
    description: "Health, vehicle, and life insurance options tailored to your needs.",
    delay: 0,
  },
  {
    icon: <FaPiggyBank className="text-3xl text-orange-500" />,
    title: "Savings & Deposits",
    description: "Secure your future with high-interest savings and fixed deposits.",
    delay: 100,
  },
  {
    icon: <FaChartLine className="text-3xl text-orange-500" />,
    title: "Investment Guidance",
    description: "Mutual funds, SIPs, and personalized financial planning advice.",
    delay: 200,
  },
  {
    icon: <FaHandHoldingUsd className="text-3xl text-orange-500" />,
    title: "Loan Assistance",
    description: "Hassle-free personal, home, and business loan services.",
    delay: 300,
  },
];

const FinancialServices = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);
          const openModal = () => setIsModalOpen(true);
          const closeModal = () => setIsModalOpen(false);
  return (
    <section className="bg-white py-14 px-6 md:px-16" id="financial-services">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4" data-aos="fade-up">
          Financial Services by Cover Mitra
        </h2>
        <p 
          className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Cover Mitra offers a full suite of financial services to empower your financial freedom. Explore everything from investments to insurance under one trusted platform.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-orange-50 p-6 rounded-sm shadow-md hover:shadow-lg transition duration-300"
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div data-aos="zoom-in" data-aos-delay="400">
          <Link to='/financePage'>
          <button 
                        // onClick={openModal}

            className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold py-3 px-6 rounded-sm transition duration-300"
          >
            Explore All Services
          </button>
          </Link>
          <ModalForm isOpen={isModalOpen} onRequestClose={closeModal}  lastField={{ label: "Which type of Financial Service Do You Want?", name: "service", type: "text" }}/>

        </div>
      </div>
    </section>
  );
};

export default FinancialServices;
