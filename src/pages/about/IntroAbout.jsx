import AOS from "aos";
import React, { useEffect } from "react";
import "./IntroAbout.scss";

const IntroAbout = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="about-intro-wrapper">
      <p
        className="about-intro-title"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        ABOUT ME
      </p>
      <h3
        className="about-intro-head"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        Hey! I am currently pursuing B.E Computer Science and Engineering (Final
        Year). I have a Project based skills in Full-Stack App Development.
      </h3>
      <h5
        className="about-intro-desc"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="600"
      >
        My Primary goal is to complete a complex projects within the minimum
        time with a greater user experience.
      </h5>
    </div>
  );
};

export default IntroAbout;
