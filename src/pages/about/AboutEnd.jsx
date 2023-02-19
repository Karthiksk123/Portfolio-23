import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import "./AboutEnd.scss";

const AboutEnd = () => {
  const naviagate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="abt-lower-section">
      <div className="abt-container-aboutme">
        <h1 className="abt-about-text" data-aos="fade-up">
          Wanna Xplore Me as a Developer ?
        </h1>
        <div className="abt-btn-container">
          <div
            className="btn btn-border-4"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="300"
            onClick={() => naviagate("/developer")}
          >
            As a Developer
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEnd;
