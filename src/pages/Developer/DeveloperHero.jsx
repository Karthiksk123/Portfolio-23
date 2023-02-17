import React from "react";
import "./DeveloperHero.scss";
import { useRef, useEffect } from "react";
import BoyImg from "../../assets/Developer/pose-2-p-500.png";
import DashboardImg from "../../assets/Developer/dashboard-p-800.png";
import UpperCloudImg from "../../assets/Developer/uppercloud.png";
import ChairImg from "../../assets/Developer/chair.png";
import LowerCloud from "../../assets/Developer/lowercloud.png";
import GearImg from "../../assets/Developer/gear.png";
import Parallax from "parallax-js";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const DeveloperHero = () => {
  let refer = useRef(null);
  let img1 = useRef(null);
  let img2 = useRef(null);
  let img3 = useRef(null);
  let img4 = useRef(null);
  let img5 = useRef(null);
  let img6 = useRef(null);
  let heroTxt = useRef(null);
  let textBg = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
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
        start: "240vh 45%",
        end: "340vh center",
        toggleActions: "play pause reverse none",
        scrub: 2,
      },
    });
    tl.to(heroTxt, {
      transformOrigin: "center center",
      y: "-60vw",
      ease: "sine.out",
      opacity: 0,
    }).to(".img", {
      scale: 0.95,
      opacity: 0,
      duration: 2.5,
      ease: "power4.out",
    });
    const scene = document.getElementById("scene");
    const parallax = new Parallax(scene, {
      relativeInput: true,
    });
    parallax.friction(0.02, 0.02);
    return () => {
      parallax.disable();
    };
  }, []);
  return (
    <div className="dev-hero-wrapper">
      <h1 className="dev-text-bg" ref={(el) => (textBg = el)}>
        DO WHAT YOU LOVE & ACHIEVE YOUR GOALS
      </h1>
      <ul
        className="dev-hero-section"
        id="scene"
        data-clip-relative-path="true"
      >
        <li className="dev-hello-layer" data-depth="-0.10">
          <h1 className="dev-hello-text" ref={(el) => (heroTxt = el)}>
            DEVELOPER
          </h1>
        </li>
        <li className="Boyimg-layer" data-depth="0.50">
          <img
            className="Boyimg-img"
            src={BoyImg}
            alt=""
            ref={(el) => (img1 = el)}
          />
        </li>
        <li className="dashboard-layer" data-depth="0.50">
          <img
            className="dashboard-img"
            src={DashboardImg}
            alt=""
            ref={(el) => (img2 = el)}
          />
        </li>
        <li className="uppercloud-layer" data-depth="0.50">
          <img
            className="uppercloud-img"
            src={UpperCloudImg}
            alt=""
            ref={(el) => (img3 = el)}
          />
        </li>
        <li className="chair-layer" data-depth="0.50">
          <img
            className="chair-img"
            src={ChairImg}
            alt=""
            ref={(el) => (img4 = el)}
          />
        </li>
        <li className="lowercloud-layer" data-depth="0.50">
          <img
            className="lowercloud-img"
            src={LowerCloud}
            alt=""
            ref={(el) => (img5 = el)}
          />
        </li>
        <li className="gear-layer" data-depth="0.50">
          <img
            className="gear-img"
            src={GearImg}
            alt=""
            ref={(el) => (img6 = el)}
          />
        </li>
      </ul>
    </div>
  );
};

export default DeveloperHero;
