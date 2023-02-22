import React from "react";
import "./Footer.scss";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="f-wrapper">
        <div className="f-w-head">
          <h1>Karthik Muneeswaran M</h1>
          <h3>-- Developer --</h3>
        </div>
        <div className="f-w-lowercontents">
          <a href="mailto:karthikofficial2002@gmail.com" target="_blank">
            <EmailIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/developerkarthik"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a href="https://github.com/Karthiksk123" target="_blank">
            <GitHubIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
