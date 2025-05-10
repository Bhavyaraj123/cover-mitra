import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bg from '../../../assets/bgofpolicy.png'

const AnimatedNumbers = () => {
  const [startCount, setStartCount] = useState(false);

  // This function will trigger once the component enters the viewport
  const handleScroll = () => {
    const element = document.getElementById('animated-numbers');
    const position = element.getBoundingClientRect();
    if (position.top < window.innerHeight && position.bottom >= 0) {
      setStartCount(true);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1500 });

    // Adding event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="animated-numbers"
      className="bg-gray-50 py-16 px-6 md:px-20"
      data-aos="fade-up"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12">
          Our Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Animated Number 1 */}
          <div className="p-8 bg-purple-100 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-5xl font-bold text-indigo-600 mb-4">
              {startCount && <CountUp end={5000} duration={2} separator="," />}+
            </h3>
            <p className="text-lg text-gray-600">Happy Clients</p>
          </div>

          {/* Animated Number 2 */}
          <div className="p-8 bg-purple-100 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-5xl font-bold text-teal-600 mb-4">
              {startCount && <CountUp end={7000} duration={2} separator="," />}+
            </h3>
            <p className="text-lg text-gray-600">policies sold</p>
          </div>

          {/* Animated Number 3 */}
          <div className="p-8 bg-purple-100 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-5xl font-bold text-yellow-600 mb-4">
              {startCount && <CountUp end={100} duration={2} separator="," />}+
            </h3>
            <p className="text-lg text-gray-600">Partner With Companies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedNumbers;
