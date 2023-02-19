import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import ProjectHero from "./ProjectHero";
import AOS from "aos";
import "./Projects.scss";
import { motion } from "framer-motion";
import ProjectIntro from "./ProjectIntro";

const Projects = () => {
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
      className="project-page-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="pr-inner-wrap">
        <ProjectHero />
        <div className="pr-lowersection">
          <ProjectIntro />
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
