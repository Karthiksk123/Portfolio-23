import React from "react";
import AOS from "aos";
import { useEffect } from "react";
import './DeveloperIntro.scss'


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
        Hey! I am a Full Stack (MERN) Developer. I have 1+ years of experience
        in Web App Development.
      </h3>
      <h5
        className="dev-intro-desc"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="600"
      >
        The main area of my expertise is Web Development. I can design and
        develop slick, Interactive, Responsive and Performance Efficient Web &
        Mobile Applications. I also have some experience of creating websites on
        CMS like Wordpress.
      </h5>
    </div>
  );
};

export default DeveloperIntro;
