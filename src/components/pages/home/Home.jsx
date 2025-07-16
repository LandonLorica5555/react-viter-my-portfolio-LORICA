import React from "react";
import Header from "../../partials/Header";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Banner from "./banner/Banner";
import Skills from "./skills/Skills";
import AboutMe from "./about me/AboutMe";

const Home = () => {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <Banner />
        <AboutMe />
        <Skills />
      </div>
    </>
  );
};

export default Home;
