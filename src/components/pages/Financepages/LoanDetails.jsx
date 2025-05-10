import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ModalForm from '../../Modal/ModalForm'
import useFetch from '../../../hooks/UseFetch'
import { BASE_URL } from '../../utils/config'

const LoanDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const { id } = useParams()
  const { data, error, loader } = useFetch(`${BASE_URL}/api/v1/finance/getoneloan/${id}`)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (loader) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  // If data is not ready or empty
  if (!data || typeof data !== 'object') return <p>No loan data found.</p>

  return (
    <div className="mt-20 md:px-20 py-10 px-5 flex flex-col gap-8 bg-gradient-to-r from-white via-gray-100 to-white">
      <Link to="/financePage">
        <button className="group flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full font-medium hover:from-orange-600 hover:to-orange-700 shadow-md hover:shadow-xl transition duration-300 mb-8">
          <svg
            className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7 7-7m-7 7h18"
            />
          </svg>
          Back
        </button>
      </Link>

      <div className="max-w-screen-lg mx-auto bg-white shadow-xl rounded-lg p-8 mb-12">
        {/* Loan Image */}
        <img
          src={`${BASE_URL}/uploads/${data.image}`}
          alt={data.name}
          className="w-full h-80 object-cover rounded-xl shadow-md mb-8"
          loading="lazy"
        />

        {/* Loan Title */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">{data.name}</h2>
        <p className="text-lg text-gray-600 mb-8">{data.description}</p>

        {/* Benefits Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Benefits</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            {data.benefits?.map((benefit, index) => (
              <li key={index} className="text-lg">{benefit}</li>
            ))}
          </ul>
        </div>

        {/* Loan Process Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Loan Process</h3>
          <ul className="list-decimal pl-6 space-y-2 text-gray-600">
            {data.loanProcess?.map((step, index) => (
              <li key={index} className="text-lg">{step}</li>
            ))}
          </ul>
        </div>

        {/* Eligibility Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Eligibility</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            {data.eligibility?.map((item, index) => (
              <li key={index} className="text-lg">{item}</li>
            ))}
          </ul>
        </div>

        {/* Ideal For Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ideal For</h3>
          <p className="text-lg text-gray-600">{data.idealFor}</p>
        </div>

        {/* Apply Now Button */}
        <div className='flex justify-center'>
          <button onClick={openModal} className='px-3 py-3 bg-orange-500 hover:bg-orange-600 text-white text-lg'>
            Apply Now
          </button>
          <ModalForm
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            lastField={{ label: "Type of Loan", name: "loan", type: "text" }}
          />
        </div>
      </div>
    </div>
  )
}

export default LoanDetails
