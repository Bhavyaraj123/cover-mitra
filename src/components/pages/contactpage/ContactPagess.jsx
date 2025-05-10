import React, { useState, useRef ,useEffect} from "react";
import { SendHorizonal } from "lucide-react";
import bg from "../../../assets/bg-imahe.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const ContactPagess = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Send to your backend API
    try {
      const res = await fetch(`http://localhost:4000/api/v1/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("API Error");

      // 2. Send via EmailJS
      await emailjs.sendForm(
        "service_5qqamsq", // your EmailJS service ID
        "template_dwfv4bb", // your new template ID
        formRef.current,
        "GmFO25r1aqqRVN5cf" // your EmailJS public key
      );

      toast.success("Your information has been sent! Our team will reach out soon");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to send your message. Please try again!");
    }
  };
  useEffect(() => {
   window.scroll(0,0)
  }, )
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-purple-100 to-white py-16 px-5 md:px-20 mt-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-xl border border-purple-200">
        <h2 className="text-4xl font-extrabold text-purple-700 mb-10 text-center tracking-wide">
          Contact Us
        </h2>

        <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xl font-semibold text-gray-800 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-5 py-3 text-[1rem] font-medium text-gray-900 bg-purple-50 border border-purple-300 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
              required
            />
          </div>

          <div>
            <label className="block text-xl font-semibold text-gray-800 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-3 text-[1rem] font-medium text-gray-900 bg-purple-50 border border-purple-300 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
              required
            />
          </div>

          <div>
            <label className="block text-xl font-semibold text-gray-800 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-5 py-3 text-[1rem] font-medium text-gray-900 bg-purple-50 border border-purple-300 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
              required
            />
          </div>

          <div>
            <label className="block text-xl font-semibold text-gray-800 mb-2">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Type your message here..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-5 py-3 text-[1rem] font-medium text-gray-900 bg-purple-50 border border-purple-300 rounded-lg resize-none shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-purple-700 text-white px-6 py-3 rounded-full text-xl font-bold hover:bg-purple-800 transition-all duration-300 group"
            >
              Send Message
              <SendHorizonal className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </form>
      </div>

      <ToastContainer position="top-center" />
    </div>
  );
};

export default ContactPagess;
