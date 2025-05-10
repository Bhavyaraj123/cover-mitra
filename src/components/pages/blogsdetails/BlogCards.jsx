import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/UseFetch";
import { BASE_URL } from "../../utils/config";
const BlogCards = () => {
  const { data, loader, error } = useFetch(
    `${BASE_URL}/api/v1/blogs/getallblogs`
  );
  useEffect(() => {
    window.scroll(0, 0);
  });

  if (loader) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="bg-gray-50 py-16 px-5 md:px-20 mt-20" id="blog">
      <h2 className="text-4xl font-bold text-center text-orange-600 mb-6">
        Latest Insights
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Stay informed with our expert-written blogs covering SIPs, loans, and
        insurance strategies designed to empower your financial journey.
      </p>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {data.map((item,index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
        
          >
            <img
              src={`${BASE_URL}/uploads/blog/${item.image}`}
              alt={item.title}
              className="w-full h-52 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <span className="text-sm text-orange-500 font-medium uppercase">
                {item.tag}
              </span>
              <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <p className="text-xs text-gray-400 mb-4">{item.date}</p>
              <Link
                to={`/blogDetails/${item._id}`}
                className="text-orange-600 hover:text-orange-800 font-medium text-sm"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
