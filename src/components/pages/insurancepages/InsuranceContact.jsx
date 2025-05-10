import { useState } from 'react';
import React from 'react'
import ModalForm from '../../Modal/ModalForm';
const InsuranceContact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
            const openModal = () => setIsModalOpen(true);
            const closeModal = () => setIsModalOpen(false);
  return (
    <div><section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
        <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">Life’s unpredictable — your insurance shouldn’t be. Go with coverage you can actually trust.</h1>
        <button onClick={openModal} class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">Button</button>
      </div>
      <ModalForm isOpen={isModalOpen} onRequestClose={closeModal}  lastField={{ label: "Type of Policy", name: "policy", type: "text" }}/>

    </div>
  </section></div>
  )
}

export default InsuranceContact