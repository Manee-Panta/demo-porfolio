import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaBehance,
  FaDribbble,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="flex items-center justify-between py-4 px-8 bg-gradient-to-b from-yellow-50 to-white border-t border-gray-200">
      {/* Social Media Icons */}
      <div className="flex space-x-4">
        <a
          href="#"
          aria-label="Facebook"
          className="text-gray-600 hover:text-black"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className="text-gray-600 hover:text-black"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className="text-gray-600 hover:text-black"
        >
          <FaTwitter size={20} />
        </a>
        <a
          href="#"
          aria-label="LinkedIn"
          className="text-gray-600 hover:text-black"
        >
          <FaLinkedinIn size={20} />
        </a>
        <a
          href="#"
          aria-label="Behance"
          className="text-gray-600 hover:text-black"
        >
          <FaBehance size={20} />
        </a>
        <a
          href="#"
          aria-label="Dribbble"
          className="text-gray-600 hover:text-black"
        >
          <FaDribbble size={20} />
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8 text-gray-600">
        <a href="#" className="hover:text-pink-500 font-semibold">
          Home
        </a>
        <a href="#" className="hover:text-black">
          About
        </a>
        <a href="#" className="hover:text-black">
          Works
        </a>
        <a href="#" className="hover:text-black">
          Services
        </a>
        <a href="#" className="hover:text-black">
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;
