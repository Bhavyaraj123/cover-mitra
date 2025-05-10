import React, { useEffect } from 'react'
import Marquee from 'react-fast-marquee'
import AOS from 'aos'
import 'aos/dist/aos.css'

import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.jpeg'
import axis from '../../assets/axis.png'
import icic from '../../assets/icic.png'
import hdfc from '../../assets/hdfc.png'
import iffco from '../../assets/iffco.png'
import chola from '../../assets/chola.png'
import aditya from '../../assets/aditya.png'

const MarqueePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="py-10 md:py-20 px-5 md:px-20 overflow-x-hidden">
      <h2
        data-aos="fade-up"
        className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-2"
      >
        Our Trusted Partners
      </h2>

      <p
        data-aos="fade-up"
        data-aos-delay="200"
        className="md:text-xl text-lg font-semibold text-center text-gray-500 mt-2 mb-10"
      >
        We are proud to announce our partnership with India's Leading insurance companies.
      </p>

      <div className="w-full overflow-x-hidden">
        <Marquee speed={100} gradient={false} className="w-full">
          {[img1, img2, axis, icic, hdfc, iffco, chola, aditya].map((img, index) => (
            <div
              key={index}
              className="mx-4 flex items-center justify-center min-w-[120px] bg-gray-100 p-3 border border-blue-200 rounded-xl shadow-sm hover:shadow-md transition duration-300"
            >
              <img
                src={img}
                alt={`Partner ${index + 1}`}
                className="h-14 w-32 object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default MarqueePage
