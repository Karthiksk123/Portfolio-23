import { motion } from "framer-motion";
import React, { useEffect } from "react";
import "./Developer.scss";
import DeveloperHero from "./DeveloperHero";
import DeveloperIntro from "./DeveloperIntro";
import TiltingEyes from "../../components/TiltingEyes/TiltingEyes";
import { row1, row2, row3, row4, toolsIcons } from "../../utils/DeveloperIcons";
import IconContainer from "../../utils/IconContainer";
import AOS from "aos";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import DeveloperEnd from "./DeveloperEnd";
import Header from "../../components/Header/Header";

const Developer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflowY = "scroll";
    AOS.init();
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);
  return (
    <motion.div
      className="developerPage__Wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Header />
      <div className="dev_inner_wrapper">
        <DeveloperHero />
        <div className="dev_lowersection">
          <DeveloperIntro />
          <div className="tools-section">
            <h1 className="tools-head">
              Languages/Libraries/Frameworks I Use as Developer
            </h1>
            <TiltingEyes />
            <div className="toolsiconcontainer">
              <div className="row1">
                {row1.map((r) => (
                  <IconContainer
                    key={r.Icon}
                    className={r.className}
                    data={r.data}
                    delay={r.delay}
                    duration={r.duration}
                    text={r.text}
                    Icon={r.Icon}
                    altText={r.altText}
                    innerClass={r.innerClass}
                  />
                ))}
              </div>
              <div className="row2">
                {row2.map((r) => (
                  <IconContainer
                    key={r.Icon}
                    className={r.className}
                    data={r.data}
                    delay={r.delay}
                    duration={r.duration}
                    text={r.text}
                    Icon={r.Icon}
                    altText={r.altText}
                    innerClass={r.innerClass}
                  />
                ))}
                <div
                  className="iconContainer"
                  data-aos="zoom-in"
                  data-aos-delay="450"
                  data-aos-duration="700"
                >
                  <div className="gsap-tooltip">GSAP</div>
                  <p>GSAP</p>
                </div>
              </div>
              <div className="row3">
                {row3.map((r) => (
                  <IconContainer
                    key={r.Icon}
                    className={r.className}
                    data={r.data}
                    delay={r.delay}
                    duration={r.duration}
                    text={r.text}
                    Icon={r.Icon}
                    altText={r.altText}
                    innerClass={r.innerClass}
                  />
                ))}
              </div>
              <div className="row4">
                {row4.map((r) => (
                  <IconContainer
                    key={r.Icon}
                    className={r.className}
                    data={r.data}
                    delay={r.delay}
                    duration={r.duration}
                    text={r.text}
                    Icon={r.Icon}
                    altText={r.altText}
                    innerClass={r.innerClass}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="toolsection2">
            <h1
              className="toolsHead"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              Tools I Use as Developer
            </h1>
            <div className="toolsiconcontainerdev">
              {toolsIcons.map((t) => (
                <IconContainer
                  key={t.Icon}
                  className={t.className}
                  data={t.data}
                  delay={t.delay}
                  duration={t.duration}
                  text={t.text}
                  Icon={t.Icon}
                  altText={t.altText}
                  innerClass={t.innerClass}
                  innerTextClass={t.innerTextClass}
                />
              ))}
            </div>
          </div>
          <DeveloperEnd />
        </div>
      </div>
    </motion.div>
  );
};

export default Developer;
