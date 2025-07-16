import React from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaLongArrowAltRight } from "react-icons/fa";

const Banner = () => {
  return (
    <>
        {/* Hero Section */}
      <section id="home" className="bg-[#393E46] w-full p-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center">
            <div className="">
              <h1 className="text-5xl font-bold text-white mb-4">
                Hi! I am <br /> Landon Lorica <br />{" "}
                <span className="text-5xl font-bold bg-gradient-to-r from-[#E6521F] to-[#EA2F14] bg-clip-text text-transparent">
                  Front-end Developer
                </span>
                <div className="mt-4 w-14 h-1.5 bg-gradient-to-r from-[#E6521F] to-[#EA2F14]"></div>
              </h1>
              <p className="text-white mt-6 mb-6">
                A computer engineering student passionate about creating elegant
                websites. I specialize in Tailwind and JavaScript ecosystems.
              </p>
              <div className="flex flex-row gap-6">
                <button className="bg-gradient-to-r from-[#E6521F] to-[#EA2F14] text-white font-medium px-8 py-3 rounded-full shadow-lg">
                  View My Work  →
                </button>
                <button className="bg-transparent border border-[#EA2F14] text-white font-medium px-6 py-3 rounded-full shadow-lg">
                  Contact Me
                </button>
              </div>
            </div>
            <div className="relative inline-block">
              <img
                src="/images/webp/portfolio-formal.webp"
                alt="This is a formal picture of me"
                className="size-72 rounded-full shadow-2xl shadow-[#E6521F] mb-10 hover:size-80 transition-all ease-in-out"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
