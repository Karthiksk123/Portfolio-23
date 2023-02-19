import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Parallax from "parallax-js";
import React, { useEffect, useRef } from "react";
import "./ProjectHero.scss";
import ProjectBg from '../../assets/Developer/devbg.png'
const ProjectHero = () => {
  let img = useRef(null);
  let heroTxt = useRef(null);
  let textBg = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    gsap.to(textBg, {
      scrollTrigger: {
        trigger: textBg,
        start: "40% center",
        toggleActions: "play pause reverse none",
        scrub: 1,
      },
      transformOrigin: "center center",
      ease: "power3.in",
      opacity: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        transformOrigin: "top top",
        trigger: heroTxt,
        start: "60% 40%",
        start: "240vh 45%",
        end: "340vh center",
        toggleActions: "play pause reverse none",
        scrub: 2.5,
      },
    });

    tl.to(heroTxt, {
      transformOrigin: "center center",
      y: "-60vw",
      opacity: 0,
      scale: "0.75",
      ease: "sine.out",
    }).to(img, {
      scale: 0.95,
      opacity: 0,
      duration: 2.5,
      ease: "power4.out",
    });

    const scene = document.getElementById("scene");
    const parallax = new Parallax(scene, {
      relativeInput: true,
    });
    parallax.friction(0.01, 0.02);
    return () => {
      parallax.disable();
    };
  }, []);

  return (
    <div className="pr-hero-wrapper">
      <h1 className="pr-text-bg" ref={(el) => (textBg = el)}>
        DO WHAT YOU LOVE & ACHIEVE YOUR GOALS
      </h1>
      <ul className="pr-hero-section" id="scene" data-clip-relative-path="true">
        <li className="pr-hello-layer" data-depth="-0.10">
          <h1 className="pr-hello-text" ref={(el) => (heroTxt = el)}>
            Projects
          </h1>
        </li>
        <li className="pr-bg-layer" data-depth="0.50">
          <img
            className="pr-bg-img"
            src={ProjectBg}
            alt=""
            ref={(el) => (img = el)}
          />
        </li>
      </ul>
    </div>
  );
};

export default ProjectHero;
