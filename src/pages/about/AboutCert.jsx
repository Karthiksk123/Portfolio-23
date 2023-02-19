import React, { useEffect } from "react";
import "./AboutCert.scss";
import { Certifications } from "../../constants/constants";
import AOS from "aos";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const AboutCert = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="cert-section">
      <div className="cert-heading">
        <h1
          className="cert-head"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          CERTIFICATIONS I DONE
        </h1>
        <div className="cert-wrapper">
          {Certifications.map((cert, index) =>
            index % 2 === 0 ? (
              <div
                className="cert_inner_wrap"
                data-aos="fade-down-left"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <div
                  className="cert_right"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  <a href={cert.link} target="_blank">
                    <img src={cert.Img} className="cert-img" alt="cert-img" />
                  </a>
                </div>
                <div className="cert_left">
                  <div className="cert_right_mb">
                    <a href={cert.link} target="_blank">
                      <img
                        src={cert.Img}
                        className="cert-img_mb"
                        alt="cert-img"
                      />
                    </a>
                  </div>
                  <div className="cert-content">
                    <h1 className="cert-title"> {cert.title}</h1>
                    <p className="cert-duration">Duration - {cert.Duration}</p>
                    <div className="cert-skill-wrapper">
                      <h1 className="cert-skill-title">Insights : </h1>
                      {cert.Skills.map((skills) => (
                        <div className="cert-skill-inner">
                          <PlayArrowIcon />
                          <p>{skills}</p>
                        </div>
                      ))}
                    </div>
                    <div className="cert-icon">
                      <a href={cert.link} target="_blank">
                        <OpenInNewIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="cert_inner_wrap"
                data-aos="fade-down-right"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <div className="cert_left">
                  <div className="cert_right_mb">
                    <a href={cert.link} target="_blank">
                      <img
                        src={cert.Img}
                        className="cert-img_mb"
                        alt="cert-img"
                      />
                    </a>
                  </div>
                  <div className="cert-content">
                    <h1 className="cert-title"> {cert.title}</h1>
                    <p className="cert-duration">Duration - {cert.Duration}</p>
                    <div className="cert-skill-wrapper">
                      <h1 className="cert-skill-title">Insights : </h1>
                      {cert.Skills.map((skills) => (
                        <div className="cert-skill-inner">
                          <PlayArrowIcon />
                          <p>{skills}</p>
                        </div>
                      ))}
                    </div>
                    <div className="cert-icon">
                      <a href={cert.link} target="_blank">
                        <OpenInNewIcon />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="cert_right">
                  <a href={cert.link} target="_blank">
                    <img src={cert.Img} className="cert-img" alt="cert-img" />
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutCert;
