import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import bg from "../../../assets/bg.jpg";
import useFetch from "../../../hooks/UseFetch";
import { BASE_URL } from "../../utils/config";

const InsuranceCard = () => {
  const { data, loader, error } = useFetch(`${BASE_URL}/api/v1/insurance/allInsurance`);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleImageError = () => {
    setImageError(true);
  };

  if (loader) return <p>wait the data is Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div
      className="mt-10 py-14 px-6 md:px-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h2
        className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12"
        data-aos="fade-up"
      >
        We Provide <span className="text-blue-600">Best Insurance</span> Services
      </h2>

      <div className="grid w-full lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 place-items-center">
        {data.map((item, index) => {
          const imageUrl = `${BASE_URL}/uploads/${item.image}`; // ✅ FIXED
          console.log("Image URL:", imageUrl);  // 👈 Add this line

          return (
            <Link to={`/policy/${item._id}`} key={index}>
              <div
                className="w-72 backdrop-blur-md bg-white/70 border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-transform hover:scale-105 duration-300 ease-in-out"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <img
                  src={imageUrl}
                  alt={item.name}
                  onError={handleImageError}
                  className="w-20 h-20 object-contain mx-auto mb-5 drop-shadow-sm"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.name}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default InsuranceCard;
