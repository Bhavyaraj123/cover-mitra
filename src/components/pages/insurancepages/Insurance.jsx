import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import safety from "../../../assets/safety.png";
import keeping from "../../../assets/kieeping.png";
import InfoInsurance from "../../../assets/data/InfoInsurance";
import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../../utils/config";
import useFetch from "../../../hooks/UseFetch";

const Insurance = () => {
  const { data, loader, error } = useFetch(
    `${BASE_URL}/api/v1/insurance/allInsurance`
  );

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  if (loader) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const insurancePoints = [
    {
      icon: safety,
      text: "Offering multiple insurance services",
    },
    {
      icon: keeping,
      text: "Expert advice and secure keeping",
    },
    {
      icon: safety,
      text: "24/7 customer support for your peace of mind",
    },
    {
      icon: keeping,
      text: "Hassle-free claim settlement process",
    },
  ];

  return (
    <div className="py-20 bg-gray-50 md:px-20 px-6 w-full overflow-x-hidden">
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-10">
        {/* Left Text Section */}
        <div className="md:w-1/2 space-y-6" data-aos="fade-right">
          <h2 className="capitalize font-semibold text-3xl md:text-4xl tracking-tight text-gray-800">
            Let's find you the <br />
            <span className="text-[#8F87F1] font-bold">best insurance</span>
          </h2>

          <div className="flex flex-col gap-4">
            {insurancePoints.map((point, index) => (
              <div
                className="flex items-center gap-3"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <img
                  src={point.icon}
                  alt={`Point ${index + 1}`}
                  className="h-10 w-10 object-contain"
                />
                <p className="capitalize text-[#8F87F1] font-medium text-lg">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full md:w-1/2">
          {data.map((item, index) => (
            <Link to={`/policy/${item._id}`} key={index}>
              <div
                className="bg-white rounded-md shadow-md p-4 flex flex-col items-center text-center transition hover:shadow-lg hover:scale-105 duration-300 cursor-pointer"
                data-aos="zoom-in-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={`${BASE_URL}/uploads/${item.image}`}
                  alt={item.name}
                  className="h-20 mb-4 max-w-full object-contain"
                  loading="lazy"
                />
                <h3 className="text-lg font-semibold text-gray-700">
                  {item.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insurance;
