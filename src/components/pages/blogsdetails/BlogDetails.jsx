import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BASE_URL } from '../../utils/config.js';
import useFetch from '../../../hooks/UseFetch.js';

const BlogDetails = () => {
  const { id } = useParams();

  const { data, loader, error } = useFetch(
    `${BASE_URL}/api/v1/blogs/getoneblog/${id}`
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loader) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10">Error: {error}</p>;
  if (!data) return <p className="text-center py-10">Blog not found!</p>;

  return (
    <div className="max-w-4xl mx-auto px-5 md:px-20 mt-10 py-16">
      <Link to="/blog" className="mt-10 inline-block text-orange-600 hover:underline mb-10">
        ← Back to Blogs
      </Link>

      <img
        src={`${BASE_URL}/uploads/blog/${data.image}`}
        alt={data.title}
        className="rounded-2xl w-full h-72 object-cover mb-8"
        loading="lazy"
      />
      <span className="text-orange-500 text-sm font-medium uppercase">{data.tag}</span>
      <h1 className="text-4xl font-bold text-gray-800 my-4">{data.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        {data.date} | By {data.author} | {data.readTime}
      </p>
      <p className="text-gray-700 leading-7 whitespace-pre-line">{data.content}</p>
    </div>
  );
};

export default BlogDetails;
