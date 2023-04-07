import React from "react";
import AOS from "aos";
import { useEffect } from "react";
import "./DeveloperIntro.scss";

const DeveloperIntro = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="dev-intro-wrapper">
      <p
        className="dev-intro-title"
        data-aos="fade-up"
        data-aos-duration="100"
        data-aos-delay="400"
      >
        DEVELOPER
      </p>
      <h3
        className="dev-intro-head"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        Hello! I'am having specialization in both FRONTEND and BACKEND
        development , and also aced in managing databases.
      </h3>
      <h5
        className="dev-intro-desc"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="600"
      >
        Am i having masters on "Typescript", "React.JS", "Next.JS" in Frontend,
        "NodeJS", "Express.JS" in Backend, "MongoDB", "MySQL", "MariaDB",
        "PostgresQL", "GraphQL" in Databases. 
        { " As a Developer , i ❤ to work Backend more than Frontend."}
      </h5>
    </div>
  );
};

export default DeveloperIntro;
