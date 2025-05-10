import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/UseFetch";
import { BASE_URL } from "../utils/config";
import ModalForm from "../Modal/ModalForm";

const Policy = () => {
  const { id } = useParams();  // This will extract 'id' from the URL parameters
  const { data, loader, error } = useFetch(`${BASE_URL}/api/v1/insurance/oneInsurance/${id}`);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (loader) return <p>wait the data is Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // If the data is an array, use data[0] or directly access properties if it's an object
  const item = data[0] || data;  // Assuming data might be an array; otherwise use data directly

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 font-semibold text-2xl bg-gradient-to-b from-gray-50 to-gray-100">
        Policy not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-28 pb-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Link to="/insurancepage">
          <button className="group flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transition">
            <svg
              className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7 7-7m-7 7h18" />
            </svg>
            Back
          </button>
        </Link>

        <div className="flex items-center justify-center mb-10">
          <h1 className="text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
            {item.name}
          </h1>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative overflow-hidden rounded-sm shadow-xl transform hover:scale-105 transition-transform duration-300">
            <img
              src={`${BASE_URL}/uploads/${item.simage}`}
              alt={item.name}
              className="w-full max-w-3xl h-[26rem] object-cover"
            />
          </div>
        </div>

        {/* Grid Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Description */}
          <Section title="📜 Description" color="purple">
            <p className="text-gray-700 leading-relaxed">{item.description}</p>
          </Section>

          {/* Coverage */}
          <Section title="🛡️ Coverage" color="green">
            <ul className="space-y-3 text-gray-700">
              {item.coverage.map((coverageItem, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 text-green-500">✔️</span>
                  {coverageItem}
                </li>
              ))}
            </ul>
          </Section>

          {/* Benefits */}
          <Section title="🎁 Benefits" color="blue">
            <ul className="space-y-3 text-gray-700">
              {item.benefits.map((benefitItem, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 text-blue-500">✨</span>
                  {benefitItem}
                </li>
              ))}
            </ul>
          </Section>

          {/* Eligibility */}
          <Section title="🧾 Eligibility" color="yellow">
            <p className="text-gray-700 leading-relaxed">{item.eligibility}</p>
          </Section>

          {/* Claim Process */}
          <Section title="📂 Claim Process" color="pink">
            <p className="text-gray-700 leading-relaxed">{item.claimProcess}</p>
          </Section>

          {/* Premium Info */}
          <div className="bg-gradient-to-br from-orange-100 to-orange-200 text-orange-900 p-6 rounded-sm shadow-lg border border-orange-300 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-4">💰 Premium Info</h3>
            <p className="leading-relaxed">{item.premiumInfo}</p>
          </div>
        </div>

        <div className="flex justify-center ">
          <button
            className="px-3 py-3 bg-orange-500 text-white mt-10 font-semibold rounded-sm"
            onClick={openModal}
          >
            Get Insurance
          </button>
          <ModalForm isOpen={isModalOpen} onRequestClose={closeModal} lastField={{ label: "Type of Policy", name: "policy", type: "text" }} />
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, children, color = "purple" }) => {
  const textColor = {
    purple: "text-purple-700",
    green: "text-green-700",
    blue: "text-blue-700",
    yellow: "text-yellow-600",
    pink: "text-pink-600",
  };

  const borderColor = {
    purple: "border-purple-100",
    green: "border-green-100",
    blue: "border-blue-100",
    yellow: "border-yellow-100",
    pink: "border-pink-100",
  };

  return (
    <div
      className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl border transition-all duration-300 ${borderColor[color]}`}
    >
      <h3 className={`text-2xl font-bold mb-4 ${textColor[color]}`}>{title}</h3>
      {children}
    </div>
  );
};

export default Policy;
