import React, { useEffect } from "react";
import "./HomeIntro.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const HomeIntro = () => {
  const naviagate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="intro-wrapper">
      <p
        className="intro-title"
        data-aos="fade-up"
        data-aos-duration="100"
        data-aos-delay="400"
      >
        INTRO
      </p>
      <h3
        className="intro-head"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        Hi there! I am Karthik. A Full Stack Developer having specialization in
        Web Development
      </h3>
      <h5
        className="intro-desc"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="600"
      >
        I mainly use Figma to design UI/UX. And then MERN Stack to convert it to
        a real Web App. I also rely on other helper libraries in order to create
        a better User Experience.
      </h5>
      <div className="lower-section">
        <div className="container-aboutme">
          <h1 className="about-text" data-aos="fade-up">
            Wanna Xplore More About Me?
          </h1>
          <div className="btn-container">
            <div
              className="btn btn-border-4"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="500"
              onClick={() => naviagate('/about')}
            >
              ABOUT ME
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
