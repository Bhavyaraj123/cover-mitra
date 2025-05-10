import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20" id="why-choose-us">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Reason 1 */}
          <div className="p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Expert Team</h3>
            <p className="text-lg text-gray-600">
              Our team consists of highly skilled professionals with years of experience in the industry.
            </p>
          </div>

          {/* Reason 2 */}
          <div className="p-6 bg-green-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Customer-Centric Approach</h3>
            <p className="text-lg text-gray-600">
              We always put the needs of our customers first, ensuring satisfaction with every project.
            </p>
          </div>

          {/* Reason 3 */}
          <div className="p-6 bg-yellow-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-4">Innovative Solutions</h3>
            <p className="text-lg text-gray-600">
              We offer cutting-edge solutions that help businesses stay ahead in a competitive market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
