import React from 'react';

const ContactInfo = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-20">
        <h2 className='mb-3 text-4xl text-center font-semibold leading-tight tracking-normal '>Contact Us</h2>
      <div className="max-w-7xl mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Visit Us */}
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <span className="material-icons text-orange-500 text-4xl mb-4">location_on</span>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">VISIT US</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur elit.</p>
            <p className="text-gray-600 mt-2">2 Elizabeth, London, UK</p>
          </div>

          {/* Call Us */}
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <span className="material-icons text-orange-500 text-4xl mb-4">phone</span>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">CALL US</h3>
            <p className="text-gray-600">Blibendum blibendum quis sit amet consectetur.</p>
            <p className="text-gray-600 mt-2">+44 (0) 203 116 7711</p>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <span className="material-icons text-orange-500 text-4xl mb-4">email</span>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">CONTACT US</h3>
            <p className="text-gray-600">Donec leo nunc, tincidunt sed consectetur vel.</p>
            <p className="text-gray-600 mt-2">noreply@noland.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
