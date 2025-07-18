import React from "react";
import Header from "../../partials/Header";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Banner from "./banner/Banner";
import Skills from "./skills/Skills";
import AboutMe from "./about me/AboutMe";
import Experience from "./experience/Experience";
import Footer from "../../partials/Footer";

const Home = () => {
  return (
    <>
      <div className="page-container">
        <div className="content-wrap">
          <Header />
          <Banner />
          <AboutMe />
          <Skills />
          <Experience />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
