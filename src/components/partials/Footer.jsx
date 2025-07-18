import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#222831] w-full p-20">
        <div className="container">
          <div className="flex flex-row gap-6 justify-center mb-4">
            <a
              href="#"
              className="bg-gradient-to-r from-[#E6521F] to-[#EA2F14] text-white px-3 py-3 rounded-full shadow-lg font-medium text-2xl hover:text-3xl transition-all ease-in-out"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-[#E6521F] to-[#EA2F14] text-white px-3 py-3 rounded-full shadow-lg font-medium text-2xl hover:text-3xl transition-all ease-in-out"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-[#E6521F] to-[#EA2F14] text-white px-3 py-3 rounded-full shadow-lg font-medium text-2xl hover:text-3xl transition-all ease-in-out"
            >
              <FaEnvelope />
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-[#E6521F] to-[#EA2F14] text-white px-3 py-3 rounded-full shadow-lg font-medium text-2xl hover:text-3xl transition-all ease-in-out"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-[#E6521F] to-[#EA2F14] text-white px-3 py-3 rounded-full shadow-lg font-medium text-2xl hover:text-3xl transition-all ease-in-out"
            >
              <FaTwitter />
            </a>
          </div>
          <div className="justify-items-center items-center">
            <p className="text-white">
              {" "}
              &copy; 2025 Landon S. Lorica. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
