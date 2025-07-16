import React from "react";
import { FaEnvelope, FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const AboutMe = () => {
  return (
    <>
      <section id="about" className="bg-[#222831] w-full p-20">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-white mb-10 text-center">
            About Me
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 mb-6">
            <div className="">
              <img
                src="/images/webp/about me image.webp"
                alt="This is my picture"
                className="size-[30rem] w-auto h-fit rounded-xl"
              />
            </div>
            <div className="py-14">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#E6521F] to-[#EA2F14] bg-clip-text text-transparent mb-6">
                Crafting exceptional websites
              </h3>
              <p className="text-white text-justify mb-4">
                Hi! I'm Landon, a beginner frontend developer currently learning
                HTML, CSS, and JavaScript. I recently started diving into
                frameworks like Tailwind CSS and React, and I'm excited about
                building clean, responsive websites.
              </p>
              <p className="text-white text-justify mb-4">
                I'm focusing on improving my skills through hands-on projects,
                and I'm always open to learning from the community. I enjoy
                turning designs into functional code and am currently exploring
                the best practices of UI/UX.
              </p>
              <p className="text-white text-justify mb-4">
                If you're also learning frontend or have any tips/resources, I’d
                love to connect!
              </p>
              <p className="text-white text-justify mb-10">
                When I'm not coding, you'll find me playing, watching tips about
                coding, or exercising.
              </p>
              <div className="flex flex-row space-x-6 justify-items-center items-center">
                <a className="bg-gradient-to-r from-[#E6521F] to-[#EA2F14] text-white px-3 py-3 rounded-full shadow-lg font-medium text-2xl hover:text-3xl transition-all ease-in-out">
                    <FaGithub />
                </a>
                <a className="bg-gradient-to-r from-[#E6521F] to-[#EA2F14] text-white px-3 py-3 rounded-full shadow-lg font-medium text-2xl hover:text-3xl transition-all ease-in-out">
                    <FaFacebookF />
                </a>
                <a className="bg-gradient-to-r from-[#E6521F] to-[#EA2F14] text-white px-3 py-3 rounded-full shadow-lg font-medium text-2xl hover:text-3xl transition-all ease-in-out">
                    <FaEnvelope />
                </a>
                <a className="bg-gradient-to-r from-[#E6521F] to-[#EA2F14] text-white px-3 py-3 rounded-full shadow-lg font-medium text-2xl hover:text-3xl transition-all ease-in-out">
                    <FaInstagram />
                </a>
                <a className="bg-gradient-to-r from-[#E6521F] to-[#EA2F14] text-white px-3 py-3 rounded-full shadow-lg font-medium text-2xl hover:text-3xl transition-all ease-in-out">
                    <FaTwitter/>
                </a>
              </div>
            </div>
          </div>
          <div className="pictures grid grid-cols-1 md:grid-flow-row">
            <div className="w-fit h-fit bg-white ">
                <img className="size-20" src="/images/webp/coding.webp" alt="This is a coding picture" />
            </div>
          </div>

          
        </div>
      </section>
    </>
  );
};

export default AboutMe;
