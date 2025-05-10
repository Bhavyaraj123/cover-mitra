import React, { useEffect, useRef, useState } from "react";
import LoanData from "../../../assets/data/LoanData";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../utils/config";
import useFetch from "../../../hooks/UseFetch";

const Loan = () => {
  const scrollContainerRef = useRef(null); // Ref to access the scroll container
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active dot
  const { data, loader, error } = useFetch(
    `${BASE_URL}/api/v1/finance/getalloan`
  );
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    window.scrollTo(0, 0);

    // Function to scroll the container horizontally
    const autoScroll = () => {
      if (scrollContainer) {
        // Scroll by 250px to the right
        scrollContainer.scrollBy({
          left: 250,
          behavior: "smooth", // Smooth scrolling
        });

        // Update the active index for the dots
        setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
      }
    };

    const intervalId = setInterval(autoScroll, 3000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [data]);

  // Function to handle dot click
  const handleDotClick = (index) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: 250 * index, // Scroll to the respective index position
        behavior: "smooth",
      });
      setActiveIndex(index); // Set the active dot
    }
  };

  if (loader) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="md:px-20 py-10">
      <h2 className="text-4xl md:text-5xl font-bold text-orange-700 mb-4 tracking-tight">
        Our Loan Services
      </h2>

      {/* Horizontal scroll container */}
      <div
        ref={scrollContainerRef}
        className="flex space-x-4 overflow-x-auto px-3 scrollbar-hide mb-10"
      >
        {data.map((item, index) => {
          const imageUrl = `${BASE_URL}/uploads/${item.image}`; // ✅ FIXED
          console.log("Image URL:", imageUrl); // 👈 Add this line
          return (
            <div
              className="min-w-[250px] bg-white shadow-md rounded-lg p-4 flex-shrink-0"
              key={index}
            >
              <Link to={`/loanDetails/${item._id}`}>
                <img
                  src={imageUrl}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-md mb-3"
                  loading="lazy"
                />
                <h2 className="text-lg font-semibold mb-1">{item.name}</h2>
                <p className="text-sm text-gray-600">{item.description}</p>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-3 w-3 rounded-full bg-gray-600 ${
              activeIndex === index ? "bg-red-500" : "bg-opacity-50"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Loan;
