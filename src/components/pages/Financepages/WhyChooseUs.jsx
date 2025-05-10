import React from 'react';
import bg from "../../../assets/bgofpolicy.png";

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Expert Financial Guidance',
      desc: 'Our team of certified professionals provides tailored advice to help you achieve your goals faster.',
      icon: '💼'
    },
    {
      title: 'Transparent Process',
      desc: 'No hidden charges or confusing terms — just clear, honest financial solutions.',
      icon: '🔍'
    },
    {
      title: 'Quick & Easy Approvals',
      desc: 'From SIPs to loans, get approvals in a few simple steps — completely hassle-free!',
      icon: '⚡'
    },
    {
      title: 'Flexible Plans',
      desc: 'Choose from a variety of SIPs and loan plans that suit your income and lifestyle.',
      icon: '📊'
    },
    {
      title: 'Trusted by Thousands',
      desc: 'We’ve helped 10,000+ customers grow their wealth and manage their finances efficiently.',
      icon: '🌟'
    }
  ];

  return (
    <div
      className="bg-gray-50 py-16 px-5 md:px-20 bg-cover bg-center bg-no-repeat"
      id="why-choose-us"
      // style={{ backgroundImage: `url(${bg})` }}
    >
      <h2
        className="text-4xl font-bold text-center text-orange-600 mb-6"
        data-aos="fade-up"
      >
        Why Choose Us?
      </h2>
      <p
        className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Whether you're investing in your future or seeking the perfect loan, we provide end-to-end solutions backed by trust, speed, and simplicity.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            data-aos="zoom-in-up"
            data-aos-delay={index * 100}
            data-aos-duration="700"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-base">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
