import React from "react";

const Skills = () => {
  return (
    <>
      <section id="skills" className="bg-[#393E46] w-full p-20">
        <div className="container">
          <h1 className="text-white text-4xl font-bold text-center mb-10">
            My <span className="text-4xl font-bold bg-gradient-to-r from-[#E6521F] to-[#EA2F14] bg-clip-text text-transparent">Skills</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            <div className="bg-white size-80 shadow-xl p-6 rounded-xl">
              <div className="items-center justify-items-center mb-6">
                <img src="/images/webp/HTML5_logo_and_wordmark.webp" alt="This is the logo of HTML5" 
                className="size-40"/>
              </div>
              <div className="">
                <h4 className="text-lg text-gray-700 font-bold">HTML5</h4>
                <p className="text-gray-700">Made projects using HTML5 structures and syntax.</p>
              </div>
            </div>
            <div className="bg-white size-80 shadow-xl p-6 rounded-xl">
              <div className="items-center justify-items-center mb-6">
                <img src="/images/webp/CSS3_logo_and_wordmark.webp" alt="This is the logo of CSS3" 
                className="h-40"/>
              </div>
              <div className="">
                <h4 className="text-lg text-gray-700 font-bold">CSS3</h4>
                <p className="text-gray-700">Made projects using CSS3 with basic styling.</p>
              </div>
            </div>
            <div className="bg-white size-80 shadow-xl p-6 rounded-xl">
              <div className="items-center justify-items-center mb-6">
                <img src="/images/webp/tailwind logo.webp" alt="This is the logo of TailwindCSS" 
                className="size-36"/>
              </div>
              <div className="">
                <h4 className="text-lg text-gray-700 font-bold">TailwindCSS</h4>
                <p className="text-gray-700">Made healthcare, portfolios, books' website, etc. using TailwindCSS.</p>
              </div>
            </div>
            <div className="bg-white size-80 shadow-xl p-6 rounded-xl">
              <div className="items-center justify-items-center mb-6">
                <img src="/images/webp/ReactJs logo.webp" alt="This is the logo of ReactJs" 
                className="size-40"/>
              </div>
              <div className="">
                <h4 className="text-lg text-gray-700 font-bold">ReactJs</h4>
                <p className="text-gray-700">Using a library like ReactJs, website making is more efficient.</p>
              </div>
            </div>
            <div className="bg-white size-80 shadow-xl p-6 rounded-xl">
              <div className="items-center justify-items-center mb-6">
                <img src="/images/webp/arduino logo.webp" alt="This is the logo of Arduino" 
                className="h-40 w-56"/>
              </div>
              <div className="">
                <h4 className="text-lg text-gray-700 font-bold">Arduino</h4>
                <p className="text-gray-700">Made hardware projects using Arduino microcontrollers.</p>
              </div>
            </div>
            <div className="bg-white size-80 shadow-xl p-6 rounded-xl">
              <div className="items-center justify-items-center mb-6">
                <img src="/images/webp/cisco networking.webp" alt="This is the logo of Cisco" 
                className="size-36"/>
              </div>
              <div className="">
                <h4 className="text-lg text-gray-700 font-bold">Cisco Networking</h4>
                <p className="text-gray-700">Experienced setting up prototypes of networks to ensure its efficiency.</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
