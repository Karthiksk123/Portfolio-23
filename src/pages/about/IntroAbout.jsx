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
        Hey! I am a Full Stack (MERN) Developer. I have 1+ years of experience
        in Web App Development.
      </h3>
      <h5
        className="about-intro-desc"
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

export default IntroAbout;
