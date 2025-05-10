import {React,useState} from 'react';
import steps from '../../assets/steps.png';
import bg from '../../assets/bgsteps.jpg';
import ModalForm from '../Modal/ModalForm';




const Step_policy = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  return (
    <div
      className='bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h2
        className='text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-2 mt-5 capitalize'
        data-aos="fade-down"
      >
        Steps to Get Insurance from US
      </h2>

      <section className="text-gray-800 body-font md:px-20 px-5 py-24 bg-opacity-90">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">

          {/* Steps Section */}
          <div className="lg:w-2/5 w-full" data-aos="fade-right">
            {[
              {
                title: 'STEP 1',
                desc: 'Research and Choose the Right Plan'
              },
              {
                title: 'STEP 2',
                desc: 'Fill out the application form online or visit the office.'
              },
              {
                title: 'STEP 3',
                desc: 'Submit required documents such as ID proof, address, and more.'
              },
              {
                title: 'STEP 4',
                desc: 'Undergo Verification'
              },
              {
                title: 'FINISH',
                desc: 'Pay the premium and receive your policy document digitally or by post.'
              },
            ].map((step, index) => (
              <div
                className="flex relative pb-12"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                {index < 4 && (
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-300 pointer-events-none" />
                  </div>
                )}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 inline-flex items-center justify-center text-white z-10">
                  <span className="font-bold">{index + 1}</span>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-semibold text-base mb-1">{step.title}</h2>
                  <p className="text-md text-gray-700 font-semibold">{step.desc}</p>
                </div>
              </div>
            ))}

<button onClick={openModal}
 className='btn border-2 border-[#8F87F1] px-6 py-3 bg-[#8F87F1] text-white font-semibold rounded-sm shadow-md hover:bg-white hover:text-[#8F87F1] hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out'>
  Get Insurance
</button>
<ModalForm isOpen={isModalOpen} onRequestClose={closeModal}  lastField={{ label: "Type of Policy", name: "policy", type: "text" }}/>
          </div>

          {/* Image Section */}
          <div className="lg:w-3/5 w-full" data-aos="zoom-in-left">
            <img
              className="w-full rounded-xl md:shadow-none shadow-lg object-cover"
              src={steps}
              alt="Insurance Steps"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Step_policy;
