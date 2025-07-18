import React from "react";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <>
      {/*  Header */}
      <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
        <div className="container max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <BiArrowToRight className="text-[#000000] text-2xl mr-2" />
            <span className="text-xl font-bold bg-gradient-to-r from-[#E6521F] to-[#EA2F14] bg-clip-text text-transparent">
              Landon Lorica
            </span>
            <BiArrowToLeft className="text-[#000000] text-2xl ml-2" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="font-medium text-gray-700 hover:bg-gradient-to-r from-[#E6521F] to-[#EA2F14] hover:bg-clip-text hover:text-transparent hover:border-b-2 hover: border-[#FB9E3A] transition duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="font-medium text-gray-700 hover:bg-gradient-to-r from-[#E6521F] to-[#EA2F14] hover:bg-clip-text hover:text-transparent hover:border-b-2 hover: border-[#FB9E3A] transition duration-300"
            >
              About Me
            </a>
            <a
              href="#skills"
              className="font-medium text-gray-700 hover:bg-gradient-to-r from-[#E6521F] to-[#EA2F14] hover:bg-clip-text hover:text-transparent hover:border-b-2 hover: border-[#FB9E3A] transition duration-300"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="font-medium text-gray-700 hover:bg-gradient-to-r from-[#E6521F] to-[#EA2F14] hover:bg-clip-text hover:text-transparent hover:border-b-2 hover: border-[#FB9E3A] transition duration-300"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="font-medium text-gray-700 hover:bg-gradient-to-r from-[#E6521F] to-[#EA2F14] hover:bg-clip-text hover:text-transparent hover:border-b-2 hover: border-[#FB9E3A] transition duration-300"
            >
              Contact
            </a>
          </div>

          {/* Mobile Burger Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          
        </div>
      </nav>

      {/* Full-height Mobile Menu */}
      <div
        className={`
                   md:hidden fixed inset-0 z-40 bg-white transition-all duration-300 ease-in-out
                   ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}
                   pt-20
                 `}
      >
        <div className="container mx-auto px-6 py-8 flex flex-col gap-6 justify-items-center items-center text-xl">
          <a
            href="#home"
            className="font-medium text-gray-700 hover:bg-gradient-to-r from-[#E6521F] to-[#EA2F14] hover:bg-clip-text hover:text-transparent hover:border-b-2 hover: border-[#FB9E3A] transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="font-medium text-gray-700 hover:bg-gradient-to-r from-[#E6521F] to-[#EA2F14] hover:bg-clip-text hover:text-transparent hover:border-b-2 hover: border-[#FB9E3A] transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            About Me
          </a>
          <a
            href="#skills"
            className="font-medium text-gray-700 hover:bg-gradient-to-r from-[#E6521F] to-[#EA2F14] hover:bg-clip-text hover:text-transparent hover:border-b-2 hover: border-[#FB9E3A] transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#experience"
            className="font-medium text-gray-700 hover:bg-gradient-to-r from-[#E6521F] to-[#EA2F14] hover:bg-clip-text hover:text-transparent hover:border-b-2 hover: border-[#FB9E3A] transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Experience
          </a>
          <a
            href="#contact"
            className="font-medium text-gray-700 hover:bg-gradient-to-r from-[#E6521F] to-[#EA2F14] hover:bg-clip-text hover:text-transparent hover:border-b-2 hover: border-[#FB9E3A] transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>


    </>
  );
};

export default Header;
