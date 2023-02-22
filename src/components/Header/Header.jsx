import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const willScroll = useMediaQuery({
    query: "(max-device-width: 760px)",
  });
  const [hideMe, setHideMe] = useState(true);
  const contactRef = useRef(null);
  const [verticalOffset, setVerticalOffset] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
    if (verticalOffset < 5) {
      window.addEventListener("scroll", () => {
        setVerticalOffset(window.pageYOffset);
      });
    }
    console.log("verticalOffset: ", verticalOffset);

    const t2 = gsap.timeline();

    if (verticalOffset >= 5) {
      t2.to(".link", {
        duration: 0.5,
        opacity: 0,
        y: -200,
        delay: 0,
        stagger: 0.3,
        ease: "power3.in",
      });
      t2.to("#Arrow", {
        opacity: 1,
        top: "20%",
        ease: "sine.out",
        duration: 0.5,
      });
    }

    if (verticalOffset == 0) {
      t2.fromTo(
        ".link",
        { duration: 0.2, opacity: 1, y: -200, delay: 1, stagger: 0.3 },
        { duration: 0.2, opacity: 1, y: 0, delay: 1, stagger: 0.3 }
      );
      t2.to("#Arrow", {
        opacity: 0,
        top: "-200%",
        ease: "sine.out",
        duration: 0.5,
      });
    }
  }, [verticalOffset]);

  const tl = gsap.timeline();
  tl.fromTo(
    contactRef.current,
    {
      scaleY: 0,
    },
    {
      scaleY: 1,
      ease: "power3.inOut",
      transformOrigin: "50% 50%",
    }
  );
  tl.reversed(false);

  const animateIt = () => {
    //animate on click contact
    tl.reversed(!tl.reversed());
    if (hideMe === true) {
      document.body.style.overflow = "hidden";
      setHideMe(!hideMe);
    } else {
      setTimeout(() => {
        setHideMe(!hideMe);
        document.body.style.overflowY = "scroll";
      }, 1000);
    }
  };

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <span className="nav-logo link"  onClick={() => navigate("/")}>KMW</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a className="link" onClick={() => navigate("/")}>
          Home
        </a>
        <a className="link"  onClick={() => navigate("/about")}>About Me</a>
        <a className="link"  onClick={() => navigate("/developer")}>Developer</a>
        <a className="link"  onClick={() => navigate("/projects")}>Projects</a>
        <div className="footer-m-nav">
          <Footer />
        </div>
      </div>
      <div
        className={`nav-toggle link ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Header;
