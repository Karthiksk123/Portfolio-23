import React, { useEffect, useState } from "react";
import "./AboutEdu.scss";
import constants from "../../constants/constants.json";
import AOS from "aos";

const AboutEdu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="edu-section">
      <div className="edu-heading">
        <h1
          className="edu-head"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          EDUCATION
        </h1>
        <div className="edu-wrapper">
          <div
            className="edu-left-wrap"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            {constants.Educations.map((edu, index) => (
              <div
                onClick={() => setCurrentIndex(index)}
                className={index === currentIndex ? "tab active" : "tab"}
              >
                {edu.Studies}
              </div>
            ))}
          </div>
          <div
            className="edu-right-wrap"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <h1>{constants.Educations[currentIndex].title}</h1>
            <h3>{constants.Educations[currentIndex].at}</h3>
            <p className="edu-r-duration">
              {constants.Educations[currentIndex].duration}
            </p>
            <div className="edu-r-details">
              {constants.Educations[currentIndex].desc.map((point) => (
                <p className="edu-r-point">
                  <li>{point}</li>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEdu;
