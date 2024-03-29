import AOS from "aos";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import "./About.scss";
import AboutPageHero from "./AboutPageHero";
import { motion } from "framer-motion";
import IntroAbout from "./IntroAbout";
import AboutEdu from "./AboutEdu";
import AboutCert from "./AboutCert";
import AboutEnd from "./AboutEnd";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflowY = "scroll";
    AOS.init();
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);

  return (
    <motion.div
      className="aboutpage-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Header />
      <div className="aboutpage-inner-wrapper">
        <AboutPageHero />
        <div className="lowersection-about">
          <IntroAbout />
          <AboutEdu />
          <AboutCert />
          <AboutEnd />
          <Footer/>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
