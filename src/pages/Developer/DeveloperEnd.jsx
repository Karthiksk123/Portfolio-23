import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import "./DeveloperEnd.scss";

const DeveloperEnd = () => {
  const naviagate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="developer-lower-section">
      <div className="dev-container-aboutme">
        <h1 className="dev-about-text" data-aos="fade-up">
          Wanna Xplore my Projects ?
        </h1>
        <div className="dev-btn-container">
          <div
            className="btn btn-border-4"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="300"
            onClick={() => naviagate("/projects")}
          >
            Projects
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperEnd;
