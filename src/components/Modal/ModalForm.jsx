import React, { useRef,useEffect } from "react";
import Modal from "react-modal";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import modalImage from "../../assets/bg-imahe.jpg";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "30px",
    maxWidth: "600px",
    width: "90%",
    borderRadius: "16px",
    backgroundImage: `url(${modalImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
    zIndex: 1100,
    color: "#fff",
  },
};

const ModalForm = ({
  isOpen,
  onRequestClose,
  lastField = { label: "Amount To Invest", name: "sip", type: "number" },
}) => {
  const form = useRef();
  const navigate = useNavigate();

  const SubmitModal = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5qqamsq", "template_2tw6byh", form.current, {
        publicKey: "GmFO25r1aqqRVN5cf",
      })
      .then(() => {
        alert("Thanks for your response. Our team will reach out shortly.");
        navigate("/");
      })
      .catch((error) => {
        console.error("FAILED...", error.text);
      });
  };

  const defaultFields = [
    { label: "Name", name: "name", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Mobile Number", name: "number", type: "tel" },
    lastField,
  ];
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles} contentLabel="User Form Modal">
      <div className="flex justify-end">
        <button onClick={onRequestClose} className="text-4xl text-black font-bold hover:scale-110 transition">
          &times;
        </button>
      </div>
      <form ref={form} onSubmit={SubmitModal} className="backdrop-blur-md rounded-xl p-4">
        <div className="flex flex-col gap-4">
          {defaultFields.map(({ label, name, type }, i) => (
            <div key={i} className="flex flex-col">
              <label htmlFor={name} className="text-lg text-black font-medium">{label}:</label>
              <input
                id={name}
                name={name}
                type={type}
                placeholder={`Enter your ${label}`}
                className="bg-gray-300 rounded-lg text-gray-700 font-semibold px-3 py-2"
                required
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-5 py-2 text-white w-32 rounded font-semibold text-lg bg-blue-600 hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalForm;
