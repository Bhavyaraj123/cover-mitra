import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MissionVision = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-gray-100 py-16 px-5 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-8" data-aos="fade-up">
          Our Mission & Vision
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Mission Section */}
          <div className="bg-white p-8 rounded-lg shadow-md" data-aos="fade-right">
            <h3 className="text-3xl font-semibold text-orange-600 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to empower individuals and businesses to make informed financial decisions by providing reliable, transparent, and customer-centric services. We aim to be the most trusted partner for all your financial needs.
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-white p-8 rounded-lg shadow-md" data-aos="fade-left">
            <h3 className="text-3xl font-semibold text-orange-600 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our vision is to transform the way people approach finance, making it simple, accessible, and effective. We strive to create a financially secure future for our clients by offering innovative solutions that cater to their unique needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
